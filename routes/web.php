<?php

use Illuminate\Support\Facades\Route;


Route::get('/', [App\Http\Controllers\PostController::class, "index"]);
Route::get("/post/{post}", [App\Http\Controllers\PostController::class, "view"]);

Route::middleware('auth')->group(function() {
    Route::post('/post/{post}/comment', [App\Http\Controllers\CommentController::class, "store"]);
});



Auth::routes();

