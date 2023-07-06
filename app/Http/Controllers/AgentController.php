<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Models\Brand;

class AgentController extends Controller
{
    

    public function get($id)
	{
		try {
			if ($id == 'all')
				return Brand::with('category')->where('user_id', Auth::user()->id)->get();
			else return Brand::with('category')->where('user_id', Auth::user()->id)->where('id', $id)->first();
		} catch (\Throwable $e) {
			Log::error('Get Brand (' . $id . ') : ' . $e->getMessage());
			return 'Brand not found';
		}
	}


}
