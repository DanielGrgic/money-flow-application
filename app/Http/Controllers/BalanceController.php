<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Models\Balance;
use DB;
class BalanceController extends Controller
{
    public function getInc(Request $request)
    {
        try {
            

            $balanceinc = DB::table('payment_methods')
                    ->join('income_key_in_payment_method', 'income_key_in_payment_method.payment_method_id', '=', 'payment_methods.id')
                    ->join('income_key_ins', 'income_key_ins.id', '=', 'income_key_in_payment_method.income_key_in_id')
                    // ->select('payment_methods.name', 'income_key_ins.sum', 'income_key_ins.date', 'income_key_ins.currency')
                    // ->where('brands.id', '=', 'income_key_ins.brand_id')
                    ->get();  


            return $balanceinc;
        } catch(\Throwable $e) {
            Log::error('Get balance income : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }
    }

    public function getExp(Request $request)
    {
        try {
            

            $balance = DB::table('payment_methods')
                    ->join('expenses_key_in_payment_method', 'expenses_key_in_payment_method.payment_method_id', '=', 'payment_methods.id')
                    ->join('expenses_key_ins', 'expenses_key_ins.id', '=', 'expenses_key_in_payment_method.expenses_key_in_id')
                    // ->select('payment_methods.name', 'expenses_key_ins.sum', 'expenses_key_ins.date', 'expenses_key_ins.currency')
                    
                    ->get();  


            return $balance;
        } catch(\Throwable $e) {
            Log::error('Get balance expenses : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }
    }

   

}