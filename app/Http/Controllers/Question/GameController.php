<?php

namespace App\Http\Controllers\Question;

use App\Http\Controllers\Controller;
use App\Models\Answer;
use App\Models\Question;
use App\Models\QuestionCategory;
use Inertia\Inertia;

class GameController extends Controller
{
    public function index()
    {
        return Inertia::render('game', [
            'categories' => QuestionCategory::all(),
        ]);
    }

    public function answerGame($categoryId)
    {
        return Inertia::render('gameScreen', []);
    }
}
