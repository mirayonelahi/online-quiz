<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
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
}
