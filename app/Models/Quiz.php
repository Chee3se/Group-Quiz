<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'user_id',
    ];

    public function questions()
    {
        return $this->hasMany(Question::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function addQuestion(string $questionTitle, array $answerTitles = [])
    {
        $question = $this->questions()->create(['title' => $questionTitle]);

        foreach ($answerTitles as $title => $isCorrect) {
            $question->answers()->create(['title' => $title, 'is_correct' => $isCorrect]);
        }

        return $question;
    }
}
