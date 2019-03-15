<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use Carbon\Carbon;
// use DateTime;
class TaskCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    { 
        //  dd($request);
        return [
          
            'data' => $this->collection->transform(function ($data){
                // $gg=$data->created_at;
                // $dt = Carbon::parse($gg);
                // print_r($gg);
                return [
                    // print_r($data->created_at);
                    'id' => $data->id,
                    'title' => $data->title,
                    'priority' => $data->priority,
                    'noteId' => $data->noteId,
                    'done' => $data->done,
                    'created_at' => $data->created_at->toDateTimeString(),
                    'editedAt' => $data->editedAt,
                    'updated_at' => $data->updated_at->toDateTimeString(),
                ];
            })
        ];
    }
}
