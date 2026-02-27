<?php

namespace App\Filament\Widgets;

use App\Models\Contact;
use Filament\Widgets\ChartWidget;
use Flowframe\Trend\Trend;
use Flowframe\Trend\TrendValue;

class MessageChart extends ChartWidget
{
    protected static ?string $heading = 'Statistik Pesan Masuk Mingguan';
   protected static ?int $sort = 2; 
    protected int | string | array $columnSpan = 1;

    protected function getData(): array
    {
        // Mengambil data tren dari tabel Contact selama 7 hari terakhir
        $data = Trend::model(Contact::class)
            ->between(
                start: now()->startOfWeek(),
                end: now()->endOfWeek(),
            )
            ->perDay()
            ->count();

        return [
            'datasets' => [
                [
                    'label' => 'Pesan Masuk',
                    // Memasukkan hasil perhitungan database ke dalam grafik
                    'data' => $data->map(fn (TrendValue $value) => $value->aggregate),
                    'fill' => 'start',
                    'borderColor' => '#12B3A8',
                    'backgroundColor' => 'rgba(18, 179, 168, 0.1)',
                    'tension' => 0.4,
                ],
            ],
            // Mengambil nama hari secara otomatis
            // Di dalam fungsi getData()
'labels' => $data->map(fn (TrendValue $value) => \Carbon\Carbon::parse($value->date)->translatedFormat('D')),
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}