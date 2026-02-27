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

        // 2. Ambil data langsung dari Database menggunakan Query Group By
        $data = Contact::select(
                DB::raw('DATE(created_at) as date'),
                DB::raw('count(*) as aggregate')
            )
            ->whereBetween('created_at', [$start, $end])
            ->groupBy('date')
            ->orderBy('date', 'ASC')
            ->get();

        // 3. Mapping data untuk Chart
        return [
            'datasets' => [
                [
                    'label' => 'Pesan Masuk',
                    'data' => $data->pluck('aggregate'), // Ambil jumlahnya
                    'fill' => 'start',
                    'borderColor' => '#12B3A8',
                    'backgroundColor' => 'rgba(18, 179, 168, 0.1)',
                    'tension' => 0.4,
                ],
            ],
            // Format label menjadi nama hari (Sen, Sel, Rab, dst)
            'labels' => $data->map(fn ($value) => Carbon::parse($value->date)->translatedFormat('D')),
        ];
    }

    protected function getType(): string
    {
        return 'line';
    }
}