<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use App\Models\User_otp;

use App\Models\user_type;
use App\Models\loginRandom;
use App\Traits\CustomTrait;

use Illuminate\Support\Str;
use App\Models\anb_accounts;
use Illuminate\Http\Request;
use GuzzleHttp\Promise\Create;
use Illuminate\Support\Facades\Crypt;
//use Illuminate\Auth\Events\Login;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\user_otp_regestration;
use Illuminate\Support\Facades\Crypt;
use PHPUnit\Framework\Constraint\Count;
use App\Exceptions\MyValidationException;
use Illuminate\Support\Facades\Validator;


class UserController extends Controller
{
    function sendOtpAbsher(Request $req)
    {
        $xml = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
        xmlns:abs="http://www.moi.gov.sa/absher/otp/AbsherOTP/">
        <soapenv:Header/>
        <soapenv:Body>
        <abs:sendOTPWithDynamicTemplate>
        <clientId>7030209154-0001</clientId>
        <clientAuthorization>FQUFaSiEc6WPaUxjaL6wfwXiFLXHWeHlVommcVgvnRg=</clientAuthorization>
        <operatorId>2145174898</operatorId>
        <customerId>2145174898</customerId>
        <language>ar</language>
        <reason>To confirm payment</reason>
        <otpType>PROVIDED_4TO6_DIGITS</otpType>
        <otpCode>1234</otpCode>
        <otpTemplate>
        <otpTemplateId>Competitiveness-OTP-01</otpTemplateId>
        <!--Optional:-->
        <otpParams>
        <!--1 to 13 repetitions:-->
        <Param>
        <!--You may enter the following 2 items in any order-->
        <Name>Param1</Name>
        <Value>1234</Value>
        </Param>
        <Param>
        <!--You may enter the following 2 items in any order-->
        <Name>Param2</Name>
        <Value>0796570014</Value>
        </Param>
        </otpParams>
        </otpTemplate>
        </abs:sendOTPWithDynamicTemplate>
        </soapenv:Body>
        </soapenv:Envelope>';


        $headers = array("content-type:text/xml", "Accept:text/xml", "Cache-Control:no-cache", "Pragma:no-cache", "content-length:'" . Str::length($xml) . "'");
        $ch = Curl_init();
        $url = "http://www.moi.gov.sa/absher/otp/AbsherOTP/";
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 1);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $xml);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        $respone = curl_exec($ch);
        curl_close($ch);
        return $respone;
    }



    function checkMobile(Request $req)
    {
        $data = User::select('id')->where('email', $req->email)->first();
        if ($data) {
            $data = [
                'status' => false,
                'message' => "Email Id Already Exist Please Login",
                'extra' => '2'

            ];

            return  CustomTrait::ErrorJson($data);
        } else {

            $data = [
                'status' => true,
                'message' => "Email Id does not exists",
                'extra' => '1'

            ];

            return  CustomTrait::SuccessJson($data);
        }
    }

    function sendOtp(Request $req)
    {
        loginRandom::where(['email' => $req->email])->delete();
        $otp = random_int(1000, 9999);
        CustomTrait::sendOtpMail($otp, $req->email);
        $kyc = new User_otp;
        $kyc->email = $req->email;
        $kyc->otp = $otp;
        $kyc->status = 0;
        $kyc->save();
        $data = [
            'status' => true,
            'message' => "OTP Sent Successfully"
        ];
        return  CustomTrait::SuccessJson($data);
    }
    function sendOtpRegestration(Request $req)
    {


        $emailExists = User::where('email', $req->email)->count();
        if ($emailExists >= 1) {
            $data = [
                'status' => true,
                'message' => "email already exists"
            ];
            return  CustomTrait::ErrorJson($data);
        }
        loginRandom::where(['email' => $req->email])->delete();
        $otp = random_int(1000, 9999);
        CustomTrait::sendOtpMail($otp, $req->email);
        $kyc = new user_otp_regestration();
        $kyc->email = $req->email;
        $kyc->otp = $otp;
        $kyc->status = 0;
        $kyc->save();
        $data = [
            'status' => true,
            'message' => "OTP Sent Successfully"
        ];
        return  CustomTrait::SuccessJson($data);
    }



    function verifyOtp(Request $req)
    {
        $row = User_otp::select('id')->where(['email' => $req->email, 'otp' => $req->otp, 'status' => 0])->orderBy('id', 'DESC')->limit(1)->first();
        $row1 = User_otp::select('id')->where(['email' => $req->email, 'otp' => $req->otp, 'status' => 1])->orderBy('id', 'DESC')->limit(1)->first();

        if (!empty($row)) {

            $idd = $row['id'];
            $kyc = User_otp::find($idd);
            $kyc->status = 1;
            $kyc->save();


            $data = [
                'status' => true,
                'message' => "OTP Verified"

            ];
            return  CustomTrait::SuccessJson($data);
        } elseif (!empty($row1)) {

            $data = [
                'status' => false,
                'message' => "Expired OTP"

            ];
            return  CustomTrait::ErrorJson($data);
        } else {
            $data = [
                'status' => false,
                'message' => "Invalid OTP"

            ];
            return CustomTrait::ErrorJson($data);
        }
    }




    public function loginVerifyOtp(Request $req)
    {

        $row = User_otp::select('id')->where(['email' => $req->email, 'otp' => $req->otp, 'status' => 0])->orderBy('id', 'DESC')->limit(1)->first();
        if (!empty($row)) {
            $idd = $row['id'];
            $kyc = User_otp::find($idd);
            $kyc->status = 1;
            $kyc->save();

            $user = User::select('id', 'role_type', 'name', 'mobile_number', 'email', 'password', 'admin_role_id')->where('email', $req->email)->first();
            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->plainTextToken;
            $data = User::find($user['id']);
            //$arr['id'] = Crypt::encrypt($data['id']);
            $arr['id'] = Crypt::encryptString($data['id']);

            $arr['name'] = $data['name'];
            $arr['username'] = $data['username'];
            $arr['role_type'] = $data['role_type'];
            $arr['email'] = $data['email'];
            $arr['registration_type'] = $data['type'];
            $arr['country_code'] = $data['country_code'];
            $arr['mobile_number'] = $data['mobile_number'];
            $arr['status'] = $data['status'];
            $arr['token'] = $token;
            $arr['kyc_approved_status'] = $data['kyc_approved_status'];
            $arr['cr_number_response'] = $data['cr_number_response'];
            $arr['isQualified'] = $data['is_qualified'];
            return  CustomTrait::SuccessJson($arr);
        } else {
            loginRandom::create([
                'email' => $req->email,
                'count' => $req->otp
            ]);
            $lastOtp = loginRandom::where(['email' => $req->email])->get();
            if (Count($lastOtp) > 2) {
                $data = [
                    'status' => false,
                    'message' => "you try 3 times must generate new otp"
                ];
                $row = User_otp::select('id')->where(['email' => $req->email])->orderBy('id', 'DESC')->limit(1)->first();
                $idd = $row['id'];
                $kyc = User_otp::find($idd);
                $kyc->status = 1;
                $kyc->save();
                return CustomTrait::ErrorJson($data);
            }
            $data = [
                'status' => false,
                'message' => "Invalid OTP"

            ];
            return CustomTrait::ErrorJson($data);
        }
    }




    function showUserType()
    {
        $data = user_type::select('id', 'title', 'ar_title', 'status', 'position')->where('status', 1)->orderBy('position', 'ASC')->get()->toArray();
        return  CustomTrait::SuccessJson($data);
    }


    function getUser($id)
    {
        $data = User::where('role_type', $id)->get()->toArray();
        return  CustomTrait::SuccessJson($data);
    }



    public function register(Request $req)
    {

        // echo '<pre>';
        // print_r($req->all());
        // die;

        $data = User::select('id')->where('mobile_number', $req->mobile_number)->first();
        if ($data) {
            $data = [
                'status' => false,
                'message' => "Mobile Number Already Exist Please Login"
            ];
            return CustomTrait::ErrorJson($data);
        }

        $dataem = User::select('id')->where('email', $req->email)->first();
        if ($dataem) {
            $data = [
                'status' => false,
                'message' => "Email Already Exist Please Login"
            ];
            return CustomTrait::ErrorJson($data);
        }
        $row = user_otp_regestration::select('id')->where(['email' => $req->email, 'otp' => $req->otp, 'status' => 0])->orderBy('id', 'DESC')->limit(1)->first();
        if (!empty($row)) {
            $idd = $row['id'];
            $kyc = user_otp_regestration::find($idd);
            $kyc->status = 1;
            $kyc->save();
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


            $user = User::select('id', 'name', 'mobile_number', 'email', 'password', 'admin_role_id', 'status', 'role_type')->where('id', $reg->id)->first();

            $tokenResult = $user->createToken('Personal Access Token');
            $token = $tokenResult->plainTextToken;

            $arr['id'] = $user['id'];
            $arr['role_type'] = $user['role_type'];
            $arr['name'] = $user['name'];
            $arr['username'] = $user['username'];
            $arr['email'] = $user['email'];
            $arr['country_code'] = $user['country_code'];
            $arr['mobile_number'] = $user['mobile_number'];
            $arr['registration_type'] = $user['type'];
            $arr['status'] = $user['status'];
            $arr['token'] = $token;
            $arr['kyc_approved_status'] = $user['kyc_approved_status'];



            $type = 1;
            $user_id = $user['id'];


            CustomTrait::sendMailHtml($user_id, $type);


            return  CustomTrait::SuccessJson($arr);
        } else {
            loginRandom::create([
                'email' => $req->email,
                'count' => $req->otp
            ]);
            $lastOtp = loginRandom::where(['email' => $req->email])->get();
            if (Count($lastOtp) > 2) {
                $data = [
                    'status' => false,
                    'message' => "you try to register 3 times you must generate new otp"
                ];
                $row = user_otp_regestration::select('id')->where(['email' => $req->email])->orderBy('id', 'DESC')->limit(1)->first();
                $idd = $row['id'];
                $kyc = user_otp_regestration::find($idd);
                $kyc->status = 1;
                $kyc->save();
                return CustomTrait::ErrorJson($data);
            }
            $data = [
                'status' => false,
                'message' => "Invalid OTP"

            ];
            return CustomTrait::ErrorJson($data);
        }
    }


    public function login(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required'
        ]);


        if ($validator->fails()) {

            $data = [
                'message' => $validator->errors()
            ];
            return  CustomTrait::ErrorJson($data);
        }


        $login = loginRandom::where('email', $request->email)->orderBy('created_at')->get();
        $count = Count($login);
        if ($count != 0) {
            $loginFirst = $login->first();
            $loginLast = $login->last();
            $createdAt1 = Carbon::parse($loginFirst->created_at);
            $createdAt2 = Carbon::parse($loginLast->created_at);
            $timeBetweenFirstAndLast = $createdAt1->diff($createdAt2);
            $mytime = Carbon::now();
            $createdAt2 = Carbon::parse($loginLast->created_at);
            $timeNow = $mytime->diff($createdAt2);

            if ($timeBetweenFirstAndLast->i > 15) {
                loginRandom::where('email', $request->email)->first()->delete();
            } else if ($timeNow->i <= 15 && $count > 2) {
                $data = [
                    'message' => "you are blocked for 15 mins"
                ];
                return  CustomTrait::ErrorJson($data);
            } else if ($timeNow->i > 15 && $count > 2) {
                loginRandom::where('email', $request->email)->delete();
            }
        }
        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
            $user = loginRandom::Create([
                'email' => $request->email,
                'count' => $count + 1,
            ]);
            $data = [
                'message' => "invalid credentials"
            ];
            return  CustomTrait::ErrorJson($data);
        }
        $loginAttemp = loginRandom::where('email', $request->email)->delete();
        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;
        $data = User::find($user['id']);
        $arr['name'] = $data['name'];
        $arr['username'] = $data['username'];
        $arr['id'] = Crypt::encrypt($data['id']);
        //$arr['id'] = encrypt($data['id']);
        $arr['kyc_approved_status'] = $data['kyc_approved_status'];
        $arr['role_type'] = $data['role_type'];
        $arr['email'] = $data['email'];
        $arr['registration_type'] = $data['type'];
        $arr['country_code'] = $data['country_code'];
        $arr['mobile_number'] = $data['mobile_number'];
        $arr['status'] = $data['status'];
        $arr['token'] = $token;
        $arr['cr_number_response'] = $data['cr_number_response'];
        $arr['isQualified'] = $data['is_qualified'];
        return  CustomTrait::SuccessJson($arr);
    }




    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json([
            'message' => 'Successfully logged out'
        ]);
    }

    public function userAccoutnumber(Request $request)
    {
        $user_id = $request->user()->id;
        $user_account_number = anb_accounts::where('user_id', $request->user()->id)->first();

        if ($user_account_number == null || $user_account_number == '') {
            $data = ["message" => "no details for this user"];
            return CustomTrait::ErrorJson($data);
        } else {
            return CustomTrait::SuccessJson($user_account_number);
        }
    }

    public function getUserDetails($user_id)
    {
        // $user_id=$request->user()->id;
        if ($user_id == null || $user_id == '') {
            $data = ["message" => "no details for this user"];
            return CustomTrait::ErrorJson($data);
        } else {
            $data = User::find($user_id);
            return CustomTrait::SuccessJson($data);
        }
    }
}
