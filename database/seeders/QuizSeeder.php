<?php

namespace Database\Seeders;

use App\Models\Quiz;
use Illuminate\Database\Seeder;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $quiz = Quiz::create(['title' => 'Movies']);

        $quiz->addQuestion('What is the highest-grossing movie of all time?', [
            'Avatar' => true,
            'Titanic' => false,
            'Star Wars: The Force Awakens' => false,
            'Avengers: Endgame' => false,
        ]);
    }
}
