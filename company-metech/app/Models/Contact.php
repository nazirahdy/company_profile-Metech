<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'name',
        'email',
        'no_telepon',
        'subject',
        'message',
        'is_read',
    ];
}