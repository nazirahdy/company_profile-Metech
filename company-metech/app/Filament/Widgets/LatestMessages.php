<?php

namespace App\Filament\Widgets;

use App\Models\Contact;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class LatestMessages extends BaseWidget
{
    protected static ?string $heading = '⚠️ Pesan Pending Terbaru';
    
    protected static ?int $sort = 3;

    protected int | string | array $columnSpan = 1;

    public function table(Table $table): Table
    {
        return $table
            // PERBAIKAN: Menambahkan filter 'pending' agar hanya pesan belum diproses yang muncul
            ->query(
                Contact::query()
                    ->where('status', 'pending')
                    ->latest()
                    ->limit(5)
            )
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->label('Pengirim')
                    ->weight('bold')
                    ->description(fn (Contact $record): string => $record->email),

                // PERBAIKAN: Mengganti kolom 'message' menjadi 'status'
                Tables\Columns\TextColumn::make('status')
                    ->label('Status')
                    ->badge()
                    ->color('warning') // Warna kuning untuk menandakan perlu perhatian
                    ->formatStateUsing(fn (string $state): string => ucfirst($state)),

                Tables\Columns\TextColumn::make('created_at')
                    ->label('Waktu')
                    ->since()
                    ->badge()
                    ->color('primary'),
            ])
            ->paginated(false);
    }
}