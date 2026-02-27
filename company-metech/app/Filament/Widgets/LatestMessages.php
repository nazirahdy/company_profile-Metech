<?php

namespace App\Filament\Widgets;

use App\Models\Contact;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class LatestMessages extends BaseWidget
{
    protected static ?string $heading = '💬 Pesan Masuk Terbaru';
    
    // Tambahkan properti ini agar posisinya turun ke bawah (di bawah kartu statistik)
    protected static ?int $sort = 3;

    // Ini agar widget tabel mengambil separuh layar saja (berdampingan dengan grafik)
    protected int | string | array $columnSpan = 1;

    public function table(Table $table): Table
    {
        return $table
            ->query(Contact::query()->latest()->limit(5))
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Pengirim')
                    ->weight('bold')
                    ->description(fn (Contact $record): string => $record->email),

                Tables\Columns\TextColumn::make('message')
                    ->label('Isi Pesan')
                    ->limit(40)
                    ->tooltip(fn (Contact $record): string => $record->message),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Waktu')
                    ->since()
                    ->badge()
                    ->color('primary'),
            ])
            ->paginated(false);
    }
}