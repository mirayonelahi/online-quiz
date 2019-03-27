<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::apiResources(
    ['exams'=>'API\ExamController', 
     'questions'=>'API\QuestionController',
     'results'=> 'API\ResultController',
     'subjects'=> 'API\SubjectController',
     'questionExams'=> 'API\QuestionExamController'  ]
);
Route::get('search/subjects/{field}/{query}','API\SubjectController@search');
Route::get('search/questions/{field}/{query}','API\QuestionController@search');