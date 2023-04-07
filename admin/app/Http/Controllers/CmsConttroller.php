<?php

namespace App\Http\Controllers;

use App\Traits\CustomTrait;
use Illuminate\Http\Request;
use App\Models\Cms;
use Exception;
use Illuminate\Support\Facades\Log;

class CmsConttroller extends Controller
{

    
    public function insert(Request $req)
    {

        // try {

            $cms = new Cms;
            $cms->title = $req->title;
            $cms->ar_title = $req->ar_title;
            $cms->description = $req->description;
            $cms->ar_description = $req->ar_description;
            $cms->image = $req->image;
            $cms->ar_image = $req->ar_image;
            $cms->status = $req->status;
            $cms->flag = $req->flag;
            
            $cms->position = $req->position;
            $cms->type = $req->type;
            $cms->created_by = $req->user_id;
            $cms->save();

        // } catch (Exception $e) {

        //     Log::channel('product')->info($e->getMessage());

            // $data = [
            //     'message' => "something went wronge"
            // ];

            // return  CustomTrait::ErrorJson($data);
        // }


        $data = [
            'message' => "Added Successfully"
        ];

        return  CustomTrait::SuccessJson($data);
    }





    public function GetById($id)
    {


        $data = Cms::select('id', 'title', 'ar_title','description','ar_description',
        'status','position','image','ar_image','type','flag')->where(['id' => $id, 'status' => 1])->orderBy('id', 'ASC')->first()->toArray();


        return  CustomTrait::SuccessJson($data);
    }



    public function GetByType($id)
{
        $data = Cms::select('id', 'title', 'ar_title','description','ar_description',
        'status','position','image','ar_image','type','flag')->where(['type' => $id, 'status' => 1])->orderBy('id', 'ASC')->get()->toArray();


        if(!$data){


        }


        return  CustomTrait::SuccessJson($data);
    }




    public function list()
    {

        $data = Cms::select('id', 'title','ar_title','description','ar_description',
        'status','position','type','image','flag')->where('status', 1)->orderBy('id', 'ASC')->get()->toArray();

        return  CustomTrait::SuccessJson($data);
    }





    public function update(Request $req)
    {


    

        // try {

            $cms = Cms::find($req->id);
            $cms->title = $req->title;
            $cms->ar_title = $req->ar_title;
            $cms->description = $req->description;
            $cms->ar_description = $req->ar_description;
            $cms->status = $req->status;
            $cms->flag = $req->flag;
            $cms->position = $req->position;
            $cms->image = $req->image;
            $cms->ar_image = $req->ar_image;
            $cms->updated_by = $req->user_id;
            $cms->save();


        // } catch (Exception $e) {

        //     Log::channel('product')->info($e->getMessage());

        //     $data = [
        //         'message' => "something went wronge"
        //     ];
        //     return  CustomTrait::ErrorJson($data);
        // }

 
        $data = [
            'message' => "Updated Successfully"
        ];


        return  CustomTrait::SuccessJson($data);
    }







    function delete(Request $req)
    {
    
            // try {

                $cms = Cms::find($req->id);
                $cms->status = 3;
                $cms->save();

            // } catch (Exception $e) {

            //     Log::channel('product')->info($e->getMessage());

            //     $data = [
            //         'message' => "something went wronge"
            //     ];
            //     return  CustomTrait::ErrorJson($data);
            // }

            $data = [
                'message' => 'Deleted Successfully'
            ];

            return  CustomTrait::SuccessJson($data);
        
    }






}
