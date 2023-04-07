<?php

namespace App\Http\Controllers;

use App\Traits\CustomTrait;
use App\Models\loan_type;
use App\Models\accrued_interest;
use App\Models\intrest_type;
use App\Models\intrest_calculation;
use App\Models\intrest_rate_charged;
use App\Models\loan;
use App\Models\loan_intrest_rate;
use App\Models\campaign;
use App\Models\grace_period;
use App\Models\payament_interval_method;
use App\Models\repayment_scheduling;
use Session;
use Illuminate\Http\Request;



class LoanManagementController extends Controller
{





    function GetOpportunityByProduct(Request $req)
    {


        $data = campaign::select("id", "tagline")->where(['product_id' => $req->product_id])->get()->toArray();

        return  CustomTrait::SuccessJson($data);
    }



    function loanTypeList()
    {

        $data = loan_type::get()->toArray();
        return  CustomTrait::SuccessJson($data);
    }


    function accruedInterestList()
    {
        $data = accrued_interest::get()->toArray();
        return  CustomTrait::SuccessJson($data);
    }

    function intrestList()
    {
        $data = intrest_type::get()->toArray();
        return  CustomTrait::SuccessJson($data);
    }

    function intrestCalculationList()
    {
        $data = intrest_calculation::get()->toArray();
        return  CustomTrait::SuccessJson($data);
    }

    function intrestRateChargedList()
    {
        $data = intrest_rate_charged::get()->toArray();
        return  CustomTrait::SuccessJson($data);
    }

    //////////////////loan////////////////////

    function loanList()
    {


        $data = loan::get()->toArray();



        foreach ($data as $key => $val) {

            $loan_type_title = loan_type::select('title')->where(['id' => $val['loan_type_id'], 'status' => 1])->first()->toArray();
            $data[$key]['loan_type_title'] = $loan_type_title['title'];
        }



        return  CustomTrait::SuccessJson($data);
    }







    function GetById($id)
    {


        $loan = loan::select('id', 'product_id', 'opportunity_id', 'loan_type_id', 'title', 'ar_title', 'status')->where(['id' => $id, 'status' => 1])->first()->toArray();

        $loan2 = loan_intrest_rate::select('id as loan_intrest_rate_id', 'organization_intrest', 'fundriser_profit', 'intrest_calc_method_id', 'accrued_interest_id', 'interest_rate_charged_id', 'intrest_rate_constraint_default', 'funder_intrest_comm_percent')->where(['loan_id' => $id])->first()->toArray();

        $loan['loan_intrest_rate_id'] = $loan2['loan_intrest_rate_id'];
        $loan['organization_intrest'] = $loan2['organization_intrest'];
        $loan['fundriser_profit'] = $loan2['fundriser_profit'];
        $loan['intrest_calc_method_id'] = $loan2['intrest_calc_method_id'];
        $loan['accrued_interest_id'] = $loan2['accrued_interest_id'];
        $loan['interest_rate_charged_id'] = $loan2['interest_rate_charged_id'];
        $loan['intrest_rate_constraint_default'] = $loan2['intrest_rate_constraint_default'];
        $loan['funder_intrest_comm_percent'] = $loan2['funder_intrest_comm_percent'];



        $loan3 = repayment_scheduling::select("id as repayment_scheduling_id", "gracetype", "grace_period", "interval_method_id", "payment_every", "internal_type", "collect_priciple_interval", "installments_constraints_default", "first_due_date_default", "grace_period_id", "collect_principle")->where(['loan_id' => $id])->first()->toArray();

        $loan['repayment_scheduling_id'] = $loan3['repayment_scheduling_id'];
        $loan['gracetype'] = $loan3['gracetype'];
        $loan['grace_period'] = $loan3['grace_period'];
        $loan['interval_method_id'] = $loan3['interval_method_id'];
        $loan['payment_every'] = $loan3['payment_every'];
        $loan['internal_type'] = $loan3['internal_type'];
        $loan['collect_priciple_interval'] = $loan3['collect_priciple_interval'];
        $loan['installments_constraints_default'] = $loan3['installments_constraints_default'];

        $loan['first_due_date_default'] = $loan3['first_due_date_default'];
        $loan['grace_period_id'] = $loan3['grace_period_id'];
        $loan['collect_principle'] = $loan3['collect_principle'];


        return  CustomTrait::SuccessJson($loan);
    }





