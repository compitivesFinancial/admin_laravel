<?php

namespace App\Http\Controllers;

use App\Traits\CustomTrait;
use Illuminate\Http\Request;
use App\Models\campaign;
use App\Models\campaign_team;
use App\Models\campaign_image;
use App\Models\borrower_statement;
use App\Models\Borrower_wallet;
use App\Models\investor_statement;
use App\Models\User;
use App\Models\UserKycRole;
use App\Models\Kyc;
use App\Models\KycDetail;
use App\Models\UserKyc;
use App\Models\Evaluation;
use App\Models\EvaluationDetail;
use App\Models\Evaluation_category;
use App\Models\Campaign_evaluation;


use Illuminate\Support\Facades\Auth;
use PHPUnit\Framework\Constraint\Count;

class BorrowerController extends Controller
{


    function __construct(Request $request)
    {

        $this->lang = $request->header('Accept-Language');

    }

    function walletSumBorrower(Request $request)
    {

        $borrower_id = $request->user()->id;
        $borrower_wallet_debit = Borrower_wallet::where('borrower_id',$borrower_id)->sum('debit_amount');
        $borrower_wallet_credit = Borrower_wallet::where('borrower_id',$borrower_id)->sum('credit_amount');
        $borrower_wallet_debit;
        $borrower_wallet_credit;
        if ($borrower_wallet_debit == null  || $borrower_wallet_credit == null) {
            $data = [
                'data' => 'there is no anything in your wallet',
            ];
            return CustomTrait::ErrorJson($data);
        } else {

            $borrower_wallet=[
                'debit'=>$borrower_wallet_debit,
                'credit'=>$borrower_wallet_credit
            ];
            return CustomTrait::SuccessJson($borrower_wallet);
        }
    }
    public function borrowerStatment(Request $request)
    {
        $borrower_id = $request->user()->id;
        $campaign = campaign::where('user_id', $borrower_id)->get();
        $campaign_count = Count($campaign);
        if ($campaign_count == 0) {
            $data = ['message' => 'there is no campagin for this user'];
        } else {
            $campaign_id = [];
            for ($i = 0; $i < $campaign_count; $i++) {
                $campaign = campaign::where('user_id', $borrower_id)->get();
                $campaign_id[] = $campaign[$i]['id'];
                $borrow_statment = borrower_statement::whereIn('campaign_id', $campaign_id)->get();

            }

            return CustomTrait::SuccessJson($borrow_statment);

        }


    }

    function borroweWallet(Request $request)
    {
        $borrower_id = $request->user()->id;
        $wallet = Borrower_wallet::where('borrower_id', $borrower_id)->get();
        $count = Count($wallet);
        if ($count == 0) {
            $data = ['data' => 'there is no wallet '];
            return CustomTrait::ErrorJson($data);
        } else {
            return CustomTrait::SuccessJson($wallet);
        }
    }


    function borrowerdashboard(Request $req)
    {

        $id = $req->user_id;


        $campaign = campaign::select("id")->where(['user_id' => $id, 'status' => 1])->get()->toArray();
        $opportunity_count = count($campaign);

        $active_opportunity_count = 0;



        foreach ($campaign as $key => $val) {

            $active_opportunity = investor_statement::where('campaign_id', $val['id'])->groupBy('campaign_id')->get()->count();

            $active_opportunity_count += $active_opportunity;
        }


        $dashData['data']['borrower_id'] = $req->user_id;
        $dashData['data']['no_of_opportunity'] = $opportunity_count;
        $dashData['data']['active_opportunity'] = $active_opportunity_count;
        $dashData['data']['rejected_opportunity'] = 0;


        return CustomTrait::SuccessJson($dashData);
    }




    public function borrowerWallet(Request $request)
    {


        $id = auth('sanctum')->user()->id;



        $borrower = campaign::select("id", "user_id", "tagline", "share_price", "total_valuation", "min_investment", "max_investment", "fundriser_investment", "company_bio", "reason_to_invest", "investment_planning", "terms", "introduce_team", "status", "approved_status", "note")->where(['user_id' => $id, 'status' => 1])->get()->toArray();


        foreach ($borrower as $key => $val) {

            $campaign_id = $val['id'];

            $borrower_statement = borrower_statement::where('campaign_id', $campaign_id)->get()->toArray();

            $borrower[$key]['borrower_statement'] = $borrower_statement;
        }


        return CustomTrait::SuccessJson($borrower);
    }



    public function userdetail(Request $request)
    {

        $data = User::find($request->id);

        $dd = explode(' ', $data['name']);



        $lastname = '';
        if (isset($dd[1])) {
            $lastname = $dd[1];
        }

        $arr['id'] = $data['id'];
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



    function opportunityDetail($campaign_id)
    {


        $sql_var = $this->lang == 'en' ? 'title' : 'ar_title as title';

        $data['campaign'] = campaign::select("id", "user_id", "tagline", "share_price", "total_valuation", "min_investment", "max_investment", "fundriser_investment", "company_bio", "reason_to_invest", "investment_planning", "terms", "introduce_team", "status", "approved_status", "note")->where(['id' => $campaign_id, 'status' => 1])->first()->toArray();



        if ($data) {


            $data['campaign']['campaign_images'] = campaign_image::select("id", "image")->where(['campaign_id' => $campaign_id])->get();
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



        // $data['kyc_kyc_approved_status'] = $user['kyc_approved_status'];
        // $data['kyc_kyc_note'] = $user['kyc_note'];
        // $data['kyc'] = $detail;

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////




        // $camp_evaluation = evaluations::select('id','evaluation_id','evaluation_detail_id','campaign_id','value')->where(['campaign_id' => $campaign_id])->groupBy('evaluation_id')->get()->toArray();

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



                // die;

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


        $borrower_statement = borrower_statement::select("id", "campaign_id", "due_date", "principle_expected", "interest_expected", "fees_expected", "total_expected", "principle_paid", "interest_paid", "fees_paid", "total_paid", "paid_date", "principle_due", "interest_due", "fees_due", "total_due", "status")->where('campaign_id', $campaign_id)->get()->toArray();

        $data['borrower_statement'] = $borrower_statement;

        return CustomTrait::SuccessJson($data);
    }




    function KycDetail()
    {

        $sql_var = $this->lang == 'en' ? 'title' : 'ar_title as title';

        $id = auth('sanctum')->user()->id;
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
