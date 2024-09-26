<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\Score;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class QuizController extends Controller
{
    public function index(): Response
    {
        //return the quizzes alongside the lenght of each quiz's questions
        $quizzes = Quiz::withCount('questions')->get();
        return Inertia::render('Quiz/Index', ['quizzes' => $quizzes]);
    }

    public function show($id): Response
    {
        $quiz = Quiz::with(['questions' => function($query) {
            $query->inRandomOrder()->with(['answers' => function($query) {
                $query->inRandomOrder();
            }]);
        }])->findOrFail($id);

        return Inertia::render('Quiz/Show', ['quiz' => $quiz]);
    }

    public function saveScore(Request $request)
    {
        $request->validate([
            'answers' => 'required|array',
            'quiz_id' => 'required|exists:quizzes,id',
            'user_id' => 'required|exists:users,id',
        ]);

        $quiz = Quiz::with('questions.answers')->findOrFail($request->quiz_id);
        $score = 0;

        foreach ($quiz->questions as $question) {
            foreach ($question->answers as $answer) {
                if ($answer->is_correct && in_array(['question_id' => $question->id, 'answer_id' => $answer->id], $request->answers)) {
                    $score++;
                }
            }
        }

        Score::create([
            'score' => $score,
            'quiz_id' => $request->quiz_id,
            'user_id' => $request->user_id,
        ]);

        return Inertia::render('Quiz/Show', [
            'quiz' => $quiz,
            'score' => $score,
            'total' => $quiz->questions->count()
        ]);
    }

}
