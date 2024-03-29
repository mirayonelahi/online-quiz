<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Exam;
use DB;

class ExamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $exam = Exam::all();
        // $exam ->load('subject');
        // return $exam;
        DB::update("ALTER TABLE exams AUTO_INCREMENT = 1;");
        return Exam::with('subject')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return Exam::create([
            'title'=>$request['title'],
            'subjectId'=>$request['subjectId'],
            'negativeMark'=>$request['negativeMark'],
            'duration'=>$request['duration'],
            'date'=>$request['date']
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
        return Exam::find($id);
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
        $exam=Exam::findOrfail($id);
        $exam->update($request->all());
        return $exam;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $exam=Exam::findOrfail($id);
        $exam->delete();
        return 204;
    }
}
