<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Result extends Model
{
    protected $guarded = [];

    public function questionExam()
    {
        return $this->belongsTo('App\QuestionExam','questionExamId');
    }
    public function exam()
    {
        return $this->belongsTo('App\Exam','examId');
    }
}