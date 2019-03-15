<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResultsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('results', function (Blueprint $table) {
            $table->increments('id');
            $table->string('givenAnswer');
            $table->string('correctAnswer');
            $table->string('marks');
            $table->integer('examId')->unsigned()->nullable();
            $table->foreign('examId')
            ->references('id')->on('exams')
            ->onDelete('cascade');
            $table->integer('questionId')->unsigned()->nullable();
            $table->foreign('questionId')
            ->references('id')->on('questions')
            ->onDelete('cascade');
            // $table->foreign('examId')
            // ->references('id')->on('exams')
            // ->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('results');
    }
}
