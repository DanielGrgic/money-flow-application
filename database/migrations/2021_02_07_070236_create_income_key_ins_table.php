<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIncomeKeyInsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('income_key_ins', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constraind('users')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('brand_id')->constraind('brands')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('agent_id')->constraind('brands')->nullable()->onUpdate('cascade')->onDelete('cascade');
            $table->timestamp('date');
            $table->float('sum');
            $table->string('received');
            $table->string('comments');
            $table->string('currency');
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
        Schema::dropIfExists('income_key_ins');
    }
}