    function loanInsert(Request $req)
    {


        //insert loan
        try {

            $loan = new loan;
            $loan->product_id = $req->product_id;
            $loan->opportunity_id = $req->opportunity_id;
            $loan->loan_type_id = $req->loan_type_id;
            $loan->title = $req->title;
            $loan->ar_title = $req->ar_title;
            $loan->status = $req->status;
            $loan->save();
        } catch (Exception $e) {

            Log::channel('loan')->info($e->getMessage());
            $data = [
                'message' => "something went wronge"
            ];
            return  CustomTrait::ErrorJson($data);
        }




        //insert loan_intrest_rate


        try {

            $loanintrest = new loan_intrest_rate;
            $loanintrest->loan_id = $loan->id;
            $loanintrest->fundriser_profit = $req->fundriser_profit;
            $loanintrest->intrest_calc_method_id = $req->intrest_calc_method_id;
            $loanintrest->accrued_interest_id = $req->accrued_interest_id;
            $loanintrest->interest_rate_charged_id = $req->interest_rate_charged_id;
            $loanintrest->intrest_rate_constraint_default = $req->intrest_rate_constraint_default;
            $loanintrest->save();
        } catch (Exception $e) {

            Log::channel('loan')->info($e->getMessage());
            $data = [
                'message' => "something went wrong"
            ];
            return  CustomTrait::ErrorJson($data);
        }







        try {

            $loanintrest = new repayment_scheduling;
            $loanintrest->loan_id = $loan->id;
            $loanintrest->gracetype = $req->grace_period_type;
            $loanintrest->grace_period = $req->grace_period;
            $loanintrest->interval_method_id = $req->interval_method_id;
            $loanintrest->payment_every = $req->payment_every;
            $loanintrest->internal_type = $req->internal_type;
            $loanintrest->installments_constraints_default = $req->inst_const_default;
            $loanintrest->first_due_date_default = $req->first_due_date_default;
            $loanintrest->grace_period_id = $req->grace_period_id;
            $loanintrest->collect_principle = $req->collect_principle;
            $loanintrest->save();
            
        } catch (Exception $e) {

            Log::channel('loan')->info($e->getMessage());
            $data = [
                'message' => "something went wrong"
            ];
            return  CustomTrait::ErrorJson($data);
        }



        $data = ['loan_id' => $loan->id];
        return  CustomTrait::SuccessJson($data);
    }









