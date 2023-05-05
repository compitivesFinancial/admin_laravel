<?php

namespace App\Http\Controllers;

use DB;
use App\Models\Cms;
use App\Models\loan;
use App\Models\Page;
use App\Models\Product;
use App\Models\campaign;
use App\Traits\CustomTrait;
use App\Models\Campaign_log;
use Illuminate\Http\Request;
use App\Models\campaign_team;
use App\Models\campaign_image;
use App\Models\campaign_inverter;
use App\Models\borrower_statement;

use App\Models\investor_statement;
use Illuminate\Foundation\Auth\User;
use Illuminate\Support\Facades\Auth;
use App\Models\ProductAttributeDetail;
use Exception;
use Illuminate\Support\Facades\Log;

class CampaignController extends Controller
{


    function __construct(Request $request)
    {

        $this->lang = $request->header('Accept-Language');

    }






    public function homePageApi()
    {


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

        $sql_title = $this->lang == 'en' ? 'title' : 'ar_title';

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

        $sql_var = $this->lang == 'en' ? 'title' : 'ar_title as title';
        $sql_descp = $this->lang == 'en' ? 'description' : 'ar_description as description';


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

        $page = new Contact_us;
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

        // echo $req->user_id;
        // die;


        $campaign = campaign::select("id", "user_id", "product_id", "total_valuation")->where('user_id', $req->user_id)->first()->toArray();

        // echo '<pre>';
        // print_r($campaign);
        // die;


        if (!$campaign) {

            $data = [
                'message' => "No Data Found"
            ];
            return CustomTrait::ErrorJson($data);


        }

        // echo '<pre>';
        // print_r($campaign);
        // die;



        $campaign_id = $campaign['id'];





        $data = borrower_statement::select("id", "campaign_id", "due_date", "principle_expected", "interest_expected", "fees_expected", "total_expected", "principle_paid", "interest_paid", "fees_paid", "total_paid", "paid_date", "principle_due", "interest_due", "fees_due", "total_due", "status")->where('campaign_id', $campaign_id)->get()->toArray();

        // echo '<pre>';
        // print_r($data);
        // die;



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

        $campaign = campaign::select("id", "user_id", "product_id", "total_valuation")->where('user_id', $req->user_id)->first()->toArray();


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


        $session_user_id = $req->user_id;
        $data = campaign::select("id", "user_id", "tagline", "share_price", "total_valuation", "min_investment", "max_investment", "fundriser_investment", "company_bio", "reason_to_invest", "investment_planning", "terms", "introduce_team", "status")->where('id', $req->campaign_id)->first()->toArray();





        if ($req->amount < $data['min_investment'] || $req->amount > $data['max_investment']) {

            $data = [
                'message' => "Please insert Amount between " . $data['min_investment'] . " to " . $data['max_investment']
            ];
            return CustomTrait::ErrorJson($data);

        }


        $investerCount = campaign_inverter::where(['campaign_id' => $req->campaign_id, 'invester_id' => $session_user_id])->get()->count();

        $sumamount = campaign_inverter::where(['campaign_id' => $req->campaign_id])->get()->sum('amount');





        if ($investerCount > 0) {

            $data = [
                'message' => "You have already done your investment"
            ];
            return CustomTrait::ErrorJson($data);

        }



        $checkAmount = $req->amount + $sumamount;




        if ($checkAmount > $data['total_valuation']) {

            $data = [
                'message' => "PLease enter amount below limit"
            ];
            return CustomTrait::ErrorJson($data);

        }


        try {

            $campaign = new campaign_inverter;
            $campaign->campaign_id = $req->campaign_id;
            $campaign->invester_id = $session_user_id;
            $campaign->amount = $req->amount;
            $campaign->save();


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

        $investerCount = campaign_inverter::select('id', 'campaign_id', 'invester_id', 'amount as invested_amount', 'created_at as invested_date')->where(['invester_id' => $id])->first();


        $data = campaign::select("id", "user_id", "tagline", "share_price", "total_valuation", "min_investment", "max_investment", "fundriser_investment", "company_bio", "reason_to_invest", "investment_planning", "terms", "introduce_team", "status")->where('id', $investerCount['campaign_id'])->get()->toArray();
        return CustomTrait::SuccessJson($data);

    }

    function userCampaignborrower($id)
    {


        $data = campaign::select("id", "user_id", "tagline", "share_price", "total_valuation", "min_investment", "max_investment", "fundriser_investment", "company_bio", "reason_to_invest", "investment_planning", "terms", "introduce_team", "status")->where('user_id', $id)->get()->toArray();
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
        $data = campaign::select("id", "user_id", "tagline", "share_price", "total_valuation", "min_investment", "max_investment", "fundriser_investment", "company_bio", "reason_to_invest", "investment_planning", "terms", "introduce_team", "status")->where(['status' => 1, 'approved_status' => 1])->get()->toArray();
        return CustomTrait::SuccessJson($data);
    }












    function getById($id)
    {

        // echo 'gdggddg';
        // die;

        $data = campaign::select("id", "user_id", "tagline", "share_price", "total_valuation", "min_investment", "max_investment", "fundriser_investment", "company_bio", "reason_to_invest", "investment_planning", "terms", "introduce_team", "status")->where(['id' => $id, 'status' => 1])->first();

        if ($data) {


            $data['campaign_images'] = campaign_image::select("id", "image")->where(['campaign_id' => $id])->get();
            $data['team'] = campaign_team::select("id", "name", "designation", "image")->where(['campaign_id' => $id])->get();

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
