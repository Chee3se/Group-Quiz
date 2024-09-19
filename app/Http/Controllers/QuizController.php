<?php

namespace App\Http\Controllers;

use App\Models\Quiz;
use Illuminate\Http\Request;

class QuizController extends Controller
{
    public function index()
    {
        $quizzes = Quiz::all();
        return view('quizzes.index', compact('quizzes'));
    }

    public function create()
    {
        return view('quizzes.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        Quiz::create($request->all());

        return redirect()->route('quizzes.index')
                         ->with('success', 'Quiz created successfully.');
    }

    public function show($id)
    {
        $quiz = Quiz::find($id);
        return view('quizzes.show', compact('quiz'));
    }

    public function edit($id)
    {
        $quiz = Quiz::find($id);
        return view('quizzes.edit', compact('quiz'));
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
        ]);

        $quiz = Quiz::find($id);
        $quiz->update($request->all());

        return redirect()->route('quizzes.index')
                         ->with('success', 'Quiz updated successfully.');
    }

    public function destroy($id)
    {
        $quiz = Quiz::find($id);
        $quiz->delete();

        return redirect()->route('quizzes.index')
                         ->with('success', 'Quiz deleted successfully.');
    }
}
