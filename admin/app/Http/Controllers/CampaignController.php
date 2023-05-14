<?php

namespace App\Http\Controllers;


use App\Traits\CustomTrait;
use Illuminate\Http\Request;
use App\Models\campaign;
use App\Models\campaign_team;
use App\Models\campaign_image;
use App\Models\Kyc;
use App\Models\UserKycRole;
use App\Models\UserKyc;
use App\Models\loan;
use App\Models\loan_intrest_rate;
use App\Models\intrest_calculation;
use App\Models\accrued_interest;
use App\Models\intrest_rate_charged;
use App\Models\loan_type;
use App\Models\repayment_scheduling;
use App\Models\User;
use App\Models\KycDetail;
use Session;
use App\Models\Evaluation_log;
use App\Models\Evaluation;
use App\Models\EvaluationDetail;
use App\Models\Evaluation_category;
use App\Models\Campaign_evaluation;
use App\Models\campaign_inverter;
use App\Models\borrower_statement;
use App\Models\camaign_invester;
use App\Models\investor_statement;
use App\Models\kyc_log;
use App\Models\Campaign_log;
use App\Models\anb_accounts;




use App\Models\OpportunitySetup;
use DateTime;
use Exception;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;

class CampaignController extends Controller
{

    public function updateVersionProgram(Request $req, $id)
    {
        $result = campaign::find($id);
        $program_number = $req->header('program_number');
        $version_number = $req->header('version_number');
        $open_date =$req->header('open_date');
        $net_sales=$req->header('net_sales');
        $net_sales_years =$req->header('net_sales_years');
        $net_profit=$req->header('net_profit');
        $net_profit_years =$req->header('net_profit_years');
        $cash_flow =$req->header('cash_flow');
        $return_on_assets=$req->header('return_on_assets');
        $debt_of_assets=$req->header('debt_of_assets');
        $fin_statement_year=$req->header('fin_statement_year');
        $due_date=$req->header('due_date');
        $APR=$req->header('APR');
        $info_Statement_date_h=$req->header('info_Statement_date_h');
        $info_Statement_date_G=$req->header('info_Statement_date_G');

;        if ($result != "") {

            $result->program_number = $program_number == "" ? $result->program_number : $program_number;

            $result->version_number = $version_number == "" ? $result->version_number : $version_number;

            $result->open_date = $open_date == "2002-05-03" ? $result->open_date : $open_date;

            $result->net_sales = $net_sales == "" ? $result->net_sales : $net_sales;

            $result->net_sales_years = $net_sales_years == "2002-05-03" ? $result->net_sales_years : $net_sales_years;

            $result->net_profit = $net_profit == "" ? $result->net_profit : $net_profit;

            $result->net_profit_years = $net_profit_years == "2002-05-03" ? $result->net_profit_years : $net_profit_years;

            $result->cash_flow = $cash_flow == "" ? $result->cash_flow : $cash_flow;

            $result->return_on_assets = $return_on_assets == "" ? $result->return_on_assets : $return_on_assets;

            $result->debt_of_assets = $debt_of_assets == "2002-05-03" ? $result->debt_of_assets : $debt_of_assets;

            $result->fin_statement_year = $fin_statement_year == "2002-05-03" ? $result->fin_statement_year : $fin_statement_year;

            $result->due_date = $due_date == "2002-05-03" ? $result->due_date : $due_date;

            $result->APR = $APR == "" ? $result->APR : $APR;

            $result->info_Statement_date_h = $info_Statement_date_h == "2002-05-03" ? $result->info_Statement_date_h : $info_Statement_date_h;

            $result->info_Statement_date_G = $info_Statement_date_G == "2002-05-03" ? $result->info_Statement_date_G : $info_Statement_date_G;
            $result->save();
            $data = ['message' => 'success update'];
            return CustomTrait::SuccessJson($data);
        } else {
            $data = [
                'message' => 'there is something wrong'
            ];
            return CustomTrait::ErrorJson($data);
        }


    }
        function getcampaignattachment(Request $request){

                $id = $request->id;
                $url = URL::to("/");
                $product = DB::table('campaign_attachment')->select('attachment AS attachments','id','ext')->where("campaign_id",$id)->get();
                return  CustomTrait::SuccessJson($product);

        }
        function deleteCampaignattachment(Request $request){
                $id = $request->id;
                $url = URL::to("/");
                $product = DB::table('campaign_attachment')->where('id',$id)->delete();
                $data = array("message"=>"deleted successfully");
                return  CustomTrait::SuccessJson($data);

        }
        function addcampaignattachment(Request $request){
                $data=array('campaign_id'=> $request->id,"attachment"=>$request->attachment,"ext"=>$request->ext);
                DB::table('campaign_attachment')->insert($data);

              $data = [
                'message' => "Successfully inserted data."
        ];
        return  CustomTrait::SuccessJson($data);
        }


        public function updateDateCampagin(Request $req,$id){
            $result=campaign::find($id);
            $date=$req->header('date');
            if($result != ""){
             $result->close_date=$date;
             $result->save();
             $data=['message'=>'success update date'];
             return CustomTrait::SuccessJson($data);
            }else
            {
                $data=['message'=>'Failed update date'];
                return CustomTrait::ErrorJson($data);
            }

        }

        function insertOpportunitySetup(Request $req)
        {


                // echo $req->opportunity_id;
                // die;

                $getdata = OpportunitySetup::select('id')->where('opportunity_id', $req->opportunity_id)->orderBy('id', 'DESC')->first();


                // $count =  count($getdata);


                if ($getdata) {

                        $data = [
                                'message' => "Opportunity already setup"
                        ];
                        return  CustomTrait::ErrorJson($data);
                }





                $activity = 0;
                $i = 0;
                foreach ($req->insert as $key => $val) {

                        $opportunitysetup = new OpportunitySetup;
                        $opportunitysetup->opportunity_id =  $req->opportunity_id;
                        $opportunitysetup->steps =  $val['steps'];
                        $opportunitysetup->role =  $val['role'];
                        $opportunitysetup->master_id =  $val['master_id'];


                        $user_id = campaign::select("id", "user_id")->where('id', $req->opportunity_id)->first()->toArray();
                        $dataUser = User::where('id', $user_id['user_id'])->orderBy('id', 'DESC')->first()->toArray();

                        if ($i == 0) {
                                if ($val['master_id'] == 1) {

                                        if ($dataUser['kyc_approved_status'] == 1) {
                                                $activity = 2;
                                                $opportunitysetup->activity =  2;
                                        } else {
                                                $opportunitysetup->activity =  1;
                                        }
                                }
                        } else {

                                if ($activity == 2) {
                                        $opportunitysetup->activity =  1;
                                        $activity = 0;
                                } else {
                                        $opportunitysetup->activity =  0;
                                }
                        }


                        $opportunitysetup->master_type = $val['master_type'];
                        $opportunitysetup->save();

                        $i++;
                }



                $data = [
                        'message' => "Successfully inserted data."
                ];
                return  CustomTrait::SuccessJson($data);
        }




        function getInvesterList(Request $req)
        {


                $camaign_invester = camaign_invester::select('id', 'campaign_id', 'invester_id', 'amount', 'created_at as date')->where('campaign_id', $req->campaign_id)->orderBy('id', 'DESC')->get();



                if (!$camaign_invester) {

                        $data = [
                                'message' => "No Data"
                        ];
                        return  CustomTrait::ErrorJson($data);
                }




                foreach ($camaign_invester as $key => $val) {

                        $temp = $userdata = User::select('name', 'mobile_number', 'email')->where('id', $val['invester_id'])->first()->toArray();
                        $camaign_invester[$key]['invester_name'] = $temp['name'];
                        $camaign_invester[$key]['mobile_number'] = $temp['mobile_number'];
                        $camaign_invester[$key]['email'] = $temp['email'];
                }


                $data['campaign_investers'] = $camaign_invester;




                $campaign = campaign::select("id", "user_id", "tagline", "share_price", "total_valuation", "min_investment", "max_investment", "fundriser_investment", "company_bio", "reason_to_invest", "investment_planning", "terms", "introduce_team", "status")->where('id', $req->campaign_id)->first()->toArray();


                $sumamount = campaign_inverter::where(['campaign_id' => $req->campaign_id])->get()->sum('amount');

                $investerCount = campaign_inverter::where(['campaign_id' => $req->campaign_id])->get()->count();

                $investment_required = $campaign['total_valuation'] - $sumamount;


                $campaign_cards['investment_required'] = $campaign['total_valuation'];
                $campaign_cards['invested'] = $sumamount;
                $campaign_cards['remaining_investment'] = $investment_required;
                $campaign_cards['no_of_invested'] = $investerCount;


                $data['campaign_data'] = $campaign_cards;


                return  CustomTrait::SuccessJson($data);
        }


