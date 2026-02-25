<?php

namespace App\Filament\Resources;

use App\Filament\Resources\TeamResource\Pages;
use App\Models\Team;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class TeamResource extends Resource
{
    protected static ?string $model = Team::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-group';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Informasi Anggota Tim')
                    ->description('Masukkan detail lengkap anggota tim Me-Tech.')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nama Lengkap')
                            ->required()
                            ->maxLength(255),

                        Forms\Components\TextInput::make('position')
                            ->label('Jabatan / Posisi')
                            ->required()
                            ->maxLength(255),

                        Forms\Components\FileUpload::make('photo')
                            ->label('Foto Profil')
                            ->image()
                            ->disk('public')
                            ->directory('teams')
                            ->avatar() 
                            ->imageEditor() 
                            ->circleCropper(), 

                        Forms\Components\TextInput::make('sort_order')
                            ->label('Urutan Tampilan')
                            ->numeric()
                            ->default(1)
                            ->required(),

                        // FITUR STATUS ON/OFF
                        Forms\Components\Toggle::make('status')
                            ->label('Status Aktif')
                            ->helperText('Jika OFF, anggota tim tidak akan muncul di website.')
                            ->default(true) // Default menyala saat tambah data baru
                            ->onColor('success')
                            ->offColor('danger'),
                            
                    ])->columns(2),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\ImageColumn::make('photo')
                    ->label('Foto')
                    ->disk('public')
                    ->circular(),

                Tables\Columns\TextColumn::make('name')
                    ->label('Nama')
                    ->searchable()
                    ->sortable(),

                // TAMPILAN STATUS DI TABEL
                Tables\Columns\IconColumn::make('status')
                    ->label('Status')
                    ->boolean() // Menampilkan icon ceklis/silang otomatis
                    ->sortable(),

                Tables\Columns\TextColumn::make('position')
                    ->label('Posisi'),

                Tables\Columns\TextColumn::make('sort_order')
                    ->label('Urutan')
                    ->sortable(),
            ])
            ->defaultSort('sort_order', 'asc')
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
            'index' => Pages\ListTeams::route('/'),
            'create' => Pages\CreateTeam::route('/create'),
            'edit' => Pages\EditTeam::route('/{record}/edit'),
        ];
    }
}