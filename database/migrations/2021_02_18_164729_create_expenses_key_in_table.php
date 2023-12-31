<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpensesKeyInTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expenses_key_ins', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constraind('users')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('supplier_id')->constraind('suppliers')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamp('date');
            $table->string('currency');
            $table->string('country');
            $table->foreignId('expenses_type_id')->constraind('expenses_types')->onUpdate('cascade')->onDelete('cascade');
            $table->float('sum');
            $table->string('comments');
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
        Schema::dropIfExists('expenses_key_ins');
    }
}
