<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class QuestionExam extends Model
{
    protected $guarded = [];

    public function question()
    {
        return $this->belongsTo('App\Question','questionId');
    }
    public function exam()
    {
        return $this->belongsTo('App\Exam','examId');
    }
}