        function getStatements(Request $req)
        {

                $organiser_statement = borrower_statement::select("id", "invester_profit_expected", "organiser_profit_expected", "status")->where('campaign_id', $req->campaign_id)->get()->toArray();


                $borrower_statement = borrower_statement::select("id", "campaign_id", "due_date", "principle_expected", "interest_expected", "fees_expected", "total_expected", "principle_paid", "interest_paid", "fees_paid", "total_paid", "paid_date", "principle_due", "interest_due", "fees_due", "total_due", "status")->where('campaign_id', $req->campaign_id)->get()->toArray();

                $investor_statement = investor_statement::where('campaign_id', $req->campaign_id)->get()->toArray();

                $data['borrower_statement'] = $borrower_statement;
                $data['investor_statement'] = $investor_statement;
                $data['organiser_statement'] = $organiser_statement;


                return  CustomTrait::SuccessJson($data);
        }






        function applyLoan(Request $req)
        {


                $data = campaign::select("id", "user_id", "product_id", "total_valuation")->where('id', $req->campaign_id)->first()->toArray();

                //////////////////////////////////////////////////////////////////////////////



                $data['user_id'];
                $campaign_id = $data['id'];


                // $investerCount=campaign_inverter::where(['invester_id'=>$user_id])->get()->count();


                $sumamount = campaign_inverter::where(['campaign_id' => $campaign_id])->get()->sum('amount');

                $total_valuation = $data['total_valuation'];


                if ($sumamount < $total_valuation) {

                        $data = [
                                'message' => "Invested amount is not completed"
                        ];
                        return  CustomTrait::ErrorJson($data);
                }



                $borrower_statement = borrower_statement::select("id")->where('campaign_id', $campaign_id)->get()->count();



                if ($borrower_statement > 0) {

                        $data = [
                                'message' => "Already Applied for loan"
                        ];
                        return  CustomTrait::ErrorJson($data);
                }


                /////////////////////////////////////////////////////////////////////////////

                //applyLoan
                //$product_id = $data['product_id'];
                //$loandata=loan::select("id","loan_type_id")->where('product_id',$product_id)->first();
                $loandata = loan::select("id", "loan_type_id")->where('opportunity_id', $campaign_id)->first();

                if (!$loandata) {

                        $data = [
                                'message' => "Please add loan for opportunity."
                        ];
                        return  CustomTrait::ErrorJson($data);
                }




                $loanIntrestRateData = loan_intrest_rate::where('loan_id', $loandata['id'])->first()->toArray();



                $intrest_calculation = intrest_calculation::where('id', $loanIntrestRateData['intrest_calc_method_id'])->first()->toArray();

                $accrued_interest = accrued_interest::where('id', $loanIntrestRateData['accrued_interest_id'])->first()->toArray();

                // $intrest_rate_charged = intrest_rate_charged::where('id', $loanIntrestRateData['interest_rate_charged_id'])->first()->toArray();

                $loan_type = loan_type::where('id', $loandata['loan_type_id'])->first()->toArray();

                $repayment_scheduling = repayment_scheduling::where('loan_id', $loandata['id'])->first()->toArray();






                $campaign_inverter = campaign_inverter::select('id', 'invester_id', 'amount')->where(['campaign_id' => $req->campaign_id])->get()->toArray();


                $loan_type_id = $loandata['loan_type_id'];
                $loan_id = $loandata['id'];


                $loan_type = $loan_type['title'];
                $intrest_calc_method = $intrest_calculation['title'];
                $accrued_interest = $accrued_interest['title'];
                // $interest_rate_charged = $intrest_rate_charged['title'];
                $intrest_rate_constraint_default = $loanIntrestRateData['intrest_rate_constraint_default'];


                $date = date('Y-m-d');

                $principle = $data['total_valuation'];
                $interest = $intrest_rate_constraint_default / 100;


                $duedate = '';

                if ($repayment_scheduling['internal_type'] == 1) {
                        $term = $repayment_scheduling['installments_constraints_default'] / 365;
                }

                if ($repayment_scheduling['internal_type'] == 2) {
                        $term = $repayment_scheduling['installments_constraints_default'] / 52;
                }


                if ($repayment_scheduling['internal_type'] == 3) {
                        $term = $repayment_scheduling['installments_constraints_default'] / 12;
                }


                //priciple + intrest amt
                $accured_amount = $principle * (1 + ($interest * $term));

                //yearly intrest
                $interest_earned = $accured_amount - $principle;




                //monthly intrest
                $monthly_intrest = $interest_earned / $repayment_scheduling['installments_constraints_default'];
                $collect_priciple_interval = $repayment_scheduling['collect_priciple_interval'];

                $gracetype = $repayment_scheduling['gracetype'];
                $grace_period = $repayment_scheduling['grace_period'];

                $grace = 0;
                $grace_check = 1;
                $grace_done = 0;

                $j = $repayment_scheduling['payment_every'];
                $interval = 0;


                $duedateOffset = $repayment_scheduling['first_due_date_default'];

                $date = date('Y-m-d', strtotime($date . "+$duedateOffset day"));


                for ($i = 0; $i < $repayment_scheduling['installments_constraints_default']; $i++) {
                        $i;


                        $monthly_installment = 0;

                        if ($repayment_scheduling['internal_type'] == 1) {
                                $duedate = date('Y-m-d', strtotime($date . " +$j day"));
                        }
                        if ($repayment_scheduling['internal_type'] == 2) {
                                $duedate = date('Y-m-d', strtotime($date . " +$j week"));
                        }
                        if ($repayment_scheduling['internal_type'] == 3) {
                                $duedate = date('Y-m-d', strtotime($date . " +$j month"));
                        }

                        try {

                                $borrowerstatement = new borrower_statement;
                                $borrowerstatement->due_date =  $duedate;
                                $borrowerstatement->campaign_id =  $req->campaign_id;



                                //collection principle calculation------------------------->

                                if (!empty($collect_priciple_interval)) {


                                        if ($i % ($collect_priciple_interval + 1) == 0) {
                                                $interval += 1;

                                                $monthly_installment = $principle / ceil($repayment_scheduling['installments_constraints_default'] / ($collect_priciple_interval + 1));
                                        }
                                } else {

                                        $monthly_installment = $principle / ($repayment_scheduling['installments_constraints_default'] - $grace_period);
                                }

                                //collection principle calculation end------------------------->



                                if (in_array($gracetype, [2, 3])) {

                                        if ($grace_period > $grace) {

                                                $monthly_installment = 0;


                                                if ($gracetype == 3) {

                                                        $monthly_intrest = 0;
                                                }
                                        } elseif (in_array($gracetype, [3])) {


                                                $monthly_intrest = $interest_earned / ($repayment_scheduling['installments_constraints_default'] - $grace_period);
                                        }
                                }




                                //investor profit calculation---------------->

                                foreach ($campaign_inverter as $key => $val) {

                                        $investor_persent = ($val['amount'] / $principle) * 100;
                                        $organiser_percentage = $intrest_rate_constraint_default - $loanIntrestRateData['fundriser_profit'];


                                        $organiser = $organiser_percentage / 10;
                                        $organiser_profit = $organiser * $monthly_intrest;




                                        $investor_profit = $monthly_intrest - $organiser_profit;
                                        $individual_invester_profit = ($investor_profit * $investor_persent) / 100;


                                        $invester_principle = ($monthly_installment * $investor_persent) / 100;




                                        $investstatement = new investor_statement;
                                        $investstatement->campaign_id =  $req->campaign_id;
                                        $investstatement->invester_id = $val['invester_id'];
                                        $investstatement->date =  $duedate;
                                        $investstatement->principle =  $invester_principle;
                                        $investstatement->profit =  $individual_invester_profit;
                                        $investstatement->total = $invester_principle + $individual_invester_profit;
                                        $investstatement->save();
                                }


                                //------------------------------------------->

                                // echo '<pre>';
                                // print_r($organiser_profit);
                                // die;

                                $borrowerstatement->organiser_profit_expected = $organiser_profit;
                                $borrowerstatement->invester_profit_expected = $investor_profit;
                                $borrowerstatement->principle_expected = $monthly_installment;
                                $borrowerstatement->interest_expected = $monthly_intrest;
                                $borrowerstatement->total_expected = $monthly_installment + $monthly_intrest;
                                $borrowerstatement->save();
                        } catch (Exception $e) {

                                Log::channel('loan')->info($e->getMessage());
                                $data = [
                                        'message' => "something went wrong"
                                ];
                                return  CustomTrait::ErrorJson($data);
                        }






                        $date = $duedate;

                        $grace_check++;
                        $grace++;
                        if (!empty($grace_period) && !empty($collect_priciple_interval)) {
                                if ($grace_period < $grace_check) {

                                        $grace_done += 1;
                                }

                                if ($grace_done == 1) {
                                        echo $i = -1;
                                }
                        }
                }



                ////////////////////////investor//////////////////////////////


                $campaign_id = $req->campaign_id;

                $camp = OpportunitySetup::where(["master_id" => 4, "opportunity_id" => $campaign_id])->update(array('activity' => 2));



                $data = [
                        'message' => "Successfully applied for loan."
                ];
                return  CustomTrait::SuccessJson($data);
        }







