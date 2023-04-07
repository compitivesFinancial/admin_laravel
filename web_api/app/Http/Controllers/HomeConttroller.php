<?php

namespace App\Http\Controllers;

use App\Traits\CustomTrait;
use Illuminate\Http\Request;
use App\Models\Page;
use Exception;
use Illuminate\Support\Facades\Log;

class HomeController extends Controller
{


    public function contactUs(Request $req)
    {

        echo 'sd';
        die;
        // try {

            // $page = new Page;
            // $page->first_name = $req->first_name;
            // $page->last_name = $req->last_name;
            // $page->email = $req->email;
            // $page->mobile = $req->mobile;
            // $page->message = $req->message;

            // $page->save();

        // } catch (Exception $e) {

        //     Log::channel('product')->info($e->getMessage());

            // $data = [
            //     'message' => "something went wronge"
            // ];

            // return  CustomTrait::ErrorJson($data);
        // }


   


        $data = [
            'message' => "Page Added"
        ];

        return  CustomTrait::SuccessJson($data);
    }




    
    






}
