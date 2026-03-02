<?php

namespace App\Filament\Resources;

use App\Filament\Resources\BlogResource\Pages;
use App\Models\Blog;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Forms\Set;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Support\Str;

class BlogResource extends Resource
{
    protected static ?string $model = Blog::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';

 public static function form(Form $form): Form
{
    return $form
        ->schema([
            Forms\Components\Section::make('Artikel Baru')
                ->schema([
                    Forms\Components\TextInput::make('title')
                        ->label('Title')
                        ->required()
                        ->maxLength(50)
                        ->live(onBlur: true)
                        ->afterStateUpdated(fn (string $operation, $state, Forms\Set $set) => 
                            $operation === 'create' ? $set('slug', \Illuminate\Support\Str::slug($state)) : null),

                    Forms\Components\TextInput::make('slug')
                        ->label('Slug')
                        ->required()
                        ->maxLength(50)
                        ->unique(ignoreRecord: true),

                    Forms\Components\Select::make('status')
                        ->label('Status')
                        ->options([
                            'published' => 'Published',
                            'draft' => 'Draft',
                        ])
                        ->default('draft')
                        ->required()
                        ->native(false),

                    // PERBAIKAN DI SINI: Baris default dihapus agar tidak muncul nama otomatis
                    Forms\Components\TextInput::make('creator_name')
                        ->label('Penulis')
                        ->placeholder('Masukkan nama penulis...')
                        ->required()
                        ->maxLength(50),

                    // Publisher ID tetap terisi otomatis di latar belakang (Hidden)
                    Forms\Components\Select::make('publisher_id')
                        ->label('Publisher')
                        ->relationship('publisher', 'name') // Mengambil data otomatis dari tabel Users
                        ->searchable()
                        ->preload()
                        ->placeholder('Pilih user publisher...')
                        ->required()
                        ->native(false),

                    Forms\Components\FileUpload::make('featured_image')
                        ->label('Gambar Utama')
                        ->image()
                        ->disk('public')
                        ->directory('blogs')
                        ->required(),

                    Forms\Components\RichEditor::make('content')
                        ->label('Isi Konten')
                        ->required()
                        ->columnSpanFull(),
                ])->columns(2),
        ]);
}

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('featured_image')
                    ->label('Gambar'),

                Tables\Columns\TextColumn::make('title')
                    ->label('Judul')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'published' => 'success',
                        'draft' => 'gray',
                    }),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Dibuat')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'published' => 'Published',
                    ]),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListBlogs::route('/'),
            'create' => Pages\CreateBlog::route('/create'),
            'edit' => Pages\EditBlog::route('/{record}/edit'),
        ];
    }
}