        //         function applyLoan(Request $req)
        //         {


        //           $data=campaign::select("id","user_id","product_id","total_valuation")->where('id',$req->campaign_id)->first()->toArray();

        // //////////////////////////////////////////////////////////////////////////////



        // $data['user_id'];
        // $campaign_id = $data['id'];


        // // $investerCount=campaign_inverter::where(['invester_id'=>$user_id])->get()->count();


        // $sumamount=campaign_inverter::where(['campaign_id'=>$campaign_id])->get()->sum('amount');

        // $total_valuation = $data['total_valuation'];


        //   if($sumamount < $total_valuation){

        //         $data = [
        //                 'message' => "Invested amount is not completed"
        //               ];
        //               return  CustomTrait::ErrorJson($data);
        //   }



        //   $borrower_statement = borrower_statement::select("id")->where('campaign_id',$campaign_id)->get()->count();



        //   if($borrower_statement > 0){


        //         $data = [
        //                 'message' => "Already Applied for loan"
        //               ];
        //               return  CustomTrait::ErrorJson($data);

        //   }




        // /////////////////////////////////////////////////////////////////////////////



        //         //   applyLoan


        //           $product_id = $data['product_id'];
        //           $loandata=loan::select("id","loan_type_id")->where('product_id',$product_id)->first();

        //           if(!$loandata){

        //                 $data = [
        //                         'message' => "Product not found for campaign."
        //                 ];
        //                 return  CustomTrait::ErrorJson($data);

        //           }




        //           $loanIntrestRateData=loan_intrest_rate::where('loan_id',$loandata['id'])->first()->toArray();



        //           $intrest_calculation=intrest_calculation::where('id',$loanIntrestRateData['intrest_calc_method_id'])->first()->toArray();

        //           $accrued_interest=accrued_interest::where('id',$loanIntrestRateData['accrued_interest_id'])->first()->toArray();

        //           $intrest_rate_charged=intrest_rate_charged::where('id',$loanIntrestRateData['interest_rate_charged_id'])->first()->toArray();

        //           $loan_type=loan_type::where('id',$loandata['loan_type_id'])->first()->toArray();

        //           $repayment_scheduling=repayment_scheduling::where('loan_id',$loandata['id'])->first()->toArray();






        //           $campaign_inverter = campaign_inverter::select('id','invester_id','amount')->where(['campaign_id'=>$req->campaign_id])->get()->toArray();


        //           $loan_type_id = $loandata['loan_type_id'];
        //           $loan_id = $loandata['id'];


        //           $loan_type = $loan_type['title'];
        //           $intrest_calc_method = $intrest_calculation['title'];
        //           $accrued_interest = $accrued_interest['title'];
        //           $interest_rate_charged = $intrest_rate_charged['title'];
        //           $intrest_rate_constraint_default = $loanIntrestRateData['intrest_rate_constraint_default'];


        //          $date = date('Y-m-d');

        //          $principle = $data['total_valuation'];
        //          $interest = $intrest_rate_constraint_default / 100;


        //          $duedate = '';

        //          if($repayment_scheduling['internal_type'] == 1){
        //                 $term = $repayment_scheduling['installments_constraints_default']/365;

        //          }

        //          if($repayment_scheduling['internal_type'] == 2){
        //                $term = $repayment_scheduling['installments_constraints_default']/52;

        //          }


        //          if($repayment_scheduling['internal_type'] == 3){
        //                 $term = $repayment_scheduling['installments_constraints_default']/12;

        //          }


        //        //priciple + intrest amt
        //        $accured_amount = $principle*(1+($interest * $term));

        //        //yearly intrest
        //        $interest_earned = $accured_amount - $principle;




        //         //monthly intrest
        //         $monthly_intrest = $interest_earned/ $repayment_scheduling['installments_constraints_default'];
        //         $collect_priciple_interval = $repayment_scheduling['collect_priciple_interval'];

        //         $gracetype = $repayment_scheduling['gracetype'];
        //         $grace_period = $repayment_scheduling['grace_period'];

        //         $grace = 0;
        // 		$grace_check = 1;
        // 		$grace_done=0;

        //         $j = $repayment_scheduling['payment_every'];
        //         $interval = 0;


        //         $duedateOffset = $repayment_scheduling['first_due_date_default'];

        //         $date = date('Y-m-d', strtotime($date . "+$duedateOffset day"));


        //         for($i = 0; $i < $repayment_scheduling['installments_constraints_default']; $i++){
        //               $i;


        //                 $monthly_installment = 0;

        //                 if($repayment_scheduling['internal_type'] == 1){
        //                         $duedate = date('Y-m-d', strtotime($date . " +$j day"));
        //                 }
        //                 if($repayment_scheduling['internal_type'] == 2){
        //                         $duedate = date('Y-m-d', strtotime($date . " +$j week"));
        //                 }
        //                 if($repayment_scheduling['internal_type'] == 3){
        //                         $duedate = date('Y-m-d', strtotime($date . " +$j month"));
        //                 }



        //                 $borrowerstatement = new borrower_statement;
        //                 $borrowerstatement->due_date =  $duedate;
        //                 $borrowerstatement->campaign_id =  $req->campaign_id;



        //                 //collection principle calculation------------------------->

        //                 if(!empty($collect_priciple_interval)){


        //                 if($i % ($collect_priciple_interval+1) == 0 ){
        //                      $interval+=1;

        //         $monthly_installment = $principle / ceil($repayment_scheduling['installments_constraints_default'] / ($collect_priciple_interval+1)) ;

        //                 }

        //                }else{

        //         $monthly_installment = $principle /($repayment_scheduling['installments_constraints_default']- $grace_period);


        //                }

        //                 //collection principle calculation end------------------------->



        //                 if(in_array($gracetype,[2,3])){

        //                         if($grace_period > $grace){

        //                                         $monthly_installment = 0;


        //                                 if($gracetype == 3){

        //                                         $monthly_intrest = 0;


        //                                 }
        //                         }elseif(in_array($gracetype,[3])){


        //                                 $monthly_intrest = $interest_earned/ ($repayment_scheduling['installments_constraints_default'] - $grace_period);

        //                         }



        //                 }




        //     //investor profit calculation---------------->

        //                 foreach($campaign_inverter as $key=>$val){

        //                         $investor_persent = ($val['amount']/$principle)*100;
        //                         $organiser_percentage = $intrest_rate_constraint_default - $loanIntrestRateData['fundriser_profit'];


        //                        $organiser = $organiser_percentage/10;
        //                        $organiser_profit = $organiser * $monthly_intrest;




        //                        $investor_profit = $monthly_intrest - $organiser_profit;
        //                        $individual_invester_profit = ($investor_profit * $investor_persent)/100;


        //                        $invester_principle = ($monthly_installment * $investor_persent) /100;

        //                        $investstatement = new investor_statement;
        //                        $investstatement->campaign_id =  $req->campaign_id;
        //                        $investstatement->invester_id = $val['invester_id'];
        //                        $investstatement->date =  $duedate;
        //                        $investstatement->principle =  $invester_principle;
        //                        $investstatement->profit =  $individual_invester_profit;
        //                        $investstatement->total = $invester_principle + $individual_invester_profit;

        //                        $investstatement->save();




        //                 }


        // //------------------------------------------->

        // // echo '<pre>';
        // // print_r($organiser_profit);
        // // die;

        //                 $borrowerstatement->organiser_profit_expected = $organiser_profit;
        //                 $borrowerstatement->invester_profit_expected = $investor_profit;
        //                 $borrowerstatement->principle_expected = $monthly_installment;
        //                 $borrowerstatement->interest_expected = $monthly_intrest;
        //                 $borrowerstatement->total_expected = $monthly_installment + $monthly_intrest;
        //                 $borrowerstatement->save();






        //                 $date = $duedate;

        //                 $grace_check++;
        // 				$grace++;
        // 				if(!empty($grace_period) && !empty($collect_priciple_interval)){
        // 				  if($grace_period < $grace_check){

        // 					   $grace_done+=1;

        // 				   }

        // 				   if($grace_done==1){
        // 					 echo $i=-1;
        // 				   }

        //                                 }

        //         }



        // ////////////////////////investor//////////////////////////////




        //         $data = [
        //                 'message' => "Successfully applied for loan."
        //         ];
        //         return  CustomTrait::SuccessJson($data);

        //         }







        function deleteCampaign(Request $req)
        {

                try {

                        $infotype = campaign::find($req->id);
                        $infotype->status = 3;
                        $infotype->save();
                } catch (Exception $e) {

                        Log::channel('product')->info($e->getMessage());

                        $data = [
                                'message' => "something went wronge"
                        ];
                        return  CustomTrait::ErrorJson($data);
                }

                $data = [
                        'message' => 'Campaign Deleted'
                ];

                return  CustomTrait::SuccessJson($data);
        }




