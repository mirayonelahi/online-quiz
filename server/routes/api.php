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
Route::post('register', 'UserController@register');
Route::post('login', 'UserController@login');
Route::get('profile', 'UserController@getAuthenticatedUser');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResources(
    ['exams'=>'API\ExamController', 
     'questions'=>'API\QuestionController',
     'results'=> 'API\ResultController',
     'subjects'=> 'API\SubjectController',
     'questionExams'=> 'API\QuestionExamController'  ]
);
Route::get('search/subjects/{field}/{query}','API\SubjectController@search');
Route::get('search/questions/{field}/{query}','API\QuestionController@search');

