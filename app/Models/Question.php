<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'quiz_id',
    ];

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }

    public function quiz()
    {
        return $this->belongsTo(Quiz::class);
    }

    public function addAnswers(array $answerTitles)
    {
        foreach ($answerTitles as $title => $isCorrect) {
            $this->answers()->create(['title' => $title, 'is_correct' => $isCorrect]);
        }
    }
}

