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
}