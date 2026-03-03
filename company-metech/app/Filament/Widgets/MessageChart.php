<?php

namespace App\Filament\Widgets;

use App\Models\Contact;
use Filament\Widgets\ChartWidget;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class MessageChart extends ChartWidget
{
    protected static ?string $heading = 'Statistik Pesan Masuk Mingguan';
    protected static ?int $sort = 2; 
    protected int | string | array $columnSpan = 1;

    protected function getData(): array
    {
        // 1. Tentukan rentang waktu (Awal minggu sampai Akhir minggu)
        $start = now()->startOfWeek();
        $end = now()->endOfWeek();

        // 2. Ambil data asli dari Database
        $rawData = Contact::select(
                DB::raw('DATE(created_at) as date'),
                DB::raw('count(*) as aggregate')
            )
            ->whereBetween('created_at', [$start, $end])
            ->groupBy('date')
            ->get()
            ->pluck('aggregate', 'date'); // Format: ['2026-03-02' => 3]

        // 3. Buat kerangka data untuk 7 hari (Senin - Minggu)
        $counts = [];
        $labels = [];

        for ($date = $start->copy(); $date <= $end; $date->addDay()) {
            $formattedDate = $date->format('Y-m-d');
            
            // Masukkan nama hari ke labels
            $labels[] = $date->translatedFormat('D'); 
            
            // Ambil jumlah pesan, jika tidak ada maka isi 0 agar garis tersambung
            $counts[] = $rawData->get($formattedDate, 0); 
        }

        return [
            'datasets' => [
                [
                    'label' => 'Pesan Masuk',
                    'data' => $counts, // Berisi 7 angka sesuai jumlah hari
                    'fill' => 'start',
                    'borderColor' => '#12B3A8',
                    'backgroundColor' => 'rgba(18, 179, 168, 0.1)',
                    'tension' => 0.4,
                ],
            ],
            'labels' => $labels,
        ];
    }

    protected function getOptions(): array
    {
        return [
            'scales' => [
                'y' => [
                    'min' => 0,
                    'max' => 10,
                    'ticks' => [
                        'stepSize' => 1,
                    ],
                ],
            ],
            'plugins' => [
                'legend' => [
                    'display' => true,
                ],
            ],
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}