    function loanUpdate(Request $req)
    {

        $loan_id = $req->id;
        $loan_intrest_rate_id = $req->loan_intrest_rate_id;
        $repayment_scheduling_id = $req->repayment_scheduling_id;

        //update loan
        try {

            if (!isset($req->id) || $req->id = '') {

                $loan = new loan;
                $loan->product_id = $req->product_id;
                $loan->opportunity_id = $req->opportunity_id;
                $loan->loan_type_id = $req->loan_type_id;
                $loan->title = $req->title;
                $loan->ar_title = $req->ar_title;
                $loan->status = $req->status;
                $loan->save();

            } else {


                $loan = loan::find($loan_id);
                $loan->product_id = $req->product_id;
                $loan->opportunity_id = $req->opportunity_id;
                $loan->loan_type_id = $req->loan_type_id;
                $loan->title = $req->title;
                $loan->ar_title = $req->ar_title;
                $loan->status = $req->status;
                $loan->save();
            }
        } catch (Exception $e) {

            Log::channel('loan')->info($e->getMessage());
            $data = [
                'message' => "something went wronge"
            ];
            return  CustomTrait::ErrorJson($data);
        }




        //insert loan_intrest_rate


        try {

            if (!isset($req->loan_intrest_rate_id) || $req->loan_intrest_rate_id = '') {

                $loanintrest = new loan_intrest_rate;
                $loanintrest->loan_id = $loan->id;
                $loanintrest->fundriser_profit = $req->fundriser_profit;
                $loanintrest->intrest_calc_method_id = $req->intrest_calc_method_id;
                $loanintrest->accrued_interest_id = $req->accrued_interest_id;
                $loanintrest->interest_rate_charged_id = $req->interest_rate_charged_id;
                $loanintrest->intrest_rate_constraint_default = $req->intrest_rate_constraint_default;
                $loanintrest->save();
            } else {

                $loanintrest = loan_intrest_rate::find($loan_intrest_rate_id);
                $loanintrest->loan_id = $loan->id;
                $loanintrest->fundriser_profit = $req->fundriser_profit;
                $loanintrest->intrest_calc_method_id = $req->intrest_calc_method_id;
                $loanintrest->accrued_interest_id = $req->accrued_interest_id;
                $loanintrest->interest_rate_charged_id = $req->interest_rate_charged_id;
                $loanintrest->intrest_rate_constraint_default = $req->intrest_rate_constraint_default;
                $loanintrest->save();
            }
        } catch (Exception $e) {

            Log::channel('loan')->info($e->getMessage());
            $data = [
                'message' => "something went wrong"
            ];
            return  CustomTrait::ErrorJson($data);
        }







        try {

            if (!isset($req->repayment_scheduling_id) || $req->repayment_scheduling_id = '') {


                $loanintrest = new repayment_scheduling;
                $loanintrest->loan_id = $loan->id;
                $loanintrest->gracetype = $req->gracetype;
                $loanintrest->grace_period = $req->grace_period;
                $loanintrest->interval_method_id = $req->interval_method_id;
                $loanintrest->payment_every = $req->payment_every;
                $loanintrest->internal_type = $req->internal_type;
                $loanintrest->installments_constraints_default = $req->inst_const_default;
                $loanintrest->first_due_date_default = $req->first_due_date_default;
                $loanintrest->grace_period_id = $req->grace_period_id;
                $loanintrest->collect_principle = $req->collect_principle;
                $loanintrest->save();
            } else {

                $loanintrest = repayment_scheduling::find($repayment_scheduling_id);
                $loanintrest->loan_id = $loan->id;
                $loanintrest->gracetype = $req->gracetype;
                $loanintrest->grace_period = $req->grace_period;
                $loanintrest->interval_method_id = $req->interval_method_id;
                $loanintrest->payment_every = $req->payment_every;
                $loanintrest->internal_type = $req->internal_type;
                $loanintrest->installments_constraints_default = $req->inst_const_default;
                $loanintrest->installments_constraints_min = $req->inst_const_min;
                $loanintrest->installments_constraints_max = $req->inst_const_max;
                $loanintrest->first_due_date_default = $req->first_due_date_default;
                $loanintrest->first_due_date_min = $req->first_due_date_min;
                $loanintrest->first_due_date_max = $req->first_due_date_max;
                $loanintrest->grace_period_id = $req->grace_period_id;
                $loanintrest->collect_principle = $req->collect_principle;
                $loanintrest->save();
            }
        } catch (Exception $e) {

            Log::channel('loan')->info($e->getMessage());
            $data = [
                'message' => "something went wrong"
            ];
            return  CustomTrait::ErrorJson($data);
        }




        $data = [
            'message' => "Updated successfuly"
        ];

        return  CustomTrait::SuccessJson($data);
    }



    //////////////////loans_intrest_rate////////////////////



    function loanIntrestRateList()
    {
        $data = loan_intrest_rate::get()->toArray();
        return  CustomTrait::SuccessJson($data);
    }



    //repayment

    function gracePeriodList()
    {

        $data = grace_period::get()->toArray();
        return  CustomTrait::SuccessJson($data);
    }


    function payamentIntervalMethodList()
    {

        $data = payament_interval_method::get()->toArray();
        return  CustomTrait::SuccessJson($data);
    }




    function repaymentSchedulingInsert(Request $req)
    {


        try {

            $loanintrest = new repayment_scheduling;

            $loanintrest->gracetype = $req->grace_period_type;
            $loanintrest->grace_period = $req->grace_period;
            $loanintrest->interval_method_id = $req->interval_method_id;
            $loanintrest->payment_every = $req->payment_every;
            $loanintrest->internal_type = $req->internal_type;
            $loanintrest->installments_constraints_default = $req->inst_const_default;
            $loanintrest->installments_constraints_min = $req->inst_const_min;
            $loanintrest->installments_constraints_max = $req->inst_const_max;
            $loanintrest->first_due_date_default = $req->first_due_date_default;
            $loanintrest->first_due_date_min = $req->first_due_date_min;
            $loanintrest->first_due_date_max = $req->first_due_date_max;
            $loanintrest->grace_period_id = $req->grace_period_id;
            $loanintrest->collect_principle = $req->collect_principle;
            $loanintrest->save();
        } catch (Exception $e) {

            Log::channel('loan')->info($e->getMessage());
            $data = [
                'message' => "something went wrong"
            ];
            return  CustomTrait::ErrorJson($data);
        }





        $data = [
            'message' => "Added successfuly"
        ];
        return  CustomTrait::SuccessJson($data);
    }
}
