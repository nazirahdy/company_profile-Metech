<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Portofolio extends Model
{
    use HasFactory;

    // Menentukan nama tabel secara eksplisit sesuai database
    protected $table = 'portofolios'; 

    protected $fillable = [
        'category_id', 
        'title', 
        'client_name', 
        'image', 
        'description', 
        'project_url'
    ];

    /**
     * Relasi ke model Categorie
     * Portofolio dimiliki oleh satu Kategori
     */
    public function category(): BelongsTo
    {
        // Pastikan nama class Categorie sesuai dengan file di app/Models/Categorie.php
        return $this->belongsTo(Categorie::class, 'category_id');
    }
}