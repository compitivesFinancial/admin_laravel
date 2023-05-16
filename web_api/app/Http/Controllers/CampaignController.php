<?php

namespace App\Http\Controllers;


use App\Models\Cms;
use App\Models\loan;
use App\Models\Page;
use App\Models\Product;
use App\Models\campaign;
use App\Models\UserKyc;
use App\Traits\CustomTrait;
use App\Models\Campaign_log;
use Illuminate\Http\Request;
use App\Models\campaign_team;
use App\Models\campaign_image;
use App\Models\campaign_inverter;
use App\Models\campaign_attachment;

use App\Models\borrower_statement;
use App\Models\Contact_us;
use App\Models\investor_statement;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Log;
use Illuminate\Foundation\Auth\User;

use Exception;
use Illuminate\Support\Facades\DB;

class CampaignController extends Controller
{
    function __construct(Request $request)
    {
        $this->lang = $request->header('Accept-Language');
        App::setlocale($request->header('Accept-Language'));

    }







    public function campaginOutSide()
    {
        $outside = campaign::get();
        return CustomTrait::SuccessJson($outside);
    }

    public function homePageApi()
    {


        // $sql_var = App::isLocal() == 'en' ? 'title' : 'ar_title as title';
        // $sql_descp = App::isLocal() == 'en' ? 'description' : 'ar_description as description';
        // $sql_image = App::isLocal() == 'en' ? 'image' : 'ar_image as image';

        $sql_var = $this->lang == 'en' ? 'title' : 'ar_title as title';
        $sql_descp = $this->lang == 'en' ? 'description' : 'ar_description as description';
        $sql_image = $this->lang == 'en' ? 'image' : 'ar_image as image';


        $section0 = Cms::select('id', $sql_var, $sql_descp, 'status', 'type', $sql_image, 'flag')->where(['type' => 0, 'status' => 1])->orderBy('id', 'ASC')->get()->toArray();


        $section1 = Cms::select('id', $sql_var, $sql_descp, 'status', 'type', $sql_image, 'flag')->where(['type' => 1, 'status' => 1])->orderBy('id', 'ASC')->get()->toArray();

        $section2 = Cms::select('id', $sql_var, $sql_descp, 'status', 'type', $sql_image, 'flag')->where(['id' => 18, 'status' => 1])->orderBy('id', 'ASC')->first()->toArray();

        $section3 = Cms::select('id', $sql_var, $sql_descp, 'status', 'type', $sql_image, 'flag')->where(['type' => 3, 'status' => 1])->orderBy('id', 'ASC')->get()->toArray();

        $section4 = Cms::select('id', $sql_var, $sql_descp, 'status', 'type', $sql_image, 'flag')->where(['type' => 4, 'status' => 1])->orderBy('id', 'ASC')->get()->toArray();

        $section5 = Cms::select('id', $sql_var, $sql_descp, 'status', 'type', $sql_image, 'flag')->where(['type' => 5, 'status' => 1])->orderBy('id', 'ASC')->get()->toArray();


        $section6 = Cms::select('id', $sql_var, $sql_descp, 'status', 'type', $sql_image, 'flag')->where(['type' => 6, 'status' => 1])->orderBy('id', 'ASC')->get()->toArray();

        $section7 = Cms::select('id', $sql_var, $sql_descp, 'status', 'type', $sql_image, 'flag')->where(['type' => 7, 'status' => 1])->orderBy('id', 'ASC')->get()->toArray();

        $total_traised = campaign_inverter::get()->sum('amount');
        $investors = campaign_inverter::distinct()->count('invester_id');
        $campaign = campaign::where('status', 1)->count('id');



        $total_raisaed['projects'] = $campaign;
        $total_raisaed['total_raised'] = $total_traised;
        $total_raisaed['investors'] = $investors;


        $section11 = $total_raisaed;

        $sql_title = App::isLocal() == 'en' ? 'title' : 'ar_title';

        $product = Product::select('id', $sql_title)->where('status', 1)->orderBy('position', 'ASC')->get()->toArray();


        foreach ($product as $key => $val) {

            $id = $val['id'];


            $sql = "select

            (select GROUP_CONCAT(productattributedetails.$sql_title) as title from productattributedetails left join product_attributes
            ON productattributedetails.product_attribute_id = product_attributes.id
            where find_in_set(productattributedetails.id ,replace(product_details.product_attribute_detail_id,' ','')) order by product_attributes.position) AS 'value'

            from product_details where product_details.product_id = $id group by id,product_id,product_attribute_id,product_attribute_detail_id ";


            $info = DB::select(DB::raw($sql));
            $product[$key]['product_attribute_detail'] = json_decode(json_encode($info), true);

        }



        $section8 = Cms::select('id', $sql_var, $sql_descp, 'status', 'type', $sql_image, 'flag')->where(['type' => 8, 'status' => 1])->orderBy('id', 'ASC')->get()->toArray();



        $section9 = Cms::select('id', $sql_var, $sql_descp, 'status', 'type', $sql_image, 'flag')->where(['type' => 9, 'status' => 1])->orderBy('id', 'ASC')->get()->toArray();


        $data['section0'] = $section0;
        $data['section1'] = $section1;
        $data['section2'] = $section2;
        $data['section3'] = $section3;
        $data['section4'] = $section4;
        $data['section5'] = $section5;
        $data['section6'] = $section6;
        $data['section7'] = $section7;

        $data['section10'] = $product;



        $data['section8'] = $section8;
        $data['section9'] = $section9;



        //$data['section10'] = $section10;
        $data['section11'] = $section11;





        return CustomTrait::SuccessJson($data);
    }




