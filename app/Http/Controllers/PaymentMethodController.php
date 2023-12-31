<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\PaymentMethod;

class PaymentMethodController extends Controller
{
    //
    public function create(Request $request)
    {
        try {
            $paymentMethod = new PaymentMethod();
            $paymentMethod->name = $request->name;
            $paymentMethod->currency = $request->currency;
            $paymentMethod->save();
            return $paymentMethod;
        } catch (\Throwable $e) {
            Log::error('Creating Payment Method : ' . $e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function get($id)
	{
		try {
			if ($id == 'all')
				return PaymentMethod::all();
			else return PaymentMethod::find($id);
		} catch (\Throwable $e) {
			Log::error('Payment method (' . $id . ') : ' . $e->getMessage());
			return 'Payment method not found';
		}
	}

    public function delete($id) {
        try{
            $paymentMethod = PaymentMethod::where('id', $id);
            $paymentMethod ->delete();
            return response()->json($paymentMethod);
        }catch(\Throwable $e){
            Log::error('Delete : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }
        try{
            $paymentMethod = PaymentMethod::where('id', $id);
            $paymentMethod ->delete();
            return response()->json($paymentMethod);
        }catch(\Throwable $e){
            Log::error('Delete : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }


    }

}
