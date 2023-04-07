<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Admin_Log;
use App\Models\Admin_Role;
use App\Traits\CustomTrait;

use App\Exceptions\MyValidationException;
use Illuminate\Support\Facades\DB;

use App\Models\Admin_Ip;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{


    function getUserById($id)
    {

        $data = User::where("id", "=", $id)->first();
        return  CustomTrait::SuccessJson($data);
    }

    public function addAdmin(Request $req)
    {


        try {

            $user = new User;
            $user->name = $req->name;
            $user->email = $req->email;
            $user->role_type = $req->user_type;
            $user->department_type = $req->department_type;
            $user->department_role = $req->department_role;

            $user->admin_role_id = $req->admin_role_id;
            $user->mobile_number = $req->mobile_number;
            $user->country_code = $req->country_code;

            $hashed = Hash::make($req->password);

            $user->password = $hashed;


            $user->status = $req->status;
            $user->save();
        } catch (Exception $e) {

            Log::channel('admin')->info($e->getMessage());
            $data = [
                'message' => "something went wrong"
            ];
            return  CustomTrait::ErrorJson($data);
        }



        $data = [
            'message' => "User Added"
        ];

        return  CustomTrait::SuccessJson($data);
    }


    function updateuser(Request $req)
    {



        try {

            $data = User::find($req->id);
            $data->name = $req->name;
            $data->email = $req->email;



            $data->role_type = $req->user_type;


            $data->department_type = $req->department_type;
            $data->department_role = $req->department_role;


            $data->admin_role_id = $req->admin_role_id;
            $data->mobile_number = $req->mobile_number;
            $data->country_code = $req->country_code;
            $data->password = $req->password;
            $data->status = $req->status;
            $data->save();
        } catch (Exception $e) {

            Log::channel('admin')->info($e->getMessage());
            $data = [
                'message' => "something went wrong"
            ];
            return  CustomTrait::ErrorJson($data);
        }



        $data = [
            'message' => "User Updated"
        ];

        return  CustomTrait::SuccessJson($data);
    }



    function listAdminIp(Request $request)
    {

        $data = Admin_Ip::where("status", "=", 1)->get()->toArray();
        return  CustomTrait::SuccessJson($data);
    }


    function addAdminIp(Request $request)
    {

        try {

            $dat = new Admin_Ip;
            $dat->name = $request->ip;
            $dat->status = 1;
            $dat->save();
        } catch (Exception $e) {

            Log::channel('admin')->info($e->getMessage());
            $data = [
                'message' => "something went wrong"
            ];
            return  CustomTrait::ErrorJson($data);
        }


        $data = [
            'message' => "Added Successfully"
        ];

        return  CustomTrait::SuccessJson($data);
    }



    function adminLogs()
    {

        $data = Admin_Log::join('users', 'users.id', '=', 'admin__logs.admin_id')->orderBy('admin__logs.id', 'desc')->get(['admin__logs.*', 'users.name'])->toArray();

        return  CustomTrait::SuccessJson($data);
    }





    public function getDepartment(Request $request)
    {


        $data = Admin_Role::select('title', 'id')->where("type", "=", $request->dep_type)->get()->toArray();
        return  CustomTrait::SuccessJson($data);
    }


    function showuser()
    {
        // $sql = "select id,name,email,status,(select GROUP_CONCAT(admin__roles.title) from admin__roles
        // where (admin__roles.id=users.admin_role_id)) AS department from users where status = 1 and role_type in(0,1)";

    //     $sql = "select id,name,email,role_type,status,(select GROUP_CONCAT(admin__roles.title) from admin__roles
    // where (admin__roles.id=users.admin_role_id)) AS department from users where status = 1 and admin_role_id = 2";


    $sql = "select id,name,email,role_type,status,(select user_types.title from user_types
    where (user_types.id=users.role_type)) AS department from users where status = 1 and admin_role_id = 2";
        $info = DB::select(DB::raw($sql));
        $data = json_decode(json_encode($info), true);



        return  CustomTrait::SuccessJson($data);
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


        $credentials = request(['email', 'password']);
        if (!Auth::attempt($credentials)) {
            $data = [
                'message' => "invalid credentials"
            ];
            return  CustomTrait::ErrorJson($data);
        }




        $user = $request->user();
        $tokenResult = $user->createToken('Personal Access Token');
        $token = $tokenResult->plainTextToken;

        $data = User::find($user['id']);

        $arr['name'] = $data['name'];
        $arr['role_type'] = $data['role_type'];
        $arr['email'] = $data['email'];
        $arr['country_code'] = $data['country_code'];
        $arr['mobile_number'] = $data['mobile_number'];
        $arr['status'] = $data['status'];
        $arr['token'] = $token;



        if ($data['department_type'] == 1) {
            $arr['access_control'] =  $data['department_role'];
        } else if ($data['department_type'] == 2) {

            $idd = $data['department_role'];


            $arridd = explode(",", $idd);


            $dd = Admin_Role::select('permission')->whereIn('id', $arridd)->get()->toArray();

            $strg = '';

            foreach ($dd as $key => $val) {
                $strg .= $val['permission'] . ',';
            }

            $strg = rtrim($strg, ",");


            $arr['access_control'] = $strg;
        } else {

            $arr['access_control'] = 0;
        }

        return  CustomTrait::SuccessJson($arr);
    }


    public function user(Request $request)
    {

        $data = $request->user();

        $arr['first_name'] = $data['first_name'];
        $arr['last_name'] = $data['last_name'];
        $arr['email'] = $data['email'];
        $arr['country_code'] = $data['country_code'];
        $arr['mobile_number'] = $data['mobile_number'];
        $arr['status'] = $data['status'];


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
