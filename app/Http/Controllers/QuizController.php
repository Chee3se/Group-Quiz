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

    public function create()
    {
        return Inertia::render('Quiz/Create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string',
            'questions' => 'required|array',
            'questions.*.title' => 'required|string',
            'questions.*.answers' => 'required|array',
            'questions.*.answers.*.title' => 'required|string',
            'questions.*.answers.*.is_correct' => 'required|boolean',
        ]);

        $quiz = Quiz::create(['title' => $request->title]);

        foreach ($request->questions as $question) {
            $newQuestion = $quiz->questions()->create(['title' => $question['title']]);
            $newQuestion->addAnswers($question['answers']);
        }

        return redirect()->route('quizzes.index');
    }

    public function edit($id)
    {
        $quiz = Quiz::with('questions.answers')->findOrFail($id);
        return Inertia::render('Quiz/Edit', ['quiz' => $quiz]);
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string',
            'questions' => 'required|array',
            'questions.*.title' => 'required|string',
            'questions.*.answers' => 'required|array',
            'questions.*.answers.*.title' => 'required|string',
            'questions.*.answers.*.is_correct' => 'required|boolean',
        ]);

        $quiz = Quiz::findOrFail($id);
        $quiz->update(['title' => $request->title]);

        foreach ($request->questions as $question) {
            $newQuestion = $quiz->questions()->updateOrCreate(['title' => $question['title']]);
            $newQuestion->answers()->delete();
            $newQuestion->addAnswers($question['answers']);
        }

        return redirect()->route('quizzes.index');
    }

    public function destroy($id)
    {
        Quiz::destroy($id);
        return redirect()->route('quizzes.index');
    }
}
