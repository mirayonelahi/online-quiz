<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Result;

class ResultController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
           return Result::with(['questionExam','questionExam.exam','questionExam.question','questionExam.exam.subject:id,title','exam'])->get();
    }
   
    public function store(Request $request)
    {   
        return Result::create([
        'givenAnswer'=>$request['givenAnswer'],
        'marks'=>$request['marks'],
        'questionExamId'=>$request['questionExamId'],
        'examId'=>$request['examId'],
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
        return Result::find($id);
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
        // dd($id);
        $result=Result::findOrfail($id);
        $result->update($request->all());
        return $result;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $result=Result::findOrfail($id);
        $result->delete();
        return 204;
    }
}
