<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\Score;
use Illuminate\Http\RedirectResponse;
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
                $query->inRandomOrder()->select('id', 'title', 'question_id'); // Exclude 'is_correct'
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

    public function create(): Response
    {
        return Inertia::render('Quiz/Create');
    }

    public function store(Request $request): RedirectResponse
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
            foreach ($question['answers'] as $answer) {
                $newQuestion->answers()->create([
                    'title' => $answer['title'],
                    'is_correct' => (bool) $answer['is_correct'], // Ensure is_correct is a boolean
                ]);
            }
        }

        return redirect()->route('quizzes.index');
    }

    public function edit($id)
    {
        $quiz = Quiz::with(['questions.answers' => function($query) {
            $query->select('id', 'title', 'question_id', 'is_correct');
        }])->findOrFail($id);
        return Inertia::render('Quiz/Edit', ['quiz' => $quiz]);
    }

    public function update(Request $request, $id): RedirectResponse
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

        // Get the IDs of the questions in the request
        $requestQuestionIds = collect($request->questions)->pluck('id')->filter()->toArray();

        // Delete questions that are not in the request
        $quiz->questions()->whereNotIn('id', $requestQuestionIds)->delete();

        foreach ($request->questions as $questionData) {
            $question = $quiz->questions()->updateOrCreate(
                ['id' => $questionData['id'] ?? null],
                ['title' => $questionData['title']]
            );

            $question->answers()->delete();

            foreach ($questionData['answers'] as $answerData) {
                $question->answers()->create([
                    'title' => $answerData['title'],
                    'is_correct' => (bool) $answerData['is_correct'],
                ]);
            }
        }

        return redirect()->route('quizzes.index');
    }

    public function destroy($id)
    {
        Quiz::destroy($id);
        return redirect()->route('quizzes.index');
    }
}
