<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use App\Models\IncomeKeyIn;
use DB;
class IncomeKeyInController extends Controller
{

    public function create(Request $request)
    {
        //
        try {
            Log::info($request->payment_method);
            $incomeKeyIn = new IncomeKeyIn();
            $incomeKeyIn->user_id = Auth::user()->id;
            $incomeKeyIn->brand_id = $request->brand_id;
            $incomeKeyIn->agent_id = $request->agent_id;
            $incomeKeyIn->date = $request->date;
            $incomeKeyIn->sum = $request->sum;
            $incomeKeyIn->received = $request->received;
            $incomeKeyIn->comments = $request->comments;
            $incomeKeyIn->currency = $request->currency;
            $incomeKeyIn->save();

            $incomeKeyIn->paymentMethods()->sync($request->payment_method);
            return $incomeKeyIn;
        } catch (\Throwable $e) {
            Log::error('Creating IncomeKeyIn : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }
    }

    public function filter(Request $request)
    {
        $brand_id = isset($request->filter['brand_id']) ? $request->filter['brand_id'] : null;
        $agent_id = isset($request->filter['agent_id']) ? $request->filter['agent_id'] : null;
        $payment_method = isset($request->filter['payment_method']) ?  $request->filter['payment_method'] : null;
        $status = isset($request->filter['status']) ? $request->filter['status'] : null;
        $currency = isset($request->filter['currency']) ? $request->filter['currency'] : null; 
        $user_id = isset($request->filter['user_id']) ? $request->filter['user_id'] : null;

        $date_range = $request->date_range;
        $startDate = $date_range['startDate'];
        $endDate = $date_range['endDate'];

        try {
            $incomeKeyIn = IncomeKeyIn::with(['brand', 'agent', 'user', 'paymentMethods', 'brand.category'])
            ->when($brand_id && $brand_id != 'all', function ($query) use ($brand_id) {
                $query->whereHas('brand', function($query) use ($brand_id) {
                    $query->where('id', $brand_id);
                });
            })
            ->when($agent_id && $agent_id != 'all', function ($query) use ($agent_id) {
                $query->whereHas('agent', function($query) use ($agent_id) {
                    $query->where('id', $agent_id);
                });
            })
            ->when($status && $status !='all', function ($query) use ($status) {
                $query->where('received', $status);
            }) 
            ->when($currency && $currency !='all', function ($query) use ($currency) {
                $query->where('currency', $currency);
            })
            ->when($user_id && $user_id !='all', function ($query) use ($user_id) {
                $query->where('user_id', $user_id);
            })
            // ->when($user_id && $user_id != 'all', function ($query) use ($user_id) {
            //     $query->whereHas('user', function($query) use ($user_id) {
            //         $query->where('id', $user_id);
            //     });
            // })
            ->when(($startDate && $endDate), function ($query) use ($startDate, $endDate) {
                $query->where('date', '>=', $startDate)
                ->where('date', '<=', $endDate);
            })->get();
 

            if ($payment_method && $payment_method != 'all') {
                $newIncomeKeyIn = [];
                foreach($incomeKeyIn as $key=>$value) {
                    $paymentIds = array_map(
                        function($o) { return $o->id;},
                        json_decode($value)->payment_methods
                    );
                    if (in_array($payment_method, $paymentIds)) {
                        array_push($newIncomeKeyIn, $value);
                    }
                }
                return $newIncomeKeyIn;
            } else
                return $incomeKeyIn;
        } catch (\Throwable $e) {
            Log::error('Filter IncomeKeyIn : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }
    }

    public function get(Request $request, $id)
    {
        try {
            if ($id ==='all'){
                if (Auth::user()->user_type === 'Admin')
                    $income = IncomeKeyIn::with(['paymentMethods', 'user', 'brand', 'agent','brand.category' ])->get();
                else
                    $income = IncomeKeyIn::where('user_id', Auth::user()->id)->with(['paymentMethods', 'user', 'brand', 'agent', 'brand.category'])->get();
            } else
                $income = IncomeKeyIn::where('id', $id)->with(['paymentMethods', 'user', 'brand', 'brand.category'])->get();
            return $income;
        } catch(\Throwable $e) {
            Log::error('Get Income KeyIn : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }
    }

    // public function delete(Request $request, $id)
    // {
    //     try {
    //         if ($id ==='all'){
    //             if (Auth::user()->user_type === 'Admin')
    //                 $income = IncomeKeyIn::with(['paymentMethods', 'user', 'brand', 'agent','brand.category' ])->get();
    //             else
    //                 $income = IncomeKeyIn::where('user_id', Auth::user()->id)->with(['paymentMethods', 'user', 'brand', 'agent', 'brand.category'])->get();
    //         } else
    //             $income = IncomeKeyIn::where('id', $id)->with(['paymentMethods', 'user', 'brand', 'brand.category'])->get();
    //         return $income;
    //     } catch(\Throwable $e) {
    //         Log::error('Get Income KeyIn : ' . $e->getMessage());
    //         return response()->json(['error' => 'Internal server error'], 500);
    //     }
    // }



    // public function Delete($id){
    //     $incomedelete = IncomeDelete::find($id);

    //     $incomedelete->delete();

    //     return response()->json('successfully deleted');

    // }

    public function delete($id) {
        try{
            $incomeKeyIn = IncomeKeyIn::where('id', $id);
            $incomeKeyIn ->delete();
            return response()->json($incomeKeyIn);
        }catch(\Throwable $e){
            Log::error('Delete : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }
            
         
    }

    public function changeStatus(Request $request) {
        try {
            $income = IncomeKeyIn::find($request->id);
            $income->received = $request->received;
            $income->save();
            return $income;
        } catch(\Throwable $e) {
            Log::error('Change Income Status : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }
    }

    

}
