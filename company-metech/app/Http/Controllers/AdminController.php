<?php

namespace App\Http\Controllers; // Harus persis seperti ini

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function index()
    {
        return view('admin.dashboard'); // Pastikan view ini ada
    }
}