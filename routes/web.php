<?php

use App\Http\Controllers\Question\QuestionController;
use App\Http\Controllers\Settings\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit']);

    Route::put('/profile/icon', [ProfileController::class, 'changeIcon'])->name('profile.icon.change');

    Route::get('/game', function () {
        return Inertia::render('game');
    });

    Route::get('/category', [QuestionController::class, 'index'])->name('category.index');
    Route::get('/category/{categoryId}', [QuestionController::class, 'show'])->name('category.show');

    Route::get('/category/{categoryId}/questions/{year}', [QuestionController::class, 'questions'])->name('questions.index');
    Route::get('/question/{questionId}', [QuestionController::class, 'question'])->name('question.show');

    Route::get('/answer/{awnserId}', [QuestionController::class, 'answerQuestion'])->name('answer');

    Route::get('/chatbot', function () {
        return Inertia::render('chatbot');
    });
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