        function list($id)
        {

                // echo $id;
                // die;

                $data = '';
                if ($id == 1) {




                        $data = campaign::select("id", "user_id", "tagline", "share_price", "total_valuation", "min_investment", "max_investment", "fundriser_investment", "company_bio", "reason_to_invest", "investment_planning", "terms", "introduce_team", "status")->orderBy('id', 'DESC')->get();


                        foreach($data as $key=>$val){

                                $account_number_credit = anb_accounts::select('account_number')->where(['opportunity_id'=>$val['id'],'type'=>3])->first();

                                $account_number_debit = anb_accounts::select('account_number')->where(['opportunity_id'=>$val['id'],'type'=>4])->first();

                                if(isset($account_number_credit)){
                                    $data[$key]['account_number_credit'] = $account_number_credit['account_number'];
                                }else{
                                    $data[$key]['account_number_credit'] = null;
                                }

                                if(isset($account_number_debit)){
                                $data[$key]['account_number_debit'] = $account_number_debit['account_number'];
                                }else{
                                    $data[$key]['account_number_debit'] = null;
                                }


                        }








                        // foreach ($data as $key => $val) {

                        //         $camp_id = $val['id'];
                        //         $imagecamp = campaign_image::select("image")->where('campaign_id', $camp_id)->get()->toArray();


                        //         foreach ($imagecamp as $key1 => $val) {

                        //                 $data[$key]['image'][$key1] = $val['image'];
                        //         }
                        // }





                } else {



                        $dataoppo = [];
                        $dataoppo = OpportunitySetup::where(['activity' => 1, 'role' => $id])->orWhere('activity', '=', 2)->groupBy('opportunity_id')->get()->toArray();


                        // echo '<pre>';
                        // print_r($dataoppo);
                        // die;


                       $count = count($dataoppo);



                        $data = [];
                        if ($count) {


                                foreach ($dataoppo as $key => $val) {

                                        $temparray = campaign::select("id", "user_id", "tagline", "share_price", "total_valuation", "min_investment", "max_investment", "fundriser_investment", "company_bio", "reason_to_invest", "investment_planning", "terms", "introduce_team", "status")->where(['id' => $val['opportunity_id']])->orderBy('id', 'DESC')->first();

                                        $data[] = $temparray;



                                }


                        }


                        // die;
                }




                return  CustomTrait::SuccessJson($data);
        }



        function listing()
        {


                $data = campaign::select("id", "user_id", "tagline", "share_price", "total_valuation", "min_investment", "max_investment", "fundriser_investment", "company_bio", "reason_to_invest", "investment_planning", "terms", "introduce_team", "status")->orderBy('id', 'DESC')->get()->toArray();

                // echo '<pre>';
                // print_r($data);
                // die;



                // foreach ($data as $key => $val) {

                //         $camp_id = $val['id'];
                //         $imagecamp = campaign_image::select("image")->where('campaign_id', $camp_id)->get()->toArray();


                //         foreach ($imagecamp as $key1 => $val) {

                //                 $data[$key]['image'][$key1] = $val['image'];
                //         }
                // }



                return  CustomTrait::SuccessJson($data);
        }



        function modifyEvaluationCampaign(Request $req)
        {


                // echo '<pre>';
                // print_r($req->all());
                // die;



                $session_user_id = auth('sanctum')->user()->id;
                $campaign_id = $req->field[0]['campaign_id'];


                $role_type = User::select('role_type')->where('id', $session_user_id)->first()->toArray();







                $data = campaign::select("user_id")->where('id', $campaign_id)->first()->toArray();


                $user_id = $data['user_id'];

                $kyc_approved_status = User::select('kyc_approved_status')->where('id', $user_id)->first();
                $campaign_approved_status = campaign::select("approved_status")->where('user_id', $user_id)->first();





                // if ($kyc_approved_status['kyc_approved_status'] != 1 || $campaign_approved_status['approved_status'] != 1) {

                //         $data = [
                //                 'message' => "sorry you no previlages for updating the info."
                //         ];
                //         return  CustomTrait::ErrorJson($data);
                // }


                $data = Evaluation::select("role_id")->where('id', $req->field[0]['evaluation_id'])->first()->toArray();


                $arr = explode(',', $data['role_id']);

                // if (!in_array($role_type['role_type'], $arr)) {
                //         $data = [
                //                 'message' => "sorry you no previlages for updating the info."
                //         ];
                //         return  CustomTrait::ErrorJson($data);
                // }




                foreach ($req->field as $key => $val) {



                        if (!isset($val['camp_evaluation_id']) || $val['camp_evaluation_id'] == '') {

                                try {

                                        $evocat = new Campaign_evaluation;
                                        $evocat->evaluation_id = $val['evaluation_id'];
                                        $evocat->evaluation_detail_id = $val['evaluation_detail_id'];
                                        $evocat->campaign_id = $val['campaign_id'];
                                        $evocat->evaluation_cat_id = $val['evaluation_cat_id'];
                                        $evocat->value = $val['value'];
                                        $evocat->save();
                                } catch (Exception $e) {

                                        Log::channel('loan')->info($e->getMessage());
                                        $data = [
                                                'message' => "something went wrong"
                                        ];
                                        return  CustomTrait::ErrorJson($data);
                                }
                        } else {



                                try {


                                        $evocat = Campaign_evaluation::find($val['camp_evaluation_id']);
                                        $evocat->evaluation_id = $val['evaluation_id'];
                                        $evocat->evaluation_detail_id = $val['evaluation_detail_id'];
                                        $evocat->campaign_id = $val['campaign_id'];
                                        $evocat->evaluation_cat_id = $val['evaluation_cat_id'];
                                        $evocat->value = $val['value'];
                                        $evocat->save();
                                } catch (Exception $e) {

                                        Log::channel('loan')->info($e->getMessage());
                                        $data = [
                                                'message' => "something went wrong"
                                        ];
                                        return  CustomTrait::ErrorJson($data);
                                }
                        }
                }




                $evaluation_id = $req->field[0]['evaluation_id'];

                // echo $evaluation_id;
                // echo $campaign_id;
                // die;

                $camp = OpportunitySetup::where(["master_id" => $evaluation_id, "opportunity_id" => $campaign_id])->update(array('activity' => 2));


                $getstep = OpportunitySetup::select('steps')->where(["master_id" => $evaluation_id, "opportunity_id" => $campaign_id])->first()->toArray();


                $step = $getstep['steps'] + 1;




                $campp = OpportunitySetup::where(["opportunity_id" => $campaign_id, "steps" => $step])->update(array('activity' => 1));




                try {

                        $Campaign_log = new Evaluation_log;
                        $Campaign_log->evaluation_id = $req->field[0]['evaluation_id'];
                        $Campaign_log->activity_by = $session_user_id;
                        $Campaign_log->campaign_id = $campaign_id;
                        $Campaign_log->activity_type = 1;
                        $Campaign_log->save();
                } catch (Exception $e) {

                        Log::channel('loan')->info($e->getMessage());
                        $data = [
                                'message' => "something went wrong"
                        ];
                        return  CustomTrait::ErrorJson($data);
                }





                $evaluation_count = Evaluation::where('status', 1)->get()->count();


                $evaluation_log_count = Evaluation_log::where('campaign_id', $campaign_id)->distinct()->count('evaluation_id');


                if ($evaluation_count == $evaluation_log_count) {


                        $camp = campaign::find($val['campaign_id']);
                        $camp->status = 1;
                        $camp->save();
                }




                //    $opportunity_setup = OpportunitySetup::select('id', 'opportunity_id', 'master_id', 'steps', 'role', 'activity', 'master_type')->where(['opportunity_id' => $campaign_id])->get()->toArray();


                //     Model::where("x",1)->where("y",2)->update(array('key' => 'new_value', ...));




                $data = [
                        'message' => "Campaign Evaluation modified."
                ];
                return  CustomTrait::SuccessJson($data);
        }



