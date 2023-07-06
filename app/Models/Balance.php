<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Balance extends Model
{
    public function brand()
	{
		return $this->belongsTo('App\Models\Brand');
	}

    public function agent()
    {
        return $this->belongsTo('App\Models\Brand');
    }

    public function supplier()
	{
		return $this->belongsTo('App\Models\Supplier');
	}

    public function user()
	{
		return $this->belongsTo('App\User');
	}

    public function expensesType()
    {
        return $this->belongsTo('App\Models\ExpensesType');
    }

    public function paymentMethods() {
        return $this->belongsToMany(PaymentMethod::class)->withPivot(['id'])->orderBy('pivot_id');
    }
}
