<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TestimonialResource\Pages;
use App\Filament\Resources\TestimonialResource\RelationManagers;
use App\Models\Testimonial;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class TestimonialResource extends Resource
{
    protected static ?string $model = Testimonial::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
{
    return $form
        ->schema([
            Forms\Components\Section::make('Data Testimonial')
                ->description('Masukkan ulasan dari klien Me-tech.')
                ->schema([
                    Forms\Components\FileUpload::make('avatar')
                        ->image()
                        ->avatar() // Membuat preview jadi bulat
                        ->directory('testimonials')
                        ->imageEditor(),

                    Forms\Components\Group::make([
                        Forms\Components\TextInput::make('name')
                            ->label('Nama Klien')
                            ->required()
                            ->maxLength(100),

                        Forms\Components\TextInput::make('position')
                            ->label('Jabatan/Perusahaan')
                            ->placeholder('Contoh: CEO di TechCorp')
                            ->required()
                            ->maxLength(100),
                            
                        Forms\Components\TextInput::make('sort_order')
                            ->label('Urutan Tampilan')
                            ->numeric()
                            ->default(1),
                    ]),

                    Forms\Components\Textarea::make('content')
                        ->label('Isi Testimoni')
                        ->required()
                        ->columnSpanFull()
                        ->rows(4),
                ])->columns(2),
        ]);
}

public static function table(Table $table): Table
{
    return $table
        ->columns([
            Tables\Columns\ImageColumn::make('avatar')
                ->circular(),
            Tables\Columns\TextColumn::make('name')
                ->label('Nama')
                ->searchable()
                ->sortable(),
            Tables\Columns\TextColumn::make('position')
                ->label('Posisi/Instansi')
                ->color('gray'),
            Tables\Columns\TextColumn::make('sort_order')
                ->label('Urutan')
                ->sortable(),
        ])
        ->defaultSort('sort_order', 'asc')
        ->actions([
            Tables\Actions\EditAction::make(),
            Tables\Actions\DeleteAction::make(),
        ]);
}

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
       return [
        'index' => Pages\ListTestimonial::route('/'),
        'create' => Pages\CreateTestimonial::route('/create'),
        'edit' => Pages\EditTestimonial::route('/{record}/edit'),
    ];
    }
}
