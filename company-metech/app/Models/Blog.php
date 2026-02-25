<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $table = 'blogs'; 

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
    return $this->belongsTo(User::class, 'publisher_id');
}
}
