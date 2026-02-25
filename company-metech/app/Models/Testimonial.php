<?php

namespace App\Models;

// PERBAIKAN: Gunakan namespace yang benar di bawah ini
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    // Sekarang trait ini bisa ditemukan karena import di atas sudah benar
    use HasFactory;

    protected $table = 'testimonials';

    protected $fillable = [
        'name',
        'avatar',
        'content',
        'position',
        'sort_order',
    ];
}