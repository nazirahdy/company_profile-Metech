<?php

namespace App\Filament\Resources\TestimonialResource\Pages;

use App\Filament\Resources\TestimonialResource;
use Filament\Resources\Pages\CreateRecord;

class CreateTestimonial extends CreateRecord 
{
    protected static string $resource = TestimonialResource::class;

    // Cara ini lebih saklek untuk menghapus tombol tambahan di halaman Create
    protected function getFormActions(): array
    {
        return [
            $this->getCreateFormAction(),
            $this->getCancelFormAction(),
        ];
    }

    protected function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}