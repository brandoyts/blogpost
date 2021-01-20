<?php

use Illuminate\Support\Facades\Route;



Route::get('/', [App\Http\Controllers\PostController::class, "index"]);
Route::get("/post/{postId}", [App\Http\Controllers\PostController::class, "view"]);


Auth::routes();

