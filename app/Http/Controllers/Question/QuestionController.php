<?php

namespace App\Http\Controllers\Question;

use App\Http\Controllers\Controller;
use App\Models\Question;
use App\Models\QuestionCategory;
use Inertia\Inertia;

class QuestionController extends Controller
{
    public function index()
    {
        return Inertia::render('categories', [
            'categories' => QuestionCategory::all(),
        ]);
    }

    public function show($id)
    {
        $categoriesQuestions = QuestionCategory::find($id);
        $questionsYears = $categoriesQuestions->questions->groupBy('year');
        return Inertia::render('category', [
            'questionsName' => $categoriesQuestions->name,
            'questionsYears' => array_keys($questionsYears->toArray()),
        ]);
    }

    public function questions($categoryId, $year)
    {
        $questionCategory = QuestionCategory::find($categoryId);
        $questions = $questionCategory->questions->where('year', $year)->toArray();
        array_unshift($questions);
        return Inertia::render('questions', [
            'questions' => $questions,
        ]);
    }

    public function question($questionId)
    {
        $question = Question::find($questionId);
        $answers = $question->answers->shuffle();
        return Inertia::render('answerQuestion', [
            'question' => $question,
            'answers' => $answers,
        ]);
    }
}
