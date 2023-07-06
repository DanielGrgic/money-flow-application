<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Country;

class CountryController extends Controller
{
    //
    public function create(Request $request)
    {
        try {
            $country = new Country();
            $country->name = $request->name;
            $country->save();
            return response()->json(['country'=>$country], 201);
        } catch (\Throwable $e) {
            Log::error('Creating country : ' . $e->getMessage());
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function get()
	{
		try {
			
			return Country::all();

		} catch (\Throwable $e) {
			Log::error('Country:' . $e->getMessage());
			return 'Country not found';
		}
	}

}
