<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\QuestionExam;

class QuestionExamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // dd(QuestionExam::with(['question','exam'])->get()) ;
        return QuestionExam::with(['question','exam'])->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return QuestionExam::create([
            'questionId'=>$request['questionId'],
            'option1'=>$request['option1'],
            'option2'=>$request['option2'],
            'option3'=>$request['option3'],
            'option4'=>$request['option4'],
            'examId'=>$request['examId']
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
        return QuestionExam::find($id);
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
        $questionExam=QuestionExam::findOrfail($id);
        $questionExam->update($request->all());
        return $questionExam;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $questionExam=QuestionExam::findOrfail($id);
        $questionExam->delete();
        return 204;
    }
}
