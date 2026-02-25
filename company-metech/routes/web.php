<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Models\Team;
use App\Models\Contact;
use App\Models\Categorie;
use App\Models\Portofolio;
use App\Models\Service;
use App\Models\Blog;
use App\Models\Testimonial; // Import model Testimonial

/*
|--------------------------------------------------------------------------
| Web Routes & API Routes
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('welcome');
});

// --------------------------------------------------------------------------
// API ENDPOINTS (Digunakan oleh Frontend React)
// --------------------------------------------------------------------------

/** 1. API LEADERS (TEAM) */
Route::get('/api/leaders', function () {
    return response()->json(Team::where('status', true)->orderBy('sort_order', 'asc')->get());
});

/** 2. API CATEGORIES */
Route::get('/api/categories', function () {
    return response()->json(Categorie::all());
});

/** 3. API PORTOFOLIO */
Route::get('/api/portfolios', function () {
    return response()->json(Portofolio::with('category')->latest()->get());
});

Route::get('/api/portfolios/{id}', function ($id) {
    $portfolio = Portofolio::with('category')->find($id);
    return $portfolio ? response()->json($portfolio) : response()->json(['message' => 'Not Found'], 404);
});

/** 4. API CONTACT MESSAGES */
Route::post('/api/messages', function (Request $request) {
    $validated = $request->validate([
        'name'    => 'required|string|max:100',
        'email'   => 'required|email|max:100',
        'phone'   => 'required|string', 
        'subject' => 'required|string|max:255',
        'message' => 'required|string',
    ]);

    Contact::create([
        'name'       => $validated['name'],
        'email'      => $validated['email'],
        'no_telepon' => $validated['phone'], 
        'subject'    => $validated['subject'],
        'message'    => $validated['message'],
        'is_read'    => false,
    ]);

    return response()->json(['message' => 'Pesan berhasil dikirim!'], 201);
});

/** 5. API SERVICES */
Route::get('/api/services', function () {
    return response()->json(Service::all());
});

/** 6. API BLOGS */
Route::get('/api/blogs', function () {
    return response()->json(Blog::latest()->get());
});

Route::get('/api/blogs/{id}', function ($id) {
    $blog = Blog::find($id);
    return $blog ? response()->json($blog) : response()->json(['message' => 'Blog Not Found'], 404);
});

/** 7. API TESTIMONIALS (TAMBAHAN BARU) */
Route::get('/api/testimonials', function () {
    return response()->json(Testimonial::orderBy('sort_order', 'asc')->get());
});