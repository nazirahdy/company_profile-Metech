<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    use HasFactory;
    protected $table = 'categories'; 

    protected $fillable = [
        'nama',
        'slug',
    ];

    // Relasi: Satu Kategori memiliki banyak Portofolio (One-to-Many)
    public function portofolios()
    {
        return $this->hasMany(Portofolio::class, 'category_id');
    }
}
