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
        Schema::create('question_categories', function (Blueprint $table) {
            $table->id('id');
            $table->string('name');
            $table->string('icon_path');
            $table->timestamps();
        });

        Schema::create('questions', function (Blueprint $table) {
            $table->id('id');
            $table->text('statement');
            $table->text('image_path')->nullable();
            $table->string('year', 4);
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('question_categories')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('answers', function (Blueprint $table) {
            $table->id('id');
            $table->string('text');
            $table->unsignedBigInteger('question_id');
            $table->foreign('question_id')->references('id')->on('questions')->onDelete('cascade');
            $table->boolean('is_correct');
            $table->timestamps();
        });

        Schema::create('answered_questions', function (Blueprint $table) {
            $table->id('id');
            $table->boolean('is_game');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('question_id');
            $table->foreign('question_id')->references('id')->on('questions')->onDelete('cascade');
            $table->unsignedBigInteger('answer_id');
            $table->foreign('answer_id')->references('id')->on('answers')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('question_categories');
        Schema::dropIfExists('questions');
        Schema::dropIfExists('answers');
        Schema::dropIfExists('answered_questions');
    }
};