    public function footer()
    {

        $sql_var = App::isLocal() == 'en' ? 'title' : 'ar_title as title';
        $sql_descp = App::isLocal() == 'en' ? 'description' : 'ar_description as description';


        $data = Page::select(
            'id',
            $sql_var,
            $sql_descp,
            'pages_type_id as type',
            'status',
            'position'
        )->where('status', 1)->orderBy('position', 'ASC')->get()->toArray();


        return CustomTrait::SuccessJson($data);


    }





    public function contactUs(Request $req)
    {

        // try {

        $page = new Contact_us();
        $page->first_name = $req->first_name;
        $page->last_name = $req->last_name;
        $page->email = $req->email;
        $page->mobile = $req->mobile;
        $page->message = $req->message;

        $page->save();

        // } catch (Exception $e) {

        //     Log::channel('product')->info($e->getMessage());

        // $data = [
        //     'message' => "something went wronge"
        // ];

        // return  CustomTrait::ErrorJson($data);
        // }

        $data = [
            'message' => "Added successfully."
        ];

        return CustomTrait::SuccessJson($data);

    }




    function totalRaised()
    {

        $total_traised = campaign_inverter::get()->sum('amount');
        $investors = campaign_inverter::distinct()->count('invester_id');
        $campaign = campaign::where('status', 1)->count('id');



        $data['projects'] = $campaign;
        $data['total_raised'] = $total_traised;
        $data['investors'] = $investors;


        return CustomTrait::SuccessJson($data);

    }








    function investerStatement(Request $req)
    {


        $investor_statement = investor_statement::where('campaign_id', $req->campaign_id)->get()->toArray();
        $count = count($investor_statement);



        if ($count == 0) {

            $data = [
                'message' => "No Data Found."
            ];
            return CustomTrait::ErrorJson($data);

        }
        return CustomTrait::SuccessJson($investor_statement);

    }



    function borrowerStatement(Request $req)
    {

        $campaign = campaign::where('user_id', $req->user_id)->first()->toArray();

        if (!$campaign) {

            $data = [
                'message' => "No Data Found"
            ];
            return CustomTrait::ErrorJson($data);


        }

        $campaign_id = $campaign['id'];





        $data = borrower_statement::select("id", "campaign_id", "due_date", "principle_expected", "interest_expected", "fees_expected", "total_expected", "principle_paid", "interest_paid", "fees_paid", "total_paid", "paid_date", "principle_due", "interest_due", "fees_due", "total_due", "status")->where('campaign_id', $campaign_id)->get()->toArray();




        if (empty($data)) {

            $data = [
                'message' => "No Data Found"
            ];
            return CustomTrait::ErrorJson($data);


        }



        return CustomTrait::SuccessJson($data);
    }



