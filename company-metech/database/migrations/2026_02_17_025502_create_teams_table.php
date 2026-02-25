<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teams', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->string('position', 50);
            $table->string('photo', 255)->nullable(); // Ukuran 50 terlalu kecil untuk nama file gambar, disarankan 255
            $table->text('bio')->nullable();
            
            // Perbaikan: default wajib diisi angka
            $table->integer('sort_order')->default(1); 
            
            // Tambahkan ini agar fitur on/off di Filament tidak error lagi
            $table->boolean('status')->default(true); 
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teams');
    }
};