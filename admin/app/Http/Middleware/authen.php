<?php

namespace App\Http\Middleware;
use Illuminate\Support\Facades\Route;
use Closure;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Admin_Role;
use App\Models\Admin_Session;
use App\Models\user_type;
use Auth;
use Session;
// use URL;


use Illuminate\Support\Facades\URL;
// use Route;

class authen
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {



$segment = \Request::segment(1);

$user = User::get();

$ip = $_SERVER['REMOTE_ADDR'];
    
    
$token = $user[0]['email'].''.$user[0]['password'].''.$ip;

$Admin_Session = Admin_Session::where(['token' => $token,'admin_id' => $user[0]['id']])->get()->toArray();

$users=user_type::where('status',1)->orderBy('position', 'ASC')->get()->toArray();
Session::push('side_menu_user',$users);



$arr = explode(',',$user[0]->admin_role_id);

$admin_role = Admin_Role::whereIn('id', $arr)->get();

$permission = [];


foreach($admin_role as $row){

    $permission = array_merge($permission,json_decode($row['permission'],true)['files']);

}

Session::push('key',$permission);

    if(!empty($Admin_Session[0]['token'])){


            if(in_array($segment,$permission)){

                return $next($request);
            }else{
                Session::flush();
                Auth::logout();
                return redirect('login');
            }


    }else{

            Session::flush();
            Auth::logout();
            return redirect('login');
    }


      
        // return $next($request);
    }
}
