<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Question;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Question::with('subject')->get();
        // $books = Question::with('subject')->get();
        // dd($books->find(1)->subject->title);
    }
    public function search($field, $query)
    {
        if ($field == 'subject') {
            $dept = Question::with('subject')->whereHas('subject', function ($q) use ($query) {
                $q->where('title', 'LIKE', "%$query%");
            })->get();
            return $dept;
        } else {
            return  Question::with('subject')->where($field, 'LIKE', "%$query%")->get();
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Question::create([
            'title' => $request['title'],
            'answer' => $request['answer'],
            'explanation' => $request['explanation'],
            'subjectId' => $request['subjectId']
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Question::find($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $question = Question::findOrfail($id);
        $question->update($request->all());
        return $question;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $question = Question::findOrfail($id);
        $question->delete();
        return 204;
    }
}