    function borrowerpayLoan(Request $req)
    {

        $campaign = campaign::where('user_id', $req->user_id)->first()->toArray();


        if (!$campaign) {

            $data = [
                'message' => "No Data Found"
            ];
            return CustomTrait::ErrorJson($data);


        }



        $date = date('Y-m-d');


        // $campaign_id = $campaign['id'];
        // $product_id = $campaign['product_id'];


        // $loandata=loan::select("id","loan_type_id")->where('product_id',$product_id)->first()->toArray();


        // $databorrow = borrower_statement::select("id","campaign_id","due_date","principle_expected","interest_expected","fees_expected","total_expected","principle_paid","interest_paid","fees_paid","total_paid","paid_date","principle_due","interest_due","fees_due","total_due","status")->where('campaign_id',$campaign_id)->get()->toArray();


        // if(!$databorrow){
        //   $data = [
        //     'message' => "Not applied for loan"
        //   ];
        //   return  CustomTrait::ErrorJson($data);
        // }





        // $getDate = borrower_statement::select("due_date")->where('due_date', '>=', $date)->where('campaign_id',$campaign_id)->orderBy('due_date', 'ASC')->first()->toArray();




        // $repayment_scheduling=repayment_scheduling::where('loan_id',$loandata['id'])->first()->toArray();
        // $duedateOffset = $repayment_scheduling['first_due_date_default'];

        // $due_date = $getDate['due_date'];
        // $due_date_start = date('Y-m-d', strtotime($due_date . " -1 month"));

        // $checkpay = borrower_statement::select("id","campaign_id","due_date","principle_expected","interest_expected","fees_expected","total_expected","principle_paid","interest_paid","fees_paid","total_paid","paid_date","principle_due","interest_due","fees_due","total_due","status")->where(['campaign_id'=>$campaign_id])->whereNotNull('total_paid')->where('due_date', '>', $due_date_start)->where('due_date', '<=', $due_date)->orderBy('due_date', 'DESC')->first();

        // if($checkpay){

        //         $data = [
        //                 'message' => "Payment alredy done."
        //         ];

        //         return  CustomTrait::ErrorJson($data);

        // }


        // $dataCount = borrower_statement::select("id","campaign_id","due_date","principle_expected","interest_expected","fees_expected","total_expected","principle_paid","interest_paid","fees_paid","total_paid","paid_date","principle_due","interest_due","fees_due","total_due","status")->where(['campaign_id'=>$campaign_id])->where('due_date', '>=', $due_date_start)->where('due_date', '<=', $due_date)->orderBy('due_date', 'DESC')->first()->toArray();



        // $paymeny_date = date('Y-m-d');
        // $borrower = borrower_statement::find($dataCount['id']);
        // $borrower->principle_paid =  $dataCount['principle_expected'];
        // $borrower->interest_paid = $dataCount['interest_expected'];
        // $borrower->total_paid =  $dataCount['total_expected'];
        // $borrower->paid_date = $paymeny_date;
        // $borrower->status = 1;
        // $borrower->save();

        ////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////




        $checkpay = borrower_statement::select("id", "campaign_id", "due_date", "principle_expected", "interest_expected", "fees_expected", "total_expected", "principle_paid", "interest_paid", "fees_paid", "total_paid", "paid_date", "principle_due", "interest_due", "fees_due", "total_due", "status")->where(['id' => $req->id])->whereNotNull('total_paid')->first();

        if ($checkpay) {

            $data = [
                'message' => "Payment alredy done."
            ];

            return CustomTrait::ErrorJson($data);

        }


        $dataCount = borrower_statement::select("id", "campaign_id", "due_date", "principle_expected", "interest_expected", "fees_expected", "total_expected", "principle_paid", "interest_paid", "fees_paid", "total_paid", "paid_date", "principle_due", "interest_due", "fees_due", "total_due", "status")->where(['id' => $req->id])->first()->toArray();



        $paymeny_date = date('Y-m-d');

        try {

            $borrower = borrower_statement::find($dataCount['id']);
            $borrower->principle_paid = $dataCount['principle_expected'];
            $borrower->interest_paid = $dataCount['interest_expected'];
            $borrower->total_paid = $dataCount['total_expected'];
            $borrower->paid_date = $paymeny_date;
            $borrower->status = 1;
            $borrower->save();


        } catch (Exception $e) {

            Log::channel('campaign')->info($e->getMessage());

            $data = [
                'message' => "something went wronge"
            ];
            return CustomTrait::ErrorJson($data);
        }



        $data = [
            'message' => "Payment done."
        ];
        return CustomTrait::SuccessJson($data);


    }













