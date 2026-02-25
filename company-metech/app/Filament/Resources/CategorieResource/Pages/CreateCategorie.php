<?php

namespace App\Filament\Resources\CategorieResource\Pages; // Namespace harus CategorieResource

use App\Filament\Resources\CategorieResource;
use Filament\Resources\Pages\CreateRecord;

class CreateCategorie extends CreateRecord // Nama class harus sesuai nama file
{
    protected static string $resource = CategorieResource::class;
    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    public static function canCreateAnother(): bool
    {
        return false;
    }
}