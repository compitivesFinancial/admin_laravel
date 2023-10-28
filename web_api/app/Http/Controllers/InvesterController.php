<?php

namespace App\Http\Controllers;

use App\Models\Kyc;
use App\Models\loan;
use App\Models\User;
use App\Models\Product;
use App\Models\UserKyc;
use App\Models\campaign;
use App\Models\KycDetail;
use App\Models\Evaluation;
use App\Models\UserKycRole;
use App\Traits\CustomTrait;

use Illuminate\Support\Arr;
use App\Models\Campaign_log;
use Illuminate\Http\Request;
use App\Models\campaign_team;
use App\Models\campaign_image;
use App\Models\Evaluation_log;
use App\Models\Investor_wallet;


use App\Models\EvaluationDetail;
use App\Models\campaign_inverter;
use App\Models\borrower_statement;
use App\Models\investor_statement;
use Illuminate\Routing\Controller;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use App\Models\Campaign_evaluation;
use App\Models\Evaluation_category;
use Illuminate\Support\Facades\App;
use App\Models\repayment_scheduling;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;
use PHPUnit\Framework\Constraint\Count;

class InvesterController extends Controller
{


    function __construct(Request $request)
    {

        App::setLocale($request->header('Accept-Language'));
    }


    function investorStatment(Request $request)
    {
        $investor_id =Crypt::decrypt($request->user()->id);
        $data = DB::table('l_investor_statement')->where('invester_id', $investor_id)
            ->join('campaigns', 'campaigns.id', '=', 'l_investor_statement.campaign_id')
            ->select('l_investor_statement.*', 'campaigns.tagline', 'campaigns.version_number', 'campaigns.program_number')
            ->get();

        $count = Count($data);
        if ($count == 0) {
            $data = ["message" => "no details for this user"];
            return CustomTrait::ErrorJson($data);
        } else {

            return CustomTrait::SuccessJson($data);
        }
    }
    function investorCampaignStatment(Request $request,$campaign_id)
    {
        $investor_id =Crypt::decrypt($request->user()->id);
        $investor_statment = investor_statement::where(['campaign_id' => $campaign_id, 'invester_id' => $investor_id])->get();
        $count = Count($investor_statment);

        if ($count == 0) {
            $data = ["message" => "no details for this user"];
            return CustomTrait::ErrorJson($data);
        } else {
            return CustomTrait::SuccessJson($investor_statment);
        }
    }
    function walletSumInvestor(Request $request)
    {

        // $investor_id =$id;
        $investor_id =$request->user()->id;
        $investor_wallet_debit = Investor_wallet::where('investor_id', $investor_id)->sum('debit_amount');
        $investor_wallet_credit = Investor_wallet::where('investor_id', $investor_id)->sum('credit_amount');
        if ($investor_wallet_debit == null) {
            $investor_wallet_debit = 0;
        }
        if ($investor_wallet_credit == null) {
            $investor_wallet_credit = 0;
        }
        $investor_wallet = [
            'debit' => $investor_wallet_debit,
            'credit' => $investor_wallet_credit,
            'walletBalance' => $investor_wallet_credit - $investor_wallet_debit
        ];
        return CustomTrait::SuccessJson($investor_wallet);
    }

    function investorWallet($investor_id)
    {
        // $investor_id = $request->user()->id;

        $id_enc= $investor_id;
        $id=Crypt::decrypt($id_enc);

        $investor_wallet = Investor_wallet::where('investor_id', $id)->get();
        $count = Count($investor_wallet);
        if ($count == 0) {
            $data = ['data' => 'there is no anything in your wallet'];
            return CustomTrait::ErrorJson($data);
        } else {
            if ($investor_wallet[0]->opportunity_id == 0) {
                $investor_wallet[0]->opportunity_id = "ايداع شيكات";
                return CustomTrait::SuccessJson($investor_wallet);
            } else {
                return CustomTrait::SuccessJson($investor_wallet);
            }
        }
    }




    function investordashboard(Request $req)
    {
        $id=Crypt::decrypt($req->user_id);
        $investor_statement = investor_statement::where('invester_id', $req->user_id)->get()->toArray();
        $count = count($investor_statement);

        if ($count == 0) {

            $data = [
                'message' => "No Data Found."
            ];
            return CustomTrait::ErrorJson($data);
        }


        $total_investment = investor_statement::where('invester_id', $id)->first()->sum('principle');
        $total_profit = investor_statement::where('invester_id', $id)->first()->sum('profit');

        $dashData['data']['investor_id'] = Crypt::encrypt($id);
        $dashData['data']['number_of_investment'] = $count;
        $dashData['data']['total_investment'] = $total_investment;
        $dashData['data']['total_profit'] = $total_profit;

        return CustomTrait::SuccessJson($dashData);
    }


