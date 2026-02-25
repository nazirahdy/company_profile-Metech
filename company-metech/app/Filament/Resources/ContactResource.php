<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ContactResource\Pages;
use App\Models\Contact;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Model;

class ContactResource extends Resource
{
    protected static ?string $model = Contact::class;

    protected static ?string $navigationIcon = 'heroicon-o-envelope';

    // 1. Tetap matikan fitur Create karena pesan datang dari user website
    public static function canCreate(): bool
    {
        return false;
    }

    // 2. Tetap matikan fitur Edit agar pesan asli tidak bisa diubah admin
    public static function canEdit(Model $record): bool
    {
        return false;
    }

    // 3. AKTIFKAN fitur Delete agar admin bisa menghapus pesan
    public static function canDelete(Model $record): bool
    {
        return true;
    }

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Detail Pesan Pengunjung')
                    ->schema([
                        Forms\Components\TextInput::make('name')
                            ->label('Nama Pengirim'),
                        Forms\Components\TextInput::make('email')
                            ->label('Alamat Email'),
                        Forms\Components\TextInput::make('no_telepon')
                            ->label('No Telepon'),
                        Forms\Components\TextInput::make('subject')
                            ->label('Subjek Pesan')
                            ->columnSpanFull(),
                        Forms\Components\Textarea::make('message')
                            ->label('Isi Pesan')
                            ->columnSpanFull()
                            ->rows(5),
                    ])->columns(2),
            ])->disabled(); 
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Nama')
                    ->searchable()
                    ->sortable(),
                Tables\Columns\TextColumn::make('email')
                    ->label('Email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('no_telepon')
                    ->label('no_telepon')
                    ->searchable(),
                Tables\Columns\TextColumn::make('subject')
                    ->label('Subjek')
                    ->limit(50),
                Tables\Columns\TextColumn::make('created_at')
                    ->label('Waktu Masuk')
                    ->dateTime()
                    ->sortable(),
            ])
            ->defaultSort('created_at', 'desc')
            ->actions([
                // Menampilkan tombol View dan Delete bersandingan
                Tables\Actions\ViewAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                // Mengaktifkan hapus massal (centang banyak lalu hapus)
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListContacts::route('/'),
        ];
    }
}