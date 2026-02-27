<?php

namespace App\Filament\Widgets;

use App\Models\Blog;
use App\Models\Categorie;
use App\Models\Team;
use App\Models\Portofolio;
use App\Models\Testimonial;
use App\Models\User;
use App\Models\Contact; // Tambahkan import Model Contact ini
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class StatsOverview extends BaseWidget
{
    protected static ?int $sort = 1;
    protected int | string | array $columnSpan = 'full';
    protected function getColumns(): int
    {
        return 3;
    }
    protected function getStats(): array
    {
        return [
            Stat::make('Total Blog', Blog::count())
                ->description('Artikel yang dipublikasikan')
                ->descriptionIcon('heroicon-m-document-text')
                ->color('primary'),

            Stat::make('Total Portofolio', Portofolio::count())
                ->description('Proyek Me-Tech')
                ->descriptionIcon('heroicon-m-briefcase')
                ->color('primary'),

            Stat::make('Total Tim', Team::count())
                ->description('Anggota tim aktif')
                ->descriptionIcon('heroicon-m-users')
                ->color('primary'),

            Stat::make('Total Categorie', Categorie::count())
                ->description('Kategori blog aktif')
                ->descriptionIcon('heroicon-m-tag')
                ->color('primary'),

            // Bagian Pesan Baru yang ditambahkan
           Stat::make('Total Pesan', \App\Models\Contact::count())
                ->description('Pesan masuk dari website')
                ->descriptionIcon('heroicon-m-envelope')
                ->color('primary'),

           Stat::make('Total Testimonial', Testimonial::count())
                ->description('Ulasan klien Me-Tech')
                ->descriptionIcon('heroicon-m-chat-bubble-left-right')
                ->color('primary'),
        ];
    }
}