<?php

namespace App\Http\Controllers;

use App\Models\ExpensesKeyIn;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class ExpensesKeyInController extends Controller
{
    public function create(Request $request)
    {
        //
        try {
            Log::info($request->payment_method);
            $expensesKeyIn = new ExpensesKeyIn();
            $expensesKeyIn->user_id = Auth::user()->id;
            $expensesKeyIn->supplier_id = $request->supplier_id;
            $expensesKeyIn->date = $request->date;
            $expensesKeyIn->sum = $request->sum;
            $expensesKeyIn->comments = $request->comments;
            $expensesKeyIn->currency = $request->currency;
            $expensesKeyIn->country = $request->country;
            $expensesKeyIn->expenses_type_id = $request->expenses_type_id;
            $expensesKeyIn->save();

            $expensesKeyIn->paymentMethods()->sync($request->payment_method);
            return $expensesKeyIn;
        } catch (\Throwable $e) {
            Log::error('Creating ExpensesKeyIn : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }
    }

    public function filter(Request $request)
    {
        $supplier_id = isset($request->filter['supplier_id']) ? $request->filter['supplier_id'] : null;
        $payment_method = isset($request->filter['payment_method']) ?  $request->filter['payment_method'] : null;
        $expenses_type = isset($request->filter['expenses_type']) ?  $request->filter['expenses_type'] : null;
        $country = isset($request->filter['country']) ? $request->filter['country'] : null;
        $currency = isset($request->filter['currency']) ? $request->filter['currency'] : null;
        $user_id = isset($request->filter['user_id']) ? $request->filter['user_id'] : null;

        $date_range = $request->date_range;
        $startDate = $date_range['startDate'];
        $endDate = $date_range['endDate'];

        try {
            $expensesKeyIn = ExpensesKeyIn::with(['supplier', 'user', 'expensesType', 'paymentMethods'])
            ->when($supplier_id && $supplier_id != 'all', function ($query) use ($supplier_id) {
                $query->whereHas('supplier', function($query) use ($supplier_id) {
                    $query->where('id', $supplier_id);
                });
            })
            ->when($country && $country !='all', function ($query) use ($country) {
                $query->where('country', $country);
            })
            ->when($user_id && $user_id !='all', function ($query) use ($user_id) {
                $query->where('user_id', $user_id);
            })
            ->when($currency && $currency !='all', function ($query) use ($currency) {
                $query->where('currency', $currency);
            })
            ->when($expenses_type && $expenses_type != 'all', function ($query) use ($expenses_type) {
                $query->whereHas('expensesType', function($query) use ($expenses_type) {
                    $query->where('id', $expenses_type);
                });
            })
            ->when(($startDate && $endDate), function ($query) use ($startDate, $endDate) {
                $query->where('date', '>=', $startDate)
                ->where('date', '<=', $endDate);
            })
            ->get();

            if ($payment_method && $payment_method != 'all') {
                $newExpensesKeyIn = [];
                foreach($expensesKeyIn as $key=>$value) {
                    $paymentIds = array_map(
                        function($o) { return $o->id;},
                        json_decode($value)->payment_methods
                    );
                    if (in_array($payment_method, $paymentIds)) {
                        array_push($newExpensesKeyIn, $value);
                    }
                }
                return $newExpensesKeyIn;
            } else
                return $expensesKeyIn;

            return $expensesKeyIn;
        } catch (\Throwable $e) {
            Log::error('Filter KeyIn : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }
    }

    public function delete($id) {
        try{
            $expensesKeyIn = ExpensesKeyIn::where('id', $id);
            $expensesKeyIn ->delete();
            return response()->json($expensesKeyIn);
        }catch(\Throwable $e){
            Log::error('Delete : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }
            
         
    }

    public function get(Request $request, $id)
    {
        try {
            if ($id ==='all') {
                if (Auth::user()->user_type === 'Admin')
                    $expenses = ExpensesKeyIn::where('user_id', Auth::user()->id)->with(['paymentMethods', 'user', 'supplier', 'expensesType'])->get();
                else
                    $expenses = ExpensesKeyIn::with(['paymentMethods', 'user', 'supplier', 'expensesType'])->get();
            } else{
                $expenses = ExpensesKeyIn::where('id', $id)->with(['paymentMethods', 'user', 'supplier', 'expensesType'])->get();
            }
            return $expenses;
        } catch(\Throwable $e) {
            Log::error('Get Expenses KeyIn : ' . $e->getMessage());
            return response()->json(['error' => 'Internal server error'], 500);
        }
    }

}
