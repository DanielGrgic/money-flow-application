<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\CurrencyNew;

class NewCurrencyController extends Controller
{
    //
    public function create(Request $request)
    {
        try {
            $currency = new CurrencyNew();
            $currency->name = $request->name;
            $currency->save();
            return response()->json(['currency'=>$currency], 201);
        } catch (\Throwable $e) {
            Log::error('Creating Currency : ' . $e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function get()
	{
		try {
			
			return CurrencyNew::all();

		} catch (\Throwable $e) {
			Log::error('Currency:' . $e->getMessage());
			return 'Currency not found';
		}
	}

}