    function invest(Request $req)
    {


        $session_user_id = $req->user()->id;
        $amount = $req->header('amount');
        $investor = $req->header('invester');
        $campaign = $req->header('campaign');
        // $data = [
        //     'message' => "Investor is = " . $investor . " / invest amount of  " .  $amount . " /in the campain Id  " . $campaign
        // ];
        // return CustomTrait::ErrorJson($data);

        // return "Investor is = "+$investor + " / invest amount of  "+ $amount + " /in the campain Id  "+ $campaign;
        $data = campaign::where('id', $campaign)->first()->toArray();



        if ($amount < $data['min_investment'] || $amount > $data['max_investment']) {

            $data = [
                'message' => "Please insert Amount between " . $data['min_investment'] . " to " . $data['max_investment']
            ];
            return CustomTrait::ErrorJson($data);

        }


        $investerCount = campaign_inverter::where(['campaign_id' => $campaign, 'invester_id' => $session_user_id])->get()->count();

        $sumamount = campaign_inverter::where(['campaign_id' => $campaign])->get()->sum('amount');





        if ($investerCount > 0) {

            $data = [
                'message' => "You have already done your investment"
            ];
            return CustomTrait::ErrorJson($data);

        }



        $checkAmount = $amount + $sumamount;




        if ($checkAmount > $data['total_valuation']) {

            $data = [
                'message' => "PLease enter amount below limit"
            ];
            return CustomTrait::ErrorJson($data);

        }


        try {

            $campaignObj = new campaign_inverter;
            $campaignObj->campaign_id = $campaign;
            $campaignObj->invester_id = $session_user_id;
            $campaignObj->amount = $amount;
            $campaignObj->save();


        } catch (Exception $e) {

            Log::channel('campaign')->info($e->getMessage());

            $data = [
                'message' => "something went wronge"
            ];
            return CustomTrait::ErrorJson($data);
        }


        $type = 8;
        $user_id = $session_user_id;


        // invest email
        CustomTrait::sendMailHtml($user_id, $type);



        $data = [
            'message' => "Investment Successfull."
        ];
        return CustomTrait::SuccessJson($data);




    }





    function userCampaign($id)
    {


        // $investerCount = campaign_inverter::select('id', 'campaign_id', 'invester_id', 'amount as invested_amount', 'created_at as invested_date')->where(['invester_id' => $id])->first();
        // $investerCount = campaign_inverter::select('campaign_id')->where(['invester_id' => $id]);
        $investerCount = campaign_inverter::where('invester_id', $id)->get()->toArray();

// return $investerCount;
// return CustomTrait::SuccessJson($investerCount);
        $data = campaign::select("id", "user_id", "tagline", "share_price", "total_valuation", "min_investment", "max_investment", "fundriser_investment", "company_bio", "reason_to_invest", "investment_planning", "terms", "introduce_team", "status")->whereIn('id', $investerCount)->get()->toArray();
        return CustomTrait::SuccessJson($data);

    }

    function userCampaignborrower($id)
    {


        $data = campaign::where('user_id', $id)->get()->toArray();
        return CustomTrait::SuccessJson($data);


    }



    function insert(Request $req)
    {

        $session_user_id = auth('sanctum')->user()->id;

        $campaign = new campaign;

        $campaign->user_id = $session_user_id;
        $campaign->tagline = $req->tagline;
        $campaign->share_price = $req->share_price;
        $campaign->total_valuation = $req->total_valuation;
        $campaign->min_investment = $req->min_investment;
        $campaign->max_investment = $req->max_investment;
        $campaign->fundriser_investment = $req->fundriser_investment;
        $campaign->company_bio = $req->company_bio;
        $campaign->reason_to_invest = $req->reason_to_invest;
        $campaign->investment_planning = $req->investment_planning;
        $campaign->terms = $req->terms;
        $campaign->introduce_team = $req->introduce_team;
        $campaign->save();
        $camp_id = $campaign->id;


        foreach ($req->campaign_images as $key => $val) {


            $img = new campaign_image;
            $img->image = $val['image'];
            $img->campaign_id = $camp_id;
            $img->save();


        }



        foreach ($req->team as $key => $val) {

            try {

                $team = new campaign_team;
                $team->name = $val['name'];
                $team->campaign_id = $camp_id;
                $team->designation = $val['designation'];
                $team->image = $val['image'];
                $team->save();

            } catch (Exception $e) {

                Log::channel('campaign')->info($e->getMessage());

                $data = [
                    'message' => "something went wronge"
                ];
                return CustomTrait::ErrorJson($data);
            }


        }



        $Campaign_log = new Campaign_log;
        $Campaign_log->activity_by = $session_user_id;
        $Campaign_log->campaign_id = $camp_id;
        $Campaign_log->activity_type = 1;
        $Campaign_log->save();


        $type = 7;
        $user_id = $session_user_id;


        CustomTrait::sendMailHtml($user_id, $type);


        $data = [
            'message' => "Added Successfully."
        ];
        return CustomTrait::SuccessJson($data);



    }






    function list(Request $req)
    {
        $data = campaign::where(['status' => 1, 'approved_status' => 1])->get()->toArray();
        return CustomTrait::SuccessJson($data);
    }












