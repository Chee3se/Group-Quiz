<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class QuizController extends Controller
{
    public function index(): Response
    {
        $quizzes = Quiz::with('questions')->get(); // Assuming there's a questions relationship
        return Inertia::render('Quiz/Index', ['quizzes' => $quizzes]);
    }

    public function show($id): Response
    {
        // Retrieve the specific quiz with its questions
        $quiz = Quiz::with('questions')->findOrFail($id); // Throws a 404 if the quiz is not found
        return Inertia::render('Quiz/Show', ['quiz' => $quiz]);
    }

}
