<?php

namespace App\Http\Controllers\Question;

use App\Http\Controllers\Controller;
use App\Models\Answer;
use App\Models\Question;
use App\Models\QuestionCategory;
use App\Models\User;
use Illuminate\Http\Request;
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
        $question = Question::where('category_id', $categoryId)->inRandomOrder()->first();
        return Inertia::render('gameScreen', [
            'question' => $question,
            'answers' => $question->answers,
            'categories' => QuestionCategory::all(),
            'leaders' => User::orderByDesc('points')->get(),
        ]);
    }

    public function answer($answerId, $points = 50)
    {
        $answer = Answer::find($answerId);
        $isCorrect = $answer->is_correct;
        if ($isCorrect) {
            $account = auth()->user();
            $account->increment('points', $points);
        }
        return [
            'isCorrect' => $isCorrect,
        ];
    }
}
