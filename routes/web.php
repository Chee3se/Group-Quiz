<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QuizController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/quiz', [QuizController::class, 'index'])->name('quiz.index');
    Route::get('/quizzes/{id}', [QuizController::class, 'show'])->name('quizzes.show');
});

Route::get('/admin', function () {
    return Inertia::render('Quiz/Admin', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('admin');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
