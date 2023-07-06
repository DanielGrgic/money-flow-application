<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateExpensesPaymentPivotTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('expenses_key_in_payment_method', function (Blueprint $table) {
            $table->id();
            $table->foreignId('expenses_key_in_id')->constrained('expenses_key_ins')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('payment_method_id')->constrained('payment_methods')->onUpdate('cascade')->onDelete('cascade');
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
        Schema::dropIfExists('expenses_key_ins_payment_methods');
    }
}
