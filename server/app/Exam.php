<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    protected $guarded = [];

    public function subject()
    {
        return $this->belongsTo('App\Subject','subjectId');
    }
    public function questionExams()
    {
        return $this->hasMany('App\QuestionExam');
    }
    public function results()
    {
        return $this->hasMany('App\Result');
    }
}
