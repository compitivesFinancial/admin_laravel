<?php

namespace App\Http\Controllers;

use App\Traits\CustomTrait;
use Illuminate\Http\Request;
use App\Models\Page;
use Exception;
use Illuminate\Support\Facades\Log;

class PageConttroller extends Controller
{


function __construct(Request $request){

        $this->lang = $request->header('Accept-Language');

}

    
    public function insert(Request $req)
    {


        // try {

            $page = new Page;
            $page->title = $req->title;
            $page->ar_title = $req->ar_title;
            $page->description = $req->description;
            $page->ar_description = $req->ar_description;
            $page->status = $req->status;
            $page->position = $req->position;
            $page->save();

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




    public function GetById($id)
    {

        $sql_title = $this->lang == 'en' ? 'title' : 'ar_title as title';
        $sql_description = $this->lang == 'en' ? 'description' : 'ar_description as description';

        $product = Page::select('id',$sql_title,$sql_description,
        'status','position')->where(['id' => $id, 'status' => 1])->orderBy('position', 'ASC')->first()->toArray();

        return  CustomTrait::SuccessJson($product);
    }





    public function list()
    {

        $sql_title = $this->lang == 'en' ? 'title' : 'ar_title as title';
        $sql_description = $this->lang == 'en' ? 'description' : 'ar_description as description';


        $data = Page::select('id', $sql_title,$sql_description,
        'status','position')->where('status', 1)->orderBy('position', 'ASC')->get()->toArray();


        return  CustomTrait::SuccessJson($data);
    }




    public function update(Request $req)
    {

    

        // try {

            $page = Page::find($req->id);
            $page->title = $req->title;
            $page->ar_title = $req->ar_title;
            $page->description = $req->description;
            $page->ar_description = $req->ar_description;
            $page->status = $req->status;
            $page->position = $req->position;
            $page->save();


        // } catch (Exception $e) {

        //     Log::channel('product')->info($e->getMessage());

        //     $data = [
        //         'message' => "something went wronge"
        //     ];
        //     return  CustomTrait::ErrorJson($data);
        // }

 
        $data = [
            'message' => "Page Updated"
        ];


        return  CustomTrait::SuccessJson($data);
    }







    // function delete(Request $req)
    // {


    //     $sql = "SELECT * FROM product_details WHERE product_id = $req->id";
    //     $info = DB::select(DB::raw($sql));


    //     if (count($info)) {


    //         $data = [
    //             'message' => "This is refered in other table"
    //         ];
    //         return  CustomTrait::ErrorJson($data);
    //     } else {


    //         try {

    //             $evo = Product::find($req->id);
    //             $evo->status = 3;
    //             $evo->save();
    //         } catch (Exception $e) {

    //             Log::channel('product')->info($e->getMessage());

    //             $data = [
    //                 'message' => "something went wronge"
    //             ];
    //             return  CustomTrait::ErrorJson($data);
    //         }

    //         $data = [
    //             'message' => 'Product Attribute Deleted'
    //         ];

    //         return  CustomTrait::SuccessJson($data);
    //     }
    // }






}
