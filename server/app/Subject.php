<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $guarded = [];

    public function questions()
    {
        return $this->hasMany('App\Question');
    }
}
