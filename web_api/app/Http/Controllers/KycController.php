<?php

namespace App\Http\Controllers;


use App\Traits\CustomTrait;
use Illuminate\Http\Request;
use App\Models\KycDetail;
use App\Models\Kyc;
use App\Models\UserKycRole;
use App\Models\UserKyc;
use App\Models\User;
use App\Models\kyc_info_type;
use App\Models\kyc_log;
use Session;

use App\Models\user_type;
use App\Models\user_kyc_role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use DB;
use Illuminate\Support\Facades\Http;

class KycController extends Controller
{

    public function commercialregistration($id){

        $curl = curl_init("https://api.wathq.sa/v5/commercialregistration/fullinfo/$id");

        curl_setopt_array($curl, array(
          CURLOPT_URL=>"https://api.wathq.sa/v5/commercialregistration/fullinfo/$id",
          CURLOPT_RETURNTRANSFER=>TRUE,
          CURLOPT_CUSTOMREQUEST => 'GET',
          CURLOPT_HTTPHEADER => array(
            'accept: application/json',
            'apiKey: 5edLF9FLpuMWWMgPTvwSezSg8TFQGe74'
          ),
        ));

        $response = curl_exec($curl);
        curl_close($curl);
        $res= json_decode($response);
        return CustomTrait::SuccessJson($res);



    }


    function __construct(Request $request){

        $this->lang = $request->header('Accept-Language');

    }





    function showAddUserKyc() {


        $id = auth('sanctum')->user()->id;
        $data=User::select('role_type','kyc_approved_status','kyc_note')->where('id',$id)->first();
        $role_type =  $data['role_type'];


        $detail=UserKycRole::select('id','user_type_id','kyc_id')->where('id',$role_type)->get()->toArray();


        foreach($detail as $key1=>$val1){



                $arrKyc_id = explode(',',$val1['kyc_id']);
                foreach($arrKyc_id as $key=>$val){


                    $sql_var = $this->lang == 'en' ? 'title' : 'ar_title as title';

                    $detail[$key] = Kyc::select('id',$sql_var,'status','position')->where(['id' => $val])->first()->toArray();


                        $temp2 = KycDetail::Leftjoin('kyc_info_types', 'kyc_info_types.id', '=', 'kyc_details.info_type')->where(['kyc_details.kyc_id' => $val])->groupBy('kyc_details.info_type')->orderBy('kyc_details.info_type', 'ASC')->orderBy('kyc_details.position', 'ASC')->get(["kyc_details.info_type","kyc_info_types.$sql_var"])->toArray();


                        $detail[$key]['info_type'] = $temp2;
                        foreach($detail[$key]['info_type'] as $key2=>$val2){


                                 $kycdetail = KycDetail::select('id','kyc_id','type','info_type',$sql_var,'length','mandatory','status','position')->where(['kyc_id' => $val,'info_type'=>$val2['info_type'],'status'=>1])->orderBy('info_type', 'ASC')->orderBy('position', 'ASC')->get()->toArray();



                                 foreach($kycdetail as $key3=>$val3){


                                    if($kycdetail[$key3]['length'] == 0){
                                        $kycdetail[$key3]['length'] = '';
                                    }


                                    $kyc_detail_id = $val3['id'];

                                    $temp = UserKyc::select('value','id')->where(['kyc_detail_id' => $kyc_detail_id,'user_id'=>$id])->orderBy('id', 'DESC')->first();


                                    if($temp){
                                                $kycdetail[$key3]['user_kyc_id'] = $temp['id'];
                                                $kycdetail[$key3]['value'] = $temp['value'];
                                        }else{
                                                $kycdetail[$key3]['user_kyc_id'] = null;
                                                $kycdetail[$key3]['value'] = null;
                                        }


                                 }




                                $detail[$key]['info_type'][$key2]['detail'] = $kycdetail;

                        }
                }





        }


        return  CustomTrait::SuccessJson($detail);

}




public function ModifyUserKyc(Request $req)
{


    $userid = auth('sanctum')->user()->id;
    $count = User::select('kyc_approved_status')->where(['id' => $userid])->first()->toArray();
    // $user = User::select()->where(['id' => $userid])->first();
    if($count['kyc_approved_status'] == 1){
        $data = [
            'message' => "Kyc already accepted Cannot do changes"
        ];
        return  CustomTrait::ErrorJson($data);
    }


    foreach($req->field as $key=>$val){


            if(!isset($val['user_kyc_id']) || $val['user_kyc_id'] ==''){

                try {

                    $kyc = new UserKyc;
                    $kyc->user_id = $userid;
                    $kyc->kyc_detail_id = $val['id'];
                    $kyc->value = $val['value'];
                    $kyc->status = 1;
                    $kyc->save();

                    }catch(Exception $e) {

                        Log::channel('kyc')->info($e->getMessage());
                        $data = [
                            'message' => "something went wronge"
                        ];
                        return  CustomTrait::ErrorJson($data);


                    }



            }else{



                    try {

                        $kyc=UserKyc::find($val['user_kyc_id']);
                        $kyc->user_id = $userid;
                        $kyc->kyc_detail_id = $val['id'];
                        $kyc->value = $val['value'];
                        $kyc->status = 1;
                        $kyc->save();

                        }catch(Exception $e) {

                            Log::channel('kyc')->info($e->getMessage());
                            $data = [
                                'message' => "something went wronge"
                            ];
                            return  CustomTrait::ErrorJson($data);


                        }

            }


        }





        $kyc_log = new kyc_log;
        $kyc_log->user_id = $userid;
        $kyc_log->activity_by = $userid;
        $kyc_log->activity_type = 1;
        $kyc_log->save();
        //added by qaysar to save watheq data on user table
        $user=User::find($userid);
        $user->cr_number_response = $req->crnumber;
        $user->save();




    $data = [
        'message' => 'Kyc User Modified '
    ];

    return  CustomTrait::SuccessJson($data);

}











}

