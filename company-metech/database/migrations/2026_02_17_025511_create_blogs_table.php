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
    Schema::create('blogs', function (Blueprint $table) {
        $table->id();
        $table->string('title', 50);
        $table->string('slug', 50);
        $table->text('content');
        $table->string('featured_image', 50);
        
        // Relasi ke tabel Users (sebagai publisher)
        $table->foreignId('publisher_id')->constrained('users')->onDelete('cascade');
        
        $table->enum('status', ['published', 'draft'])->default('draft');
        $table->string('creator_name', 50);
        $table->timestamps(); // Ini akan mencakup created_at TIMESTAMP sesuai skema
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blogs');
    }
};
