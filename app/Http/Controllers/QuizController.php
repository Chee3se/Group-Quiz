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
    // Display a list of quizzes with the count of questions for each
    public function index(): Response
    {
        $quizzes = Quiz::withCount('questions')->with('scores.user')->get(); // Include scores and users
        return Inertia::render('Quiz/Index', ['quizzes' => $quizzes]);
    }

    // Show details of a specific quiz including questions and answers
    public function show($id): Response
    {
        $quiz = Quiz::with(['questions' => function($query) {
            $query->inRandomOrder()->with(['answers' => function($query) {
                $query->inRandomOrder()->select('id', 'title', 'question_id'); // Exclude 'is_correct'
            }]);
        }, 'scores.user'])->findOrFail($id); // Load scores with users

        return Inertia::render('Quiz/Show', ['quiz' => $quiz]);
    }

    // Save the score of a user for a quiz
    public function saveScore(Request $request)
    {
        $request->validate([
            'answers' => 'required|array',
            'quiz_id' => 'required|exists:quizzes,id',
            'user_id' => 'required|exists:users,id',
        ]);

        $quiz = Quiz::with('questions.answers')->findOrFail($request->quiz_id);
        $score = 0;
        $userAnswers = $request->answers;
        $incorrectAnswers = [];

        foreach ($quiz->questions as $question) {
            foreach ($question->answers as $answer) {
                if ($answer->is_correct) {
                    $correctAnswers[$question->id] = $answer->id;
                }
                if ($answer->is_correct && in_array(['question_id' => $question->id, 'answer_id' => $answer->id], $userAnswers)) {
                    $score++;
                }
            }
            if (!in_array(['question_id' => $question->id, 'answer_id' => $correctAnswers[$question->id]], $userAnswers)) {
                $incorrectAnswers[$question->id] = [
                    'question' => $question->title,
                    'correct_answer' => $correctAnswers[$question->id],
                    'user_answer' => collect($userAnswers)->firstWhere('question_id', $question->id)['answer_id'] ?? null,
                ];
            }
        }

        $existingScore = Score::where('quiz_id', $request->quiz_id)
            ->where('user_id', $request->user_id)
            ->first();

        if ($existingScore) {
            if ($score > $existingScore->score) {
                $existingScore->update(['score' => $score]);
            }
        } else {
            Score::create([
                'score' => $score,
                'quiz_id' => $request->quiz_id,
                'user_id' => $request->user_id,
            ]);
        }

        return Inertia::render('Quiz/Show', [
            'quiz' => $quiz,
            'score' => $score,
            'total' => $quiz->questions->count(),
            'incorrectAnswers' => $incorrectAnswers,
        ]);
    }

    // Render the form to create a new quiz
    public function create(): Response | RedirectResponse
    {
        if (auth()->user()?->getRoleNames()?->first() !== 'admin') {
            return redirect()->route('quizzes.index');
        }
        return Inertia::render('Quiz/Create');
    }

    public function store(Request $request): RedirectResponse
    {
        if (auth()->user()?->getRoleNames()?->first() !== 'admin') {
            return redirect()->route('quizzes.index');
        }
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

        return redirect()->route('quizzes.index')->with('success', 'Quiz created successfully!');
    }

    public function getHighScores($id)
{
    // Fetch the high scores for a specific quiz, ordered by score descending
    $scores = Score::with('user')->where('quiz_id', $id)->orderBy('score', 'desc')->take(10)->get(); // Fetch top 10 scores

    return response()->json(['scores' => $scores]);
}

    // Render the form to edit an existing quiz
    public function edit($id): Response | RedirectResponse
    {
        if (auth()->user()?->getRoleNames()?->first() !== 'admin') {
            return redirect()->route('quizzes.index');
        }

        $quiz = Quiz::with(['questions.answers' => function($query) {
            $query->select('id', 'title', 'question_id', 'is_correct');
        }])->findOrFail($id);
        return Inertia::render('Quiz/Edit', ['quiz' => $quiz]);
    }

    public function update(Request $request, $id): RedirectResponse
    {
        if (auth()->user()?->getRoleNames()?->first() !== 'admin') {
            return redirect()->route('quizzes.index');
        }

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

        return redirect()->route('quizzes.index')->with('success', 'Quiz updated successfully!');
    }

    // Delete a quiz from the database
    public function destroy($id) : RedirectResponse
    {
        if (auth()->user()?->getRoleNames()?->first() !== 'admin') {
            return redirect()->route('quizzes.index');
        }

        Quiz::destroy($id);
        return redirect()->route('quizzes.index')->with('success', 'Quiz deleted successfully!');
    }
}
