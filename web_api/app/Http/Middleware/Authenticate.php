<?php

namespace App\Http\Middleware;

use App\Models\Admin_Ip;




use Illuminate\Auth\Middleware\Authenticate as Middleware;

class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */





    protected function redirectTo($request)
    {
        // echo 'Authenticateokkkkkkkkkkkkkkkkk';
        // die;


        if (!$request->expectsJson()) {

            $ip_table = Admin_Ip::get()->toArray();

            return route('login');

        }




    }
}
