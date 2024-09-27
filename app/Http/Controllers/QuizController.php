<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use App\Models\Score;
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
                $query->inRandomOrder();
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

        // Calculate score based on correct answers
        foreach ($quiz->questions as $question) {
            foreach ($question->answers as $answer) {
                if ($answer->is_correct && in_array(['question_id' => $question->id, 'answer_id' => $answer->id], $request->answers)) {
                    $score++;
                }
            }
        }

        // Create a score record in the database
        Score::create([
            'score' => $score,
            'quiz_id' => $request->quiz_id,
            'user_id' => $request->user_id,
        ]);

        return Inertia::render('Quiz/Show', [
            'quiz' => $quiz,
            'score' => $score,
            'total' => $quiz->questions->count(),
        ]);
    }

    // Render the form to create a new quiz
    public function create(): Response
    {
        return Inertia::render('Quiz/Create');
    }

    // Store a new quiz and its questions in the database
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

        return redirect()->route('quizzes.index')->with('success', 'Quiz created successfully!');
    }

    public function getHighScores($id)
{
    // Fetch the high scores for a specific quiz, ordered by score descending
    $scores = Score::with('user')->where('quiz_id', $id)->orderBy('score', 'desc')->take(10)->get(); // Fetch top 10 scores

    return response()->json(['scores' => $scores]);
}

    // Render the form to edit an existing quiz
    public function edit($id): Response
    {
        $quiz = Quiz::with('questions.answers')->findOrFail($id);
        return Inertia::render('Quiz/Edit', ['quiz' => $quiz]);
    }

    // Update an existing quiz and its questions
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
            $newQuestion = $quiz->questions()->updateOrCreate(['title' => $question['title']], ['quiz_id' => $quiz->id]);
            $newQuestion->answers()->delete();
            $newQuestion->addAnswers($question['answers']);
        }

        return redirect()->route('quizzes.index')->with('success', 'Quiz updated successfully!');
    }

    // Delete a quiz from the database
    public function destroy($id)
    {
        Quiz::destroy($id);
        return redirect()->route('quizzes.index')->with('success', 'Quiz deleted successfully!');
    }
}
