<?php

namespace App\Filament\Resources\BlogResource\Pages;

use App\Filament\Resources\BlogResource;
use Filament\Resources\Pages\CreateRecord;

class CreateBlog extends CreateRecord
{
    protected static string $resource = BlogResource::class;
     protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    // Tambahkan kata kunci 'static' di sini
    public static function canCreateAnother(): bool
    {
        return false;
    }
}