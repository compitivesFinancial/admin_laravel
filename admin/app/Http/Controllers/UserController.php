<?php

namespace App\Http\Controllers;

use App\Traits\CustomTrait;
use App\Models\User;
use App\Models\user_type;
use App\Models\UserKycRole;
use App\Models\UserKyc;
use App\Models\Kyc;
use App\Models\Admin_Role;
use App\Models\anb_accounts;




use App\Models\KycDetail;
use Illuminate\Http\Request;

class UserController extends Controller
{



    function getUserList($role_type)
    {

        $data = User::where('role_type', $role_type)->orderBy('id', 'DESC')->get()->toArray();



        foreach($data as $key=>$val){

            $account_number = anb_accounts::select('account_number')->where(['user_id'=>$val['id']])->first();
            
            if(isset($account_number)){
                $data[$key]['account_number'] = $account_number['account_number'];
            }else{
                $data[$key]['account_number'] = null;
            }

    
    }




        return  CustomTrait::SuccessJson($data);
    }


    function getUserDetail($user_id)
    {




        $userdata = User::where('id', $user_id)->first()->toArray();



            $account_number = anb_accounts::select('account_number')->where(['user_id'=>$userdata['id']])->first();
            
            if(isset($account_number)){
                $userdata['account_number'] = $account_number['account_number'];
            }else{
                $userdata['account_number'] = null;
            }

    
    


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
        $data['kyc'] = $detail;


        $userdata['detail'] = $detail;



        return  CustomTrait::SuccessJson($userdata);
    }







    function adminDepartment()
    {

        // echo 'asd';
        // die;

      
            $data['role'] = Admin_Role::select('id', 'title')->where(['status'=> 1,'type'=>1])->get()->toArray();

            $data['menu'] = Admin_Role::select('permission as id', 'title')->where(['status'=> 1,'type'=>0])->get()->toArray();
    


        // if($id == 2){
        //     $data = user_type::select('id', 'title', 'ar_title', 'status', 'position')->whereNotIn('id', array(2, 3))->where('status', 1)->orderBy('position', 'ASC')->get()->toArray();
        // }


        return  CustomTrait::SuccessJson($data);
    }


 
    // whereNotIn('id', array(1, 2, 3))->

    function showUserType($id)
    {

        if($id == 1){
            $data = user_type::select('id', 'title', 'ar_title')->where('status', 1)->orderBy('position', 'ASC')->get()->toArray();
        }


        if($id == 2){
            $data = user_type::select('id', 'title', 'ar_title', 'status', 'position')->whereNotIn('id', array(2, 3))->where('status', 1)->orderBy('position', 'ASC')->get()->toArray();
        }


        return  CustomTrait::SuccessJson($data);
    }


    function getUser($id)
    {
        $data = User::where('role_type', $id)->orderBy('id', 'DESC')->get()->toArray();


    foreach($data as $key=>$val){

        $account_number = anb_accounts::select('account_number')->where(['user_id'=>$val['id']])->first();
            
        if(isset($account_number)){
            $data[$key]['account_number'] = $account_number['account_number'];
        }else{
            $data[$key]['account_number'] = null;
        }

    }



        return  CustomTrait::SuccessJson($data);
    }
}
