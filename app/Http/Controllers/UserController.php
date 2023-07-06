<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\User;

class UserController extends Controller
{
    public function createUser(Request $request)
    {
        try {
            // check duplicate  username
			$usernameDuplicate = User::where('username', $request->username)->first();
			if ($usernameDuplicate) {
				return response()->json(['error' => ['field' => 'username', 'msg' => 'Username already exist.']], 409);
            }

			$user = new User();
			$user->username = $request->username;
			$user->password = bcrypt($request->password);
            $user->user_type = $request->user_type;
			$user->save();

            $credentials = request(['username', 'password']);
            return response()->json(['user' => $credentials], 201);

		} catch (\Throwable $e) {
			//
			Log::error('Register error : ' . $e->getMessage());
			return response()->json(['error' => 'Internal server error'], 500);
		}

  }

	public function changePassword(Request $request)
    {
			try {
				$request->validate([
					'old_password' => ['required'],
					'new_password' => ['required'],
				]);
			
				User::find(auth()->user()->id)->update(['password'=> bcrypt($request->new_password)]);

				return redirect('/change-password');

			} catch (\Throwable $th) {
				//
				Log::error('Register error : ' . $e->getMessage());
				return response()->json(['error' => 'Internal server error'], 500);
			}
    }

		public function get()
		{
			try {
				
				return User::all();
	
			} catch (\Throwable $e) {
				Log::error('User:' . $e->getMessage());
				return 'User not found';
			}
		}

}