        function kycApproveStatus(Request $req)
        {

                if (empty($req->approved_status)) {

                        $req->approved_status = 0;
                } else {

                        $req->approved_status = $req->approved_status;
                }

                $session_user_id  = auth('sanctum')->user()->id;



                $user_id = $req->user_id;

                $user = User::find($user_id);
                $user->kyc_approved_status = $req->approved_status;
                $user->kyc_note = $req->note;
                $user->save();


                $sctivity_type = 0;
                if ($req->approved_status == 1) {
                        $sctivity_type = 2;


                        $checkuser = campaign::select("id")->where('user_id', $user_id)->orderBy('id', 'DESC')->first();

                        if ($checkuser) {


                                $camp = OpportunitySetup::where(["master_id" => 1, "opportunity_id" => $checkuser['id']])->update(array('activity' => 2));


                                $getstep = OpportunitySetup::select('steps')->where(["master_id" => 1, "opportunity_id" => $checkuser['id']])->first()->toArray();


                                $step = $getstep['steps'] + 1;


                                $campp = OpportunitySetup::where(["opportunity_id" => $checkuser['id'], "steps" => $step])->update(array('activity' => 1));
                        }




////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

                // insert into anb accounts table




                $userData = user::select("id","role_type")->where('id', $user_id)->first();


                if($userData['role_type'] == 3){
                    $anb_type = 1;

                    $prefixnumber = '001';
                }
                if($userData['role_type'] == 2){
                    $anb_type = 2;

                    $prefixnumber = '002';
                }

        //       echo $user_id;
        //       echo 'ghh';



               $countanbaccount = anb_accounts::where(['user_id'=>$user_id])->count('id');

                if($countanbaccount < 1){

                $account_number = CustomTrait::createAccountNumber($user_id,$prefixnumber,$opportunity='');

                try {

                        $anb = new anb_accounts;
                        $anb->user_id = $user_id;
                        $anb->type = $anb_type;
                        $anb->account_number = $account_number;
                        $anb->created_by = $session_user_id;

                        $anb->save();

                    } catch (Exception $e) {

                        Log::channel('loan')->info($e->getMessage());
                        $data = [
                            'message' => "something went wrong"
                        ];
                        return  CustomTrait::ErrorJson($data);
                    }



                }










////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////


                }

                if ($req->approved_status == 2) {
                        $sctivity_type = 3;
                }

                try {

                        $kyc_log = new kyc_log;
                        $kyc_log->user_id = $user_id;
                        $kyc_log->activity_by = $session_user_id;
                        $kyc_log->activity_type = $sctivity_type;
                        $kyc_log->save();
                } catch (Exception $e) {

                        Log::channel('loan')->info($e->getMessage());
                        $data = [
                                'message' => "something went wrong"
                        ];
                        return  CustomTrait::ErrorJson($data);
                }



                if ($req->approved_status == 1) {

                        $data = [
                                'message' => "Approved"
                        ];

                        $type = 3;
                        // CustomTrait::sendMailHtml($user_id, $type);
                }

                if ($req->approved_status == 2) {

                        $data = [
                                'message' => "Rejected"
                        ];

                        $type = 4;
                        // CustomTrait::sendMailHtml($user_id, $type);
                }


                if ($req->approved_status == 0) {

                        $data = [
                                'message' => "Pending"
                        ];
                }


                // $camp=campaign::find($req->campaign_id);
                // $camp->product_id = $req->product_id;
                // $camp->save();




                return  CustomTrait::SuccessJson($data);
        }



        function CampaignApproveStatus(Request $req)
        {


                $session_user_id  = auth('sanctum')->user()->id;;
                $user_id = $req->user_id;


                $opportunityData = campaign::where('id', $req->campaign_id)->first()->toArray();



                $sctivity_type = 0;
///////////////////////////approve campaign///////////////////////////
                if ($req->campaign_approve_type == 1) {

                        if ($req->approved_status == 1) {

                                campaign::where('id', $req->campaign_id)->update(array('approved_status' => $req->approved_status, 'note' => $req->note));

                                $sctivity_type = 2;


                                $camp = OpportunitySetup::where(["master_id" => 2, "opportunity_id" => $req->campaign_id])->update(array('activity' => 2));


                                $getstep = OpportunitySetup::select('steps')->where(["master_id" => 2, "opportunity_id" => $req->campaign_id])->first()->toArray();


                                $step = $getstep['steps'] + 1;


                                $campp = OpportunitySetup::where(["opportunity_id" => $req->campaign_id, "steps" => $step])->update(array('activity' => 1));




                                $type = 5;
                                CustomTrait::sendMailHtml($user_id, $type);





//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


                      // insert into anb accounts table

                      $countanbaccount = anb_accounts::where(['opportunity_id'=>$req->campaign_id])->count('id');

                      if($countanbaccount < 1){



                      for($i = 3;$i<=4;$i++){


                        $account_number = CustomTrait::createAccountNumber($user_id='',"00$i",$req->campaign_id);


                      try {

                          $anb = new anb_accounts;
                          $anb->opportunity_id = $req->campaign_id;
                          $anb->type = $i;
                          $anb->account_number = $account_number;
                          $anb->created_by = $session_user_id;
                          $anb->save();

                      } catch (Exception $e) {

                          Log::channel('loan')->info($e->getMessage());
                          $data = [
                              'message' => "something went wrong"
                          ];
                          return  CustomTrait::ErrorJson($data);

                      }


                    }

                }


                    // SA5330100008002000001482

//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////


                        }



                        if ($req->approved_status == 2) {
                                campaign::where('user_id', $user_id)->update(array('approved_status' => $req->approved_status, 'note' => $req->note));
                                $sctivity_type = 3;

                                $type = 6;
                                CustomTrait::sendMailHtml($user_id, $type,$req->campaign_id);


                        }
                }




///////////////////////aset product//////////////////////////

                if ($req->campaign_approve_type == 2) {


                if ($req->product_id) {


                        $evocat = campaign::find($req->campaign_id);
                        $evocat->product_id = $req->product_id;
                        $evocat->save();



                        $camp = OpportunitySetup::where(["master_id" => 3, "opportunity_id" => $req->campaign_id])->update(array('activity' => 2));


                        $getstep = OpportunitySetup::select('steps')->where(["master_id" => 3, "opportunity_id" => $req->campaign_id])->first()->toArray();


                        $step = $getstep['steps'] + 1;




                        $campp = OpportunitySetup::where(["opportunity_id" => $req->campaign_id, "steps" => $step])->update(array('activity' => 1));










                        $type = 9;
                        CustomTrait::sendMailHtml($user_id, $type);

                }
        }



        //////////////////////////publish campaign///////////////////////////

        if ($req->campaign_approve_type == 3) {

        campaign::where('id', $req->campaign_id)->update(array('status' => 1));


        // customer emailsend
        $type = 10;
        CustomTrait::sendMailHtml($user_id, $type);
        // campaign publishing emailsend

        $campaign_id = $req->campaign_id;


        $camp = OpportunitySetup::where(["master_id" => 4, "opportunity_id" => $campaign_id])->update(array('activity' => 2));


        $getstep = OpportunitySetup::select('steps')->where(["master_id" => 2, "opportunity_id" => $campaign_id])->first()->toArray();


        // $step = $getstep['steps'] + 1;


        // $campp = OpportunitySetup::where(["opportunity_id" => $campaign_id, "steps" => $step])->update(array('activity' => 1));



        // $investor = User::select('id')->where('role_type', 2)->orderBy('id', 'DESC')->get()->toArray();

        // foreach ($investor as $key => $val) {

        //         $type = 11;

        //         $user = $val['id'];
        //         CustomTrait::sendMailHtml($user,$type,$req->campaign_id);

        // }

        }


//////////////////////log////////////////////////////////////


                $campaign = campaign::select('id')->where('user_id', $req->user_id)->first()->toArray();

                try {

                        $Campaign_log = new Campaign_log;
                        $Campaign_log->activity_by = $session_user_id;
                        $Campaign_log->campaign_id = $campaign['id'];
                        $Campaign_log->activity_type = $sctivity_type;
                        $Campaign_log->save();
                } catch (Exception $e) {

                        Log::channel('loan')->info($e->getMessage());
                        $data = [
                                'message' => "something went wrong"
                        ];
                        return  CustomTrait::ErrorJson($data);
                }





                ////////////////////////////email/////////////////////

                if ($req->approved_status == 1) {

                        $data = [
                                'message' => "Approved"
                        ];

                        $type = 5;

                }

                if ($req->approved_status == 2) {

                        $data = [
                                'message' => "Rejected"
                        ];

                        $type = 6;
                }



                // $camp_id = $campaign['id'];
                // CustomTrait::sendMailHtml($user_id, $type);
                return  CustomTrait::SuccessJson($data);
        }