    public function investerWallet(Request $request)
    {

       $user_id=Crypt::decrypt($request->user_id);
        $investerCount = campaign_inverter::select('id', 'campaign_id', 'invester_id', 'amount as invested_amount', 'created_at as invested_date')->where(['invester_id' => $user_id])->get()->toArray();


        foreach ($investerCount as $key => $val) {

            $campaign_id = $val['campaign_id'];

            $campaigndata = campaign::select("id", "tagline")->where(['id' => $campaign_id, 'status' => 1])->first()->toArray();

            $investor_statement = investor_statement::where(['campaign_id' => $campaign_id, 'invester_id' =>  $user_id])->get()->toArray();

            $investerCount[$key]['campaign_name'] = $campaigndata['tagline'];
            $investerCount[$key]['investor_statement'] = $investor_statement;
        }



        return CustomTrait::SuccessJson($investerCount);
    }


    public function userdetail(Request $request)
    {

        $id=Crypt::decrypt($request->id);
        $data = User::find($request->id);

        $dd = explode(' ', $data['name']);

        $lastname = '';
        if (isset($dd[1])) {
            $lastname = $dd[1];
        }
        $arr['first_name'] = $dd[0];
        $arr['last_name'] = $lastname;
        $arr['email'] = $data['email'];
        $arr['country_code'] = $data['country_code'];
        $arr['mobile_number'] = $data['mobile_number'];
        $arr['kyc_approved_status'] = $data['kyc_approved_status'];
        $arr['role_type'] = $data['role_type'];
        $arr['status'] = $data['status'];


        return CustomTrait::SuccessJson($arr);
    }



