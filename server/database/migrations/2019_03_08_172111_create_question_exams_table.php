<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuestionExamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('question_exams', function (Blueprint $table) {
            $table->increments('id');
            $table->string('option1');
            $table->string('option2');
            $table->string('option3');
            $table->string('option4');
            $table->integer('questionId')->unsigned();
            $table->foreign('questionId')
            ->references('id')->on('questions')
            ->onDelete('cascade');
            $table->integer('examId')->unsigned();
            $table->foreign('examId')
            ->references('id')->on('exams')
            ->onDelete('cascade');
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
        Schema::dropIfExists('question_exams');
    }
}
