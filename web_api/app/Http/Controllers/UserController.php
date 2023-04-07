<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use App\Models\User;
use App\Models\User_otp;
use App\Traits\CustomTrait;

use App\Exceptions\MyValidationException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator ;

class UserController extends Controller
{



    function checkMobile(Request $req)
    {

        $data=User::select('id')->where('email',$req->email)->first();


        if($data){


            $data = [
                'status'=> false,
                'message' => "Email Id Already Exist Please Login",
                'extra'=> '2'

            ];

            return  CustomTrait::ErrorJson($data);

        }else{

            $data = [
                'status'=> true,
                'message' => "Email Id does not exists",
                'extra'=> '1'

            ];

            return  CustomTrait::SuccessJson($data);

        }


    }





function sendOtp(Request $req)
{


    // $otp = random_int(100000, 999999);

    // CustomTrait::sendOtpMail($otp,$req->email);
$otp = 123456;

    $kyc = new User_otp;
        $kyc->email = $req->email;
        $kyc->otp = $otp;
        $kyc->status = 0;

        $kyc->save();



        $data = [
            'status'=> true,
            'message' => "OTP Sent Successfully"

        ];
        return  CustomTrait::SuccessJson($data);



    //    "response": {
    //     "status": false,
    //     "message": "OTP Failed to send"
    //     }


    }




    function verifyOtp(Request $req)
    {

        $row=User_otp::select('id')->where(['email' => $req->email,'otp' => $req->otp,'status'=>0])->orderBy('id', 'DESC')->limit(1)->first();

        $row1=User_otp::select('id')->where(['email' => $req->email,'otp' => $req->otp,'status'=>1])->orderBy('id', 'DESC')->limit(1)->first();


// echo '<pre>';
// print_r($row1);
// die;


        if(!EMPTY($row)){

        $idd = $row['id'];
        $kyc=User_otp::find($idd);
        $kyc->status = 1;
        $kyc->save();


        $data = [
            'status'=> true,
            'message' => "OTP Verified"

        ];
        return  CustomTrait::SuccessJson($data);


        }
        elseif(!EMPTY($row1)){

                $data = [
                    'status'=> false,
                    'message' => "Expired OTP"

                ];
                return  CustomTrait::ErrorJson($data);



        }
        else{

                $data = [
                    'status'=> false,
                    'message' => "Invalid OTP"

                ];
                return CustomTrait::ErrorJson($data);


    }





    }




    public function loginVerifyOtp(Request $req)
    {

        // echo 'hi';
        // die;


        $row=User_otp::select('id')->where(['email' => $req->email,'otp' => $req->otp,'status'=>0])->orderBy('id', 'DESC')->limit(1)->first();




        if(!EMPTY($row)){

            $idd = $row['id'];
            $kyc=User_otp::find($idd);
            $kyc->status = 1;
            $kyc->save();



            // $user = $req->user();
            $user=User::select('id','role_type','name','mobile_number','email','password','admin_role_id')->where('email',$req->email)->first();


            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->plainTextToken;

            $data=User::find($user['id']);



        $arr['id']=$data['id'];
        $arr['name']=$data['name'];
        $arr['username']=$data['username'];
        $arr['role_type']=$data['role_type'];
        $arr['email']=$data['email'];
        $arr['registration_type']=$data['type'];
        $arr['country_code']=$data['country_code'];
        $arr['mobile_number']=$data['mobile_number'];
        $arr['status']=$data['status'];
        $arr['token']=$token;
        $arr['kyc_approved_status']=$data['kyc_approved_status'];


        return  CustomTrait::SuccessJson($arr);

    }else{

        $data = [
            'status'=> false,
            'message' => "Invalid OTP"

        ];
        return CustomTrait::ErrorJson($data);

    }

}




function showUserType()
{
    $data=user_type::select('id','title','ar_title','status','position')->where('status',1)->orderBy('position', 'ASC')->get()->toArray();
    return  CustomTrait::SuccessJson($data);
}


function getUser($id)
{
    $data=User::where('role_type',$id)->get()->toArray();
    return  CustomTrait::SuccessJson($data);
}



public function register(Request $req){

    // echo '<pre>';
    // print_r($req->all());
    // die;

    $data=User::select('id')->where('mobile_number',$req->mobile_number)->first();


    if($data){
        $data = [
            'status'=> false,
            'message' => "Mobile Number Already Exist Please Login"
        ];
        return CustomTrait::ErrorJson($data);

    }

    $dataem=User::select('id')->where('email',$req->email)->first();


    if($dataem){
        $data = [
            'status'=> false,
            'message' => "Email Already Exist Please Login"
        ];
        return CustomTrait::ErrorJson($data);

    }


    $reg = new User;
    $reg->name = $req->name;
    $reg->username = $req->username;
    $reg->mobile_number = $req->mobile_number;
    $reg->country_code = $req->country_code;
    $reg->email = $req->email;
    $reg->type = $req->registration_type;
    $reg->password = Hash::make($req->password);
    $reg->role_type = $req->role_type;
    $reg->admin_role_id = 0;

    $reg->status = 1;
    $reg->save();


    $user=User::select('id','name','mobile_number','email','password','admin_role_id','status','role_type')->where('id',$reg->id)->first();

    $tokenResult = $user->createToken('Personal Access Token');
    $token = $tokenResult->plainTextToken;

    $arr['id']=$user['id'];
    $arr['role_type']=$user['role_type'];
    $arr['name']=$user['name'];
    $arr['username']=$user['username'];
    $arr['email']=$user['email'];
    $arr['country_code']=$user['country_code'];
    $arr['mobile_number']=$user['mobile_number'];
    $arr['registration_type']=$user['type'];
    $arr['status']=$user['status'];
    $arr['token']=$token;
    $arr['kyc_approved_status']=$user['kyc_approved_status'];



    $type = 1;
    $user_id = $user['id'];


    CustomTrait::sendMailHtml($user_id,$type);


    return  CustomTrait::SuccessJson($arr);

}


    public function login(Request $request)
{


    $validator = Validator::make($request->all(), [
        'email' => 'required',
        'password' => 'required'
        ]);


        if ($validator->fails())
        {

            $data = [
                'message' => $validator->errors()
            ];
            return  CustomTrait::ErrorJson($data);

        }


        $credentials = request(['email','password']);
        if(!Auth::attempt($credentials))
        {
            $data = [
                'message' =>"invalid credentials"
            ];
            return  CustomTrait::ErrorJson($data);
        }




    $user = $request->user();
    $tokenResult = $user->createToken('Personal Access Token');
    $token = $tokenResult->plainTextToken;


    // $user_id = auth('sanctum')->user()->id;


    $data=User::find($user['id']);

    // echo '<pre>';
    // print_r($data);
    // die;




    $arr['name']=$data['name'];
    $arr['username']=$data['username'];
    $arr['id']=$data['id'];
    $arr['kyc_approved_status']=$data['kyc_approved_status'];
    $arr['role_type']=$data['role_type'];
    $arr['email']=$data['email'];
    $arr['registration_type']=$data['type'];
    $arr['country_code']=$data['country_code'];
    $arr['mobile_number']=$data['mobile_number'];
    $arr['status']=$data['status'];
    $arr['token']=$token;


    return  CustomTrait::SuccessJson($arr);

}




public function logout(Request $request)
{
    $request->user()->tokens()->delete();
    return response()->json([
    'message' => 'Successfully logged out'
    ]);
}

}