    function getById($id)
    {

        // echo 'gdggddg';
        // die;

        $data = campaign::where(['id' => $id, 'status' => 1])->first();

        if ($data) {


            $data['campaign_images'] = campaign_image::where(['campaign_id' => $id])->get();
            $data['team'] = campaign_team::where(['campaign_id' => $id])->get();

            return CustomTrait::SuccessJson($data);

        } else {


            $data = [
                'message' => "No Data"
            ];

            return CustomTrait::ErrorJson($data);


        }



    }





    function update(Request $req)
    {

        $session_user_id = auth('sanctum')->user()->id;

        $campaign = campaign::find($req->id);
        $campaign->user_id = $session_user_id;
        $campaign->tagline = $req->tagline;
        $campaign->share_price = $req->share_price;
        $campaign->total_valuation = $req->total_valuation;
        $campaign->min_investment = $req->min_investment;
        $campaign->max_investment = $req->max_investment;
        $campaign->fundriser_investment = $req->fundriser_investment;
        $campaign->company_bio = $req->company_bio;
        $campaign->reason_to_invest = $req->reason_to_invest;
        $campaign->investment_planning = $req->investment_planning;
        $campaign->terms = $req->terms;
        $campaign->introduce_team = $req->introduce_team;
        $campaign->save();
        $camp_id = $req->id;


        foreach ($req->campaign_images as $key => $val) {

            if (!isset($val['id']) || $val['id'] == '') {

                $img = new campaign_image;
                $img->image = $val['image'];
                $img->campaign_id = $camp_id;
                $img->save();

            } else {

                $img = campaign_image::find($val['id']);
                $img->image = $val['image'];
                $img->campaign_id = $camp_id;
                $img->save();


            }
        }



        foreach ($req->team as $key => $val) {

            if (!isset($val['id']) || $val['id'] == '') {

                $team = new campaign_team;
                $team->name = $val['name'];
                $team->campaign_id = $camp_id;
                $team->designation = $val['designation'];
                $team->image = $val['image'];
                $team->save();


            } else {


                $team = campaign_team::find($val['id']);
                $team->name = $val['name'];
                $team->campaign_id = $camp_id;
                $team->designation = $val['designation'];
                $team->image = $val['image'];
                $team->save();



            }


        }



        $session_user_id = auth('sanctum')->user()->id;

        $Campaign_log = new Campaign_log;
        $Campaign_log->activity_by = $session_user_id;
        $Campaign_log->campaign_id = $camp_id;
        $Campaign_log->activity_type = 4;
        $Campaign_log->save();



        $data = [
            'message' => 'Campaign Updated'
        ];

        return CustomTrait::SuccessJson($data);
    }


    //Added By Qaysar To retrieve the list of campain attachement to display in the page campain details the function has rout campain_attachements
    function campainAttachements($id)
    {
        $data = campaign_attachment::where(['status' => 1, 'campaign_id' => $id])->get()->toArray();

        if ($data) {
            return CustomTrait::SuccessJson($data);
        } else {
            $data = [
                'message' => "No Attachement File For This Campain"
            ];
            return CustomTrait::ErrorJson($data);
        }
    }

    public function campaginWithKyc(Request $req,$user_id,$camp_id)
    {
         $kyc_id_details=$user_id;
         $campagin_id=$camp_id;
        $kyc=UserKyc::select('value AS company_name')->where('user_id',$kyc_id_details)->where('kyc_detail_id',112)->first();
        $kyc_national=UserKyc::select('value AS national_id')->where('user_id',$kyc_id_details)->where('kyc_detail_id',135)->first();
        $campagin_details=campaign::where('id',$campagin_id)->first();
        if($kyc == null || $campagin_details == null || $kyc_national== null)
        {
            $data=['message'=>'no data to retrive'];
            return CustomTrait::ErrorJson($data);
        }else
        {
            $kyc_json=json_decode($kyc,true);
            $kyc_json_national=json_decode($kyc_national,true);
            $campagin_json=json_decode($campagin_details,true);
            $data=array_merge($kyc_json,$campagin_json,$kyc_json_national);
            return CustomTrait::SuccessJson($data);
        }

        // return $data;


    }


//    function  Deletecampaign($id)
//    {

//     $data=campaign::find($id);
//     $data->status  = 3;

//     // $data->delete();
//     $data->save();
//     $data=campaign::all();

//     // $data = $data->where(status!=0);
//     return view('campaign.list_camp',compact('data'))->with('message', 'Successfully deleted!');

// }
}
