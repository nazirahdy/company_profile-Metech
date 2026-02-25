<?php

namespace App\Providers\Filament;

use Filament\Http\Middleware\Authenticate;
use Filament\Http\Middleware\AuthenticateSession;
use Filament\Http\Middleware\DisableBladeIconComponents;
use Filament\Http\Middleware\DispatchServingFilamentEvent;
use Filament\Pages;
use Filament\Panel;
use Filament\PanelProvider;
use Filament\Support\Colors\Color;
use Filament\Widgets;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Cookie\Middleware\EncryptCookies;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;
use Illuminate\Routing\Middleware\SubstituteBindings;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;

class AdminPanelProvider extends PanelProvider
{
    public function panel(Panel $panel): Panel
    {
        return $panel
            ->default()
            ->id('admin')
            ->path('admin')
            ->login()
            
            // --- MULAI PENGATURAN BRANDING ME-TECH ---
            
            // 1. Mengubah Warna Tema Utama
            ->colors([
                'primary' => Color::hex('#12B3A8'), 
            ])
            
            // 2. Mengatur Logo Utama
            ->brandLogo(asset('images/logo-metech.png'))
            ->brandLogoHeight('2.5rem') 
            
            // 3. Mengatur Favicon
            ->favicon(asset('images/logo-metech.png'))
            
            // 4. Mengubah Font Admin Panel
            ->font('Poppins')
            
            // --- AKHIR PENGATURAN BRANDING ---

            ->discoverResources(in: app_path('Filament/Resources'), for: 'App\\Filament\\Resources')
            ->discoverPages(in: app_path('Filament/Pages'), for: 'App\\Filament\\Pages')
            ->pages([
                Pages\Dashboard::class,
            ])
            ->discoverWidgets(in: app_path('Filament/Widgets'), for: 'App\\Filament\\Widgets')
            ->widgets([
                // Widgets bawaan Filament (AccountWidget & FilamentInfoWidget) 
                // sudah dihapus dari sini agar tampilan bersih dari logo GitHub/Filament.
                // Nantinya hanya widget statistik custom kamu yang akan muncul otomatis.
            ])
            ->middleware([
                EncryptCookies::class,
                AddQueuedCookiesToResponse::class,
                StartSession::class,
                AuthenticateSession::class,
                ShareErrorsFromSession::class,
                VerifyCsrfToken::class,
                SubstituteBindings::class,
                DisableBladeIconComponents::class,
                DispatchServingFilamentEvent::class,
            ])
            ->authMiddleware([
                Authenticate::class,
            ]);
    }
}