        function getByIdnew($campaign_id, $role)
        {


                $data = [];

                $dataa['campaign'] = campaign::select("id", "product_id", "user_id", "tagline", "share_price", "total_valuation", "min_investment", "max_investment", "fundriser_investment", "company_bio", "reason_to_invest", "investment_planning", "terms", "introduce_team", "status", "approved_status", "note")->where(['id' => $campaign_id, 'status' => 1])->first()->toArray();


                $user_id = $dataa['campaign']['user_id'];


                if ($role == 1) {

                        $opportunity_setup = OpportunitySetup::select('id', 'opportunity_id', 'master_id', 'steps', 'role', 'activity', 'master_type')->where(['opportunity_id' => $campaign_id])->orderBy('steps', 'ASC')->get()->toArray();
                } else {

                        $opportunity_setup = OpportunitySetup::select('id', 'opportunity_id', 'master_id', 'steps', 'role', 'activity', 'master_type')->where(['opportunity_id' => $campaign_id, 'activity' => 0, 'role' => $role])->orderBy('steps', 'ASC')->get()->toArray();
                }


                if (!$opportunity_setup) {


                        $data = ['You dont have permission to access the data'];

                        return  CustomTrait::SuccessJson($data);
                }

                // echo $role;

                // echo '<pre>';
                // print_r($opportunity_setup);
                // die;

                foreach ($opportunity_setup as $keyy => $vall) {

                        $rolevalue = 0;
                        if ($role == 1) {
                                $rolevalue = 1;
                        } else {
                                $rolevalue = $vall['role'];
                        }



                        if (in_array($rolevalue, array(1, 5))) {


                                $data['campaign'] = campaign::select("id", "product_id", "user_id", "tagline", "share_price", "total_valuation", "min_investment", "max_investment", "fundriser_investment", "company_bio", "reason_to_invest", "investment_planning", "terms", "introduce_team", "status", "approved_status", "note")->where(['id' => $campaign_id, 'status' => 1])->first()->toArray();



                                if ($data) {


                                        $data['campaign']['campaign_images'] = campaign_image::select("id", "image")->where(['campaign_id' => $campaign_id])->get();
                                        $data['campaign']['team'] = campaign_team::select("id", "name", "designation", "image")->where(['campaign_id' => $campaign_id])->get();
                                }
                        }

                        //  die;














                        //////////////////////////////////////kyc////////////////////////////////



                        if (in_array($rolevalue, array(1, 4))) {

                                $user = User::select('role_type', 'kyc_approved_status', 'kyc_note')->where('id', $user_id)->first();
                                $id = $user['role_type'];



                                $detail = UserKycRole::select('id', 'user_type_id', 'kyc_id')->where('id', $id)->get()->toArray();


                                foreach ($detail as $key1 => $val1) {



                                        $arrKyc_id = explode(',', $val1['kyc_id']);
                                        foreach ($arrKyc_id as $key => $val) {

                                                $detail[$key] = Kyc::select('id', 'title', 'ar_title', 'status', 'position')->where(['id' => $val])->first()->toArray();


                                                $detail[$key]['role'] = $rolevalue;


                                                $temp2 = KycDetail::Leftjoin('kyc_info_types', 'kyc_info_types.id', '=', 'kyc_details.info_type')->where(['kyc_details.kyc_id' => $val])->groupBy('kyc_details.info_type')->orderBy('kyc_details.info_type', 'ASC')->orderBy('kyc_details.position', 'ASC')->get(['kyc_details.info_type', 'kyc_info_types.title'])->toArray();


                                                $detail[$key]['info_type'] = $temp2;
                                                foreach ($detail[$key]['info_type'] as $key2 => $val2) {


                                                        $kycdetail = KycDetail::select('id', 'kyc_id', 'type', 'info_type', 'title', 'ar_title', 'status', 'position')->where(['kyc_id' => $val, 'info_type' => $val2['info_type'], 'status' => 1])->orderBy('info_type', 'ASC')->orderBy('position', 'ASC')->get()->toArray();



                                                        foreach ($kycdetail as $key3 => $val3) {

                                                                $kyc_detail_id = $val3['id'];

                                                                $temp = UserKyc::select('value')->where(['kyc_detail_id' => $kyc_detail_id, 'user_id' => $user_id])->first();


                                                                if ($temp) {
                                                                        $kycdetail[$key3]['value'] = $temp['value'];
                                                                } else {
                                                                        $kycdetail[$key3]['value'] = null;
                                                                }
                                                        }


                                                        $detail[$key]['info_type'][$key2]['detail'] = $kycdetail;
                                                }
                                        }
                                }



                                if ($vall['master_id'] == 100) {
                                        $data['role'] = $rolevalue;
                                }







                                $data['kyc_kyc_approved_status'] = $user['kyc_approved_status'];
                                $data['kyc_kyc_note'] = $user['kyc_note'];
                                $data['kyc'] = $detail;
                        }

                        //////////////////////////////////////////////////////////////////
                        ///////////////evloluation////////////
                        //////////////////////////////////////////////////////////////////



                        if (in_array($rolevalue, array(1, 6))) {

                                $evaluationData = Evaluation::select('id', 'title', 'ar_title', 'position', 'role_id', 'rank_type', 'status')->where(['status' => 1])->orderBy('position', 'ASC')->get()->toArray();




                                foreach ($evaluationData as $key => $val) {


                                        if ($vall['master_id'] == $val['id']) {

                                                $evaluation = Evaluation::select('id', 'title', 'ar_title', 'position', 'role_id', 'rank_type', 'status')->where(['id' => $val['id'], 'status' => 1])->orderBy('position', 'ASC')->first()->toArray();


                                                $evaluation['role'] = $rolevalue;



                                                $evo_category = Evaluation_category::select('id', 'title', 'ar_title', 'minrange', 'maxrange', 'position', 'status')->where(['evp_id' => $val['id']])->orderBy('position', 'ASC')->get()->toArray();






                                                foreach ($evo_category as $key1 => $val1) {


                                                        $camp_evo_safe = Campaign_evaluation::select('value', 'id')
                                                                ->where(['evaluation_detail_id' => 0, 'evaluation_cat_id' => $val1['id'], 'campaign_id' => $campaign_id])
                                                                ->orderBy('id', 'DESC')->first();


                                                        $evo_detail = EvaluationDetail::select('id', 'evp_id', 'evo_cat_id', 'title', 'ar_title', 'minrange', 'maxrange', 'position', 'status')->where(['evo_cat_id' => $val1['id']])->orderBy('position', 'ASC')->get()->toArray();


                                                        foreach ($evo_detail as $key2 => $val2) {

                                                                $evaluation_detail_id = $val2['id'];



                                                                $temp = Campaign_evaluation::select('value', 'id')
                                                                        ->where(['evaluation_detail_id' => $evaluation_detail_id, 'campaign_id' => $campaign_id])
                                                                        ->first();

                                                                if ($temp) {

                                                                        $evo_detail[$key2]['camp_evaluation_id'] = $temp['id'];
                                                                        $evo_detail[$key2]['value'] = $temp['value'];
                                                                } else {
                                                                        $evo_detail[$key2]['camp_evaluation_id'] = null;
                                                                        $evo_detail[$key2]['value'] = null;
                                                                }
                                                        }


                                                        $evo_category[$key1]['detail'] = $evo_detail;



                                                        if ($camp_evo_safe) {
                                                                $evo_category[$key1]['value'] = $camp_evo_safe['value'];
                                                        }


                                                        $evaluation['category'] = $evo_category;
                                                }



                                                $data['evaluation'][$key] = $evaluation;
                                        }
                                }
                        }

                        ////////////////////////////////////////////////////////////////////////////////////
                        ///////////////////////////////////////////////////////////////////////////////////


                        if (in_array($rolevalue, array(1))) {

                                $add_loan = 0;


                                $sumamount = campaign_inverter::where(['campaign_id' => $campaign_id])->get()->sum('amount');

                                $total_valuation = $dataa['campaign']['total_valuation'];


                                if ($sumamount == $total_valuation) {
                                        $add_loan = 1;
                                }



                                $borrower_statement = borrower_statement::select("id")->where('campaign_id', $campaign_id)->get()->count();



                                if ($borrower_statement == 0) {
                                        $add_loan = 0;
                                }




                                $data['add_loan'] = $add_loan;


                                /////////////// apply loan /////////////////

                                $borrower_statement = borrower_statement::select("id")->where('campaign_id', $campaign_id)->get()->count();



                                if ($borrower_statement > 0) {

                                        $data['apply_loan_status'] = 1;
                                } else {

                                        $data['apply_loan_status'] = 0;
                                }



                                ////////////////modify loan ///////////////

                                $data['loan'] = loan::select("id", "product_id", "opportunity_id", "loan_type_id", "title", "ar_title", "status")->where(['opportunity_id' => $campaign_id, 'status' => 1])->first();


                                if ($data['loan']) {
                                        $loan_id = $data['loan']['id'];
                                } else {
                                        $loan_id = 0;
                                }


                                if (!$data['loan']) {

                                        $data['loan']['id'] = null;
                                        $data['loan']['product_id'] = null;
                                        $data['loan']['opportunity_id'] = null;
                                        $data['loan']['loan_type_id'] = null;
                                        $data['loan']['title'] = null;
                                        $data['loan']['ar_title'] = null;
                                        $data['loan']['status'] = null;
                                }


                                $data['interest_rate'] = loan_intrest_rate::select("id", "loan_id", "organization_intrest", "fundriser_profit", "intrest_calc_method_id", "accrued_interest_id", "interest_rate_charged_id", "intrest_rate_constraint_default", "funder_intrest_comm_percent")->where(['loan_id' => $loan_id])->first();

                                if (!$data['interest_rate']) {

                                        $data['interest_rate']['id'] = null;
                                        $data['interest_rate']['loan_id'] = null;
                                        $data['interest_rate']['organization_intrest'] = null;
                                        $data['interest_rate']['fundriser_profit'] = null;
                                        $data['interest_rate']['intrest_calc_method_id'] = null;
                                        $data['interest_rate']['accrued_interest_id'] = null;
                                        $data['interest_rate']['interest_rate_charged_id'] = null;
                                        $data['interest_rate']['intrest_rate_constraint_default'] = null;
                                        $data['interest_rate']['funder_intrest_comm_percent'] = null;
                                }



                                $data['repayment_scheduling'] = repayment_scheduling::select(
                                        "id",
                                        "loan_id",
                                        "gracetype",
                                        "grace_period",
                                        "interval_method_id",
                                        "payment_every",
                                        "internal_type",
                                        "collect_priciple_interval",
                                        "installments_constraints_default",
                                        "first_due_date_default",
                                        "grace_period_id",
                                        "collect_principle"
                                )->where(['loan_id' => $loan_id])->first();


                                if (!$data['repayment_scheduling']) {

                                        $data['repayment_scheduling']['id'] = null;
                                        $data['repayment_scheduling']['loan_id'] = null;
                                        $data['repayment_scheduling']['gracetype'] = null;
                                        $data['repayment_scheduling']['grace_period'] = null;
                                        $data['repayment_scheduling']['interval_method_id'] = null;
                                        $data['repayment_scheduling']['payment_every'] = null;
                                        $data['repayment_scheduling']['internal_type'] = null;
                                        $data['repayment_scheduling']['collect_priciple_interval'] = null;
                                        $data['repayment_scheduling']['installments_constraints_default'] = null;
                                        $data['repayment_scheduling']['first_due_date_default'] = null;
                                        $data['repayment_scheduling']['grace_period_id'] = null;
                                        $data['repayment_scheduling']['collect_principle'] = null;
                                }
                        }
                }

                return  CustomTrait::SuccessJson($data);
        }









