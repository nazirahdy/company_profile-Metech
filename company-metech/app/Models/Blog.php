<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $table = 'blogs'; 

    // TAMBAHKAN BARIS INI: Memaksa relasi publisher selalu ikut dalam JSON API
    protected $with = ['publisher']; 

    protected $fillable = [
        'title', 
        'slug', 
        'content', 
        'featured_image', 
        'publisher_id', 
        'status', 
        'creator_name'
    ];

    public function publisher()
    {
        // Pastikan User::class sudah di-import di atas jika diperlukan
        return $this->belongsTo(User::class, 'publisher_id');
    }
}