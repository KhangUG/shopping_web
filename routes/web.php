<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/home', function () {
    return view('home');
});

Route::prefix('categories')->group(function () {
    Route::get('/', [
        'as' => 'categories.index',
        'uses' => 'App\Http\Controllers\CategoryController@index' 
    ]);

    Route::get('/create', [
        'as' => 'categories.create',
        'uses' => 'App\Http\Controllers\CategoryController@create' 
    ]);
});


