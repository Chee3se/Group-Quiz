<?php

namespace Database\Seeders;

use App\Models\Answer;
use App\Models\Question;
use App\Models\Quiz;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class QuizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Quiz::create([
            'title'=>'Movies'
        ]);
        Question::create([
            'title'=>'What is the highest-grossing movie of all time?',
            'quiz_id'=>1

        ]);

        Answer::create([
            'content'=>'Avatar',
            'question_id'=>1,
            'is_correct'=>true,
        ]);


    
}

}