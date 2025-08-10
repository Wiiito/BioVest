<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('question_category', function (Blueprint $table) {
            $table->id('id');
            $table->string('name');
            $table->string('icon_path');
            $table->timestamps();
        });

        Schema::create('question', function (Blueprint $table) {
            $table->id('id');
            $table->text('statement');
            $table->text('image_path')->nullable();
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('question_category')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('answer', function (Blueprint $table) {
            $table->id('id');
            $table->unsignedBigInteger('question_id');
            $table->foreign('question_id')->references('id')->on('question')->onDelete('cascade');
            $table->boolean('is_correct');
            $table->timestamps();
        });

        Schema::create('answered_question', function (Blueprint $table) {
            $table->id('id');
            $table->boolean('is_game');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('question_id');
            $table->foreign('question_id')->references('id')->on('question')->onDelete('cascade');
            $table->unsignedBigInteger('answer_id');
            $table->foreign('answer_id')->references('id')->on('answer')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('question_category');
        Schema::dropIfExists('question');
        Schema::dropIfExists('answer');
        Schema::dropIfExists('answered_question');
    }
};
