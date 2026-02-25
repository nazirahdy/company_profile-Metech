<?php

namespace App\Filament\Resources\PortofolioResource\Pages;

use App\Filament\Resources\PortofolioResource;
use Filament\Resources\Pages\CreateRecord;

class CreatePortofolio extends CreateRecord
{
    protected static string $resource = PortofolioResource::class; protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    // Tambahkan kata kunci 'static' di sini
    public static function canCreateAnother(): bool
    {
        return false;
    }
}