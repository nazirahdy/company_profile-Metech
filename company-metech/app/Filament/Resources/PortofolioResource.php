<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PortofolioResource\Pages;
use App\Models\Portofolio;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class PortofolioResource extends Resource
{
    protected static ?string $model = Portofolio::class;

    protected static ?string $navigationIcon = 'heroicon-o-briefcase';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Data Portofolio')
                    ->schema([
                        // Dropdown untuk memilih kategori berdasarkan database
                        Forms\Components\Select::make('category_id')
                            ->label('Kategori')
                            ->relationship('category', 'nama') 
                            ->required()
                            ->searchable()
                            ->preload(),

                        Forms\Components\TextInput::make('title')
                            ->label('Judul Proyek')
                            ->required()
                            ->maxLength(100),

                        Forms\Components\TextInput::make('client_name')
                            ->label('Nama Klien')
                            ->required()
                            ->maxLength(100),

                        Forms\Components\FileUpload::make('image')
                            ->label('Gambar Portofolio')
                            ->disk('public')
                            ->directory('portofolios')
                            ->required(),

                        Forms\Components\TextInput::make('project_url')
                            ->label('URL Proyek')
                            ->url()
                            ->maxLength(50),

                        Forms\Components\RichEditor::make('description')
                            ->label('Deskripsi')
                            ->required()
                            ->columnSpanFull(),
                    ])->columns(2),
            ]);
    }


    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('image')
                    ->label('Preview')
                    ->disk('public'),

                Tables\Columns\TextColumn::make('title')
                    ->label('Judul')
                    ->searchable()
                    ->sortable(),

                Tables\Columns\TextColumn::make('category.nama')
                    ->label('Kategori')
                    ->sortable()
                    ->badge(),

                Tables\Columns\TextColumn::make('client_name')
                    ->label('Klien')
                    ->searchable(),

                Tables\Columns\TextColumn::make('project_url')
                    ->label('Link')
                    ->icon('heroicon-m-link')
                    ->limit(20)
                    ->openUrlInNewTab(),

                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('category')
                    ->relationship('category', 'nama'),
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
            'index' => Pages\ListPortofolios::route('/'),
            'create' => Pages\CreatePortofolio::route('/create'),
            'edit' => Pages\EditPortofolio::route('/{record}/edit'),
        ];
    }
}