    function investerOpportunityDetail($campaign_id)
    {

        $sql_var = $this->lang == 'en' ? 'title' : 'ar_title as title';

        $id=Crypt::decrypt($campaign_id);

        $data['campaign'] = campaign::select("id", "user_id", "tagline", "share_price", "total_valuation", "min_investment", "max_investment", "fundriser_investment", "company_bio", "reason_to_invest", "investment_planning", "terms", "introduce_team", "status", "approved_status", "note")->where(['id' => $campaign_id, 'status' => 1])->first()->toArray();



        if ($data) {


            $data['campaign']['campaign_images'] = campaign_image::select("id", "image")->where(['campaign_id' => $id])->get();
            $data['campaign']['team'] = campaign_team::select("id", "name", "designation", "image")->where(['campaign_id' => $campaign_id])->get();
        }



        $user_id = $data['campaign']['user_id'];
        //  die;



        //////////////////////////////////////////////////////////////////////

        //  $kyc=Kyc::select('id')->where('user_id',$user_id)->first()->toArray();


        $user = User::select('role_type', 'kyc_approved_status', 'kyc_note')->where('id', $user_id)->first();
        $id = $user['role_type'];


        $detail = UserKycRole::select('id', 'user_type_id', 'kyc_id')->where('id', $id)->get()->toArray();


        foreach ($detail as $key1 => $val1) {


            $arrKyc_id = explode(',', $val1['kyc_id']);
            foreach ($arrKyc_id as $key => $val) {

                $detail[$key] = Kyc::select('id', $sql_var, 'status', 'position')->where(['id' => $val])->first()->toArray();


                $temp2 = KycDetail::Leftjoin('kyc_info_types', 'kyc_info_types.id', '=', 'kyc_details.info_type')->where(['kyc_details.kyc_id' => $val])->groupBy('kyc_details.info_type')->orderBy('kyc_details.info_type', 'ASC')->orderBy('kyc_details.position', 'ASC')->get(['kyc_details.info_type', "kyc_info_types.$sql_var"])->toArray();


                $detail[$key]['info_type'] = $temp2;
                foreach ($detail[$key]['info_type'] as $key2 => $val2) {




                    $kycdetail = KycDetail::select('id', 'kyc_id', 'type', 'info_type', $sql_var, 'status', 'position')->where(['kyc_id' => $val, 'info_type' => $val2['info_type'], 'status' => 1])->orderBy('info_type', 'ASC')->orderBy('position', 'ASC')->get()->toArray();



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



        $evaluationData = Evaluation::select('id', $sql_var, 'position', 'role_id', 'rank_type', 'status')->where(['status' => 1])->orderBy('position', 'ASC')->get()->toArray();




        foreach ($evaluationData as $key => $val) {

            $evaluation = Evaluation::select('id', $sql_var, 'position', 'role_id', 'rank_type', 'status')->where(['id' => $val['id'], 'status' => 1])->orderBy('position', 'ASC')->first()->toArray();


            $evo_category = Evaluation_category::select('id', $sql_var, 'minrange', 'maxrange', 'position', 'status')->where(['evp_id' => $val['id']])->orderBy('position', 'ASC')->get()->toArray();





            // echo '<pre>';
            // print_r($camp_evo_safe);
            // die;





            foreach ($evo_category as $key1 => $val1) {


                $camp_evo_safe = Campaign_evaluation::select('value', 'id')
                    ->where(['evaluation_detail_id' => 0, 'evaluation_cat_id' => $val1['id'], 'campaign_id' => $campaign_id])
                    ->orderBy('id', 'DESC')->first();


                $evo_detail = EvaluationDetail::select('id', 'evp_id', 'evo_cat_id', $sql_var, 'minrange', 'maxrange', 'position', 'status')->where(['evo_cat_id' => $val1['id']])->orderBy('position', 'ASC')->get()->toArray();


                // echo '<pre>';
                // print_r($evo_detail);
                // die;

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


        // echo '<pre>';
        // print_r($data->toArra);
        // die;


        ///////////////////////////////////loan management//////////////////////////////////////////////
        // $investor_statement = investor_statement::where(['campaign_id'=>$campaign_id,'invester_id'=>$user_id])->get()->toArray();

        $investor_statement = investor_statement::where(['campaign_id' => $campaign_id])->get()->toArray();

        $data['investor_statement'] = $investor_statement;
        return CustomTrait::SuccessJson($data);
    }




    function KycDetail()
    {


        $sql_var = $this->lang == 'en' ? 'title' : 'ar_title as title';
        $id = Crypt::decrypt(auth('sanctum')->user()->id);
        $data = User::select('role_type', 'kyc_approved_status', 'kyc_note')->where('id', $id)->first();
        $role_type = $data['role_type'];


        $detail = UserKycRole::select('id', 'user_type_id', 'kyc_id')->where('id', $role_type)->get()->toArray();



        foreach ($detail as $key1 => $val1) {



            $arrKyc_id = explode(',', $val1['kyc_id']);
            foreach ($arrKyc_id as $key => $val) {

                $detail[$key] = Kyc::select('id', $sql_var, 'status', 'position')->where(['id' => $val])->first()->toArray();


                $temp2 = KycDetail::Leftjoin('kyc_info_types', 'kyc_info_types.id', '=', 'kyc_details.info_type')->where(['kyc_details.kyc_id' => $val])->groupBy('kyc_details.info_type')->orderBy('kyc_details.info_type', 'ASC')->orderBy('kyc_details.position', 'ASC')->get(['kyc_details.info_type', "kyc_info_types.$sql_var"])->toArray();


                $detail[$key]['info_type'] = $temp2;
                foreach ($detail[$key]['info_type'] as $key2 => $val2) {


                    $kycdetail = KycDetail::select('id', 'kyc_id', 'type', 'info_type', $sql_var, 'status', 'position')->where(['kyc_id' => $val, 'info_type' => $val2['info_type'], 'status' => 1])->orderBy('info_type', 'ASC')->orderBy('position', 'ASC')->get()->toArray();



                    foreach ($kycdetail as $key3 => $val3) {

                        $kyc_detail_id = $val3['id'];

                        $temp = UserKyc::select('value', 'id')->where(['kyc_detail_id' => $kyc_detail_id, 'user_id' => $id])->orderBy('id', 'DESC')->first();


                        if ($temp) {
                            $kycdetail[$key3]['user_kyc_id'] = $temp['id'];
                            $kycdetail[$key3]['value'] = $temp['value'];
                        } else {
                            $kycdetail[$key3]['user_kyc_id'] = null;
                            $kycdetail[$key3]['value'] = null;
                        }
                    }


                    $detail[$key]['info_type'][$key2]['detail'] = $kycdetail;
                }
            }
        }


        $dataa['kyc'] = $detail;
        $dataa['kyc_approved_status'] = $data['kyc_approved_status'];
        $dataa['kyc_note'] = $data['kyc_note'];


        return CustomTrait::SuccessJson($dataa);
    }
}
