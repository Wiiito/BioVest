<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/game', function () {
    return Inertia::render('game');
});

Route::get('/questions', function () {
    return Inertia::render('questions');
});

Route::get('/chatbot', function () {
    return Inertia::render('chatbot');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