        function getById($campaign_id, $role_id)
        {

                $va = OpportunitySetup::select([DB::raw('MAX(steps) AS steps')])->where('activity', '!=', 0)->where(['role' => $role_id, 'opportunity_id' => $campaign_id])->first()->toArray();

                // $oppostep = OpportunitySetup::select('steps')->where(['opportunity_id' => $campaign_id, 'master_id' => 2])->first()->toArray();


                // if ($va['steps'] >= $oppostep['steps']) {

                $data['campaign'] = OpportunitySetup::Leftjoin('campaigns', 'campaigns.id', '=', 'opportunity_setups.opportunity_id')->where(['opportunity_setups.opportunity_id' => $campaign_id, 'opportunity_setups.master_id' => 2])->first(["campaigns.id", "campaigns.product_id", "campaigns.user_id", "campaigns.tagline", "campaigns.share_price", "campaigns.total_valuation", "campaigns.min_investment", "campaigns.max_investment", "campaigns.fundriser_investment", "campaigns.company_bio", "campaigns.reason_to_invest", "campaigns.investment_planning", "campaigns.terms", "campaigns.introduce_team", "campaigns.status", "campaigns.approved_status", "campaigns.note", 'opportunity_setups.role as role_type', 'opportunity_setups.activity', 'opportunity_setups.master_id'])->toArray();




$account_number_credit = anb_accounts::select('account_number')->where(['opportunity_id'=>$campaign_id,'type'=>3])->first();

$account_number_debit = anb_accounts::select('account_number')->where(['opportunity_id'=>$campaign_id,'type'=>4])->first();

if(isset($account_number_credit)){
    $data['campaign']['account_number_credit'] = $account_number_credit['account_number'];
}else{
    $data['campaign']['account_number_credit'] = null;
}

if(isset($account_number_debit)){
 $data['campaign']['account_number_debit'] = $account_number_debit['account_number'];
}else{
    $data['campaign']['account_number_debit'] = null;
}




                $data['campaign_product'] = OpportunitySetup::select('opportunity_setups.role as role_type', 'opportunity_setups.activity', 'opportunity_setups.master_id')->where(['opportunity_setups.opportunity_id' => $campaign_id, 'opportunity_setups.master_id' => 3])->first(["loans.id", "loans.product_id", "loans.opportunity_id", "loans.loan_type_id", "loans.title", "loans.ar_title", "loans.status"])->toArray();

                $data['campaign_pulisher'] = OpportunitySetup::select('opportunity_setups.role as role_type', 'opportunity_setups.activity', 'opportunity_setups.master_id')->where(['opportunity_setups.opportunity_id' => $campaign_id, 'opportunity_setups.master_id' => 4])->first(["loans.id", "loans.product_id", "loans.opportunity_id", "loans.loan_type_id", "loans.title", "loans.ar_title", "loans.status"])->toArray();


                // echo '<pre>';
                // print_r($data);
                // die;


                // $data['campaign'] = campaign::select("id", "product_id", "user_id", "tagline", "share_price", "total_valuation", "min_investment", "max_investment", "fundriser_investment", "company_bio", "reason_to_invest", "investment_planning", "terms", "introduce_team", "status", "approved_status", "note")->where(['id' => $campaign_id, 'status' => 1])->first()->toArray();



                if ($data) {

                        $data['campaign']['campaign_images'] = campaign_image::select("id", "image")->where(['campaign_id' => $campaign_id])->get();
                        $data['campaign']['team'] = campaign_team::select("id", "name", "designation", "image")->where(['campaign_id' => $campaign_id])->get();
                }
                // }



                $opportunityData = campaign::where(['id' => $campaign_id])->first()->toArray();

                $user_id = $opportunityData['user_id'];
                //  die;



                // $opportunity_setup = OpportunitySetup::select('id', 'opportunity_id', 'master_id', 'steps', 'role', 'activity', 'master_type')->where(['opportunity_id' => $campaign_id])->get()->toArray();



                //////////////////////////////////kyc////////////////////////////////////

                //  $kyc=Kyc::select('id')->where('user_id',$user_id)->first()->toArray();


                $user = User::select('role_type', 'kyc_approved_status', 'kyc_note')->where('id', $user_id)->first();
                $id = $user['role_type'];



                $detail = UserKycRole::select('id', 'user_type_id', 'kyc_id')->where('id', $id)->get()->toArray();


                foreach ($detail as $key1 => $val1) {



                        $arrKyc_id = explode(',', $val1['kyc_id']);
                        foreach ($arrKyc_id as $key => $val) {

                                $detail[$key] = Kyc::select('id', 'title', 'ar_title', 'status', 'position')->where(['id' => $val])->first()->toArray();


                                $temp2 = KycDetail::Leftjoin('kyc_info_types', 'kyc_info_types.id', '=', 'kyc_details.info_type')->where(['kyc_details.kyc_id' => $val])->groupBy('kyc_details.info_type')->orderBy('kyc_details.info_type', 'ASC')->orderBy('kyc_details.position', 'ASC')->get(['kyc_details.info_type', 'kyc_info_types.title'])->toArray();


                                $detail[$key]['info_type'] = $temp2;
                                foreach ($detail[$key]['info_type'] as $key2 => $val2) {


                                        $kycdetail = KycDetail::select('id', 'kyc_id', 'type', 'info_type', 'title', 'ar_title', 'status', 'position')->where(['kyc_id' => $val, 'info_type' => $val2['info_type'], 'status' => 1])->orderBy('info_type', 'ASC')->orderBy('position', 'ASC')->get()->toArray();



                                        foreach ($kycdetail as $key3 => $val3) {

                                                $kyc_detail_id = $val3['id'];

                                                $temp = UserKyc::select('value')->where(['kyc_detail_id' => $kyc_detail_id, 'user_id' => $user_id])->first();


                                                if ($temp) {
                                                        $kycdetail[$key3]['value'] = $temp['value'];
                                                } else {
                                                        $kycdetail[$key3]['value'] = null;
                                                }
                                        }


                                        $detail[$key]['info_type'][$key2]['detail'] = $kycdetail;
                                }
                        }
                }







                $data['kyc_kyc_approved_status'] = $user['kyc_approved_status'];
                $data['kyc_kyc_note'] = $user['kyc_note'];

                $data['kyc_setup'] = OpportunitySetup::select('opportunity_setups.role as role_type', 'opportunity_setups.activity', 'opportunity_setups.master_id')->where(['opportunity_setups.opportunity_id' => $campaign_id, 'opportunity_setups.master_id' => 1])->first(["loans.id", "loans.product_id", "loans.opportunity_id", "loans.loan_type_id", "loans.title", "loans.ar_title", "loans.status"])->toArray();

                $data['kyc'] = $detail;

                //////////////////////////////evaluation////////////////////////////////////////



                // $camp_evaluation = evaluations::select('id','evaluation_id','evaluation_detail_id','campaign_id','value')->where(['campaign_id' => $campaign_id])->groupBy('evaluation_id')->get()->toArray();
                // $campaign_id







                $dataoppo = [];
                if(empty($va['steps'])){
                        $va['steps']=0;
                }
                $dataoppo = OpportunitySetup::where(['opportunity_id' => $campaign_id])->Where('steps', '<=', $va['steps'])->get()->toArray();
                $count = count($dataoppo);

                $evaluationData = [];

                foreach ($dataoppo as $key => $val) {

                        if ($val['master_type'] == 1) {



                                $temp = OpportunitySetup::Leftjoin('evaluations', 'evaluations.id', '=', 'opportunity_setups.master_id')->where(['opportunity_setups.opportunity_id' => $campaign_id, 'opportunity_setups.master_id' => $val['master_id']])->first(['evaluations.id', 'evaluations.title', 'evaluations.ar_title', 'evaluations.position', 'evaluations.role_id', 'evaluations.rank_type', 'evaluations.status', 'opportunity_setups.role as role_type', 'opportunity_setups.activity', 'opportunity_setups.master_id'])->toArray();




                                $evaluationData[] = $temp;
                        }
                }


                // echo '<pre>';
                // print_r($evaluationData);
                // echo count($evaluationData);
                // die;




                foreach ($evaluationData as $key => $val) {

                        $evaluation = OpportunitySetup::Leftjoin('evaluations', 'evaluations.id', '=', 'opportunity_setups.master_id')->where(['opportunity_setups.opportunity_id' => $campaign_id, 'opportunity_setups.master_id' => $val['master_id']])->where(['evaluations.id' => $val['id'], 'evaluations.status' => 1])->orderBy('position', 'ASC')->first(['evaluations.id', 'evaluations.title', 'evaluations.ar_title', 'evaluations.position', 'evaluations.role_id', 'evaluations.rank_type', 'evaluations.status', 'opportunity_setups.role as role_type', 'opportunity_setups.activity'])->toArray();



                        // $evaluation = Evaluation::select('id', 'title', 'ar_title', 'position', 'role_id', 'rank_type', 'status')->where(['id' => $val['id'], 'status' => 1])->orderBy('position', 'ASC')->first()->toArray();


                        $evo_category = Evaluation_category::select('id', 'title', 'ar_title', 'minrange', 'maxrange', 'position', 'status')->where(['evp_id' => $val['id']])->orderBy('position', 'ASC')->get()->toArray();





                        foreach ($evo_category as $key1 => $val1) {


                                $camp_evo_safe = Campaign_evaluation::select('value', 'id')
                                        ->where(['evaluation_detail_id' => 0, 'evaluation_cat_id' => $val1['id'], 'campaign_id' => $campaign_id])
                                        ->orderBy('id', 'DESC')->first();


                                $evo_detail = EvaluationDetail::select('id', 'evp_id', 'evo_cat_id', 'title', 'ar_title', 'minrange', 'maxrange', 'position', 'status')->where(['evo_cat_id' => $val1['id']])->orderBy('position', 'ASC')->get()->toArray();


                                foreach ($evo_detail as $key2 => $val2) {

                                        $evaluation_detail_id = $val2['id'];



                                        $temp = Campaign_evaluation::select('value', 'id')
                                                ->where(['evaluation_detail_id' => $evaluation_detail_id, 'campaign_id' => $campaign_id])
                                                ->first();

                                        if ($temp) {

                                                $evo_detail[$key2]['camp_evaluation_id'] = $temp['id'];
                                                $evo_detail[$key2]['value'] = $temp['value'];
                                        } else {
                                                $evo_detail[$key2]['camp_evaluation_id'] = null;
                                                $evo_detail[$key2]['value'] = null;
                                        }
                                }



                                // die;

                                $evo_category[$key1]['detail'] = $evo_detail;



                                if ($camp_evo_safe) {
                                        $evo_category[$key1]['value'] = $camp_evo_safe['value'];
                                }


                                $evaluation['category'] = $evo_category;
                        }



                        $data['evaluation'][$key] = $evaluation;
                }

                // }


                $add_loan = 0;


                // $user_id;


                // $investerCount=campaign_inverter::where(['invester_id'=>$user_id])->get()->count();


                $sumamount = campaign_inverter::where(['campaign_id' => $campaign_id])->get()->sum('amount');

                $total_valuation = $opportunityData['total_valuation'];


                if ($sumamount == $total_valuation) {
                        $add_loan = 1;
                }



                $borrower_statement = borrower_statement::select("id")->where('campaign_id', $campaign_id)->get()->count();



                if ($borrower_statement == 0) {
                        $add_loan = 0;
                }




                $data['add_loan'] = $add_loan;


                /////////////// apply loan /////////////////

                $borrower_statement = borrower_statement::select("id")->where('campaign_id', $campaign_id)->get()->count();



                if ($borrower_statement > 0) {

                        $data['apply_loan_status'] = 1;
                } else {

                        $data['apply_loan_status'] = 0;
                }






                $data['campaign_product'] = OpportunitySetup::select('opportunity_setups.role as role_type', 'opportunity_setups.activity', 'opportunity_setups.master_id')->where(['opportunity_setups.opportunity_id' => $campaign_id, 'opportunity_setups.master_id' => 3])->first(["loans.id", "loans.product_id", "loans.opportunity_id", "loans.loan_type_id", "loans.title", "loans.ar_title", "loans.status"])->toArray();



                $data['campaign_approve'] = OpportunitySetup::select('opportunity_setups.role as role_type', 'opportunity_setups.activity', 'opportunity_setups.master_id')->where(['opportunity_setups.opportunity_id' => $campaign_id, 'opportunity_setups.master_id' => 4])->first(["loans.id", "loans.product_id", "loans.opportunity_id", "loans.loan_type_id", "loans.title", "loans.ar_title", "loans.status"])->toArray();



                ////////////////modify loan ///////////////


                // $oppodata = OpportunitySetup::where(['opportunity_id' => $campaign_id,'master_id'=>2])->first()->toArray();


                // $data['loan'] = loan::select("id", "product_id", "opportunity_id", "loan_type_id", "title", "ar_title", "status")->where(['opportunity_id' => $campaign_id, 'status' => 1])->first();


                $loanstep = OpportunitySetup::select('steps')->where(['opportunity_id' => $campaign_id, 'master_id' => 4])->first()->toArray();


                // if($va['steps'] >= $loanstep['steps']){


                $data['loan'] = OpportunitySetup::Leftjoin('loans', 'loans.opportunity_id', '=', 'opportunity_setups.opportunity_id')->where(['opportunity_setups.opportunity_id' => $campaign_id, 'opportunity_setups.master_id' => 4])->first(["loans.id", "loans.product_id", "loans.opportunity_id", "loans.loan_type_id", "loans.title", "loans.ar_title", "loans.status", 'opportunity_setups.role as role_type', 'opportunity_setups.activity', 'opportunity_setups.master_id'])->toArray();



                // echo '<pre>';
                // print_r($data['campaign']);
                // die;




                if ($data['loan']) {
                        $loan_id = $data['loan']['id'];
                } else {
                        $loan_id = 0;
                }


                if (!$data['loan']) {

                        $data['loan']['id'] = null;
                        $data['loan']['product_id'] = null;
                        $data['loan']['opportunity_id'] = null;
                        $data['loan']['loan_type_id'] = null;
                        $data['loan']['title'] = null;
                        $data['loan']['ar_title'] = null;
                        $data['loan']['status'] = null;
                }


                $data['interest_rate'] = loan_intrest_rate::select("id", "loan_id", "organization_intrest", "fundriser_profit", "intrest_calc_method_id", "accrued_interest_id", "interest_rate_charged_id", "intrest_rate_constraint_default", "funder_intrest_comm_percent")->where(['loan_id' => $loan_id])->first();

                if (!$data['interest_rate']) {

                        $data['interest_rate']['id'] = null;
                        $data['interest_rate']['loan_id'] = null;
                        $data['interest_rate']['organization_intrest'] = null;
                        $data['interest_rate']['fundriser_profit'] = null;
                        $data['interest_rate']['intrest_calc_method_id'] = null;
                        $data['interest_rate']['accrued_interest_id'] = null;
                        $data['interest_rate']['interest_rate_charged_id'] = null;
                        $data['interest_rate']['intrest_rate_constraint_default'] = null;
                        $data['interest_rate']['funder_intrest_comm_percent'] = null;
                }



                $data['repayment_scheduling'] = repayment_scheduling::select(
                        "id",
                        "loan_id",
                        "gracetype",
                        "grace_period",
                        "interval_method_id",
                        "payment_every",
                        "internal_type",
                        "collect_priciple_interval",
                        "installments_constraints_default",
                        "first_due_date_default",
                        "grace_period_id",
                        "collect_principle"
                )->where(['loan_id' => $loan_id])->first();


                if (!$data['repayment_scheduling']) {

                        $data['repayment_scheduling']['id'] = null;
                        $data['repayment_scheduling']['loan_id'] = null;
                        $data['repayment_scheduling']['gracetype'] = null;
                        $data['repayment_scheduling']['grace_period'] = null;
                        $data['repayment_scheduling']['interval_method_id'] = null;
                        $data['repayment_scheduling']['payment_every'] = null;
                        $data['repayment_scheduling']['internal_type'] = null;
                        $data['repayment_scheduling']['collect_priciple_interval'] = null;
                        $data['repayment_scheduling']['installments_constraints_default'] = null;
                        $data['repayment_scheduling']['first_due_date_default'] = null;
                        $data['repayment_scheduling']['grace_period_id'] = null;
                        $data['repayment_scheduling']['collect_principle'] = null;
                }


                // }


                return  CustomTrait::SuccessJson($data);
        }
}
