<?php

namespace App\Http\Controllers;

use App\Traits\CustomTrait;
use Illuminate\Http\Request;
use App\Models\Page;
use Exception;
use Illuminate\Support\Facades\DB ;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class PageConttroller extends Controller
{


function __construct(Request $request){

    App::setLocale($request->header('Accept-Language'));

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




    public function GetById(Request $req,$id)
    {

      $user_id = $req->user_id;
        $sql_title = $this->lang == 'en' ? 'title' : 'ar_title as title';
         $sql_description = $this->lang == 'en' ? 'description' : 'ar_description as description';
         $sql_description = 'description';
        $allpagesparams = DB::table('pages_parameters')->get();

        $product = Page::select('id',$sql_title,$sql_description,'image',
        'status','position')->where(['id' => $id, 'status' => 1])->orderBy('position', 'ASC')->first()->toArray();
       // $product['description'] = strip_tags($product['description']);
       foreach($allpagesparams as $parms){
        $product['description'] = str_replace("{%".$parms->keyword."%}",$parms->replace_with,$product['description']);
       }
      if(isset($req->user_id)){
       $arr = explode(' ',$product['description']);

        $message ="";
        foreach($arr as $key=>$val){
           // echo "-------<pre>------";
            //print_r($val);
            //echo "----------<pre>------";
      if(substr(trim($val), 0, 2)=='{%'){

       $result = substr(substr(trim($val), 0, -2), 2);
       $arrr = explode('.',$result);

        if(isset($arrr[1])){
          $table = $arrr[0];
          $coloum = $arrr[1];
           if($table=="users"){
          $sql = "select $coloum from $table where id = $user_id";
           }else {
            $sql = "select $coloum from $table where user_id =  $user_id";
           }
          $datasql = DB::select(DB::raw($sql));
          $tableData = json_decode(json_encode($datasql), true);


          $variable = $tableData[0][$arrr[1]];
          $message .=" $variable";
        }
      }else{

          $message .=" $val";

      }

    }

       $product['description'] =$message;
}


        $product = Page::select('id',$sql_title,$sql_description,'image',
        'status','position')->where(['id' => $id, 'status' => 1])->orderBy('position', 'ASC')->first()->toArray();

        foreach($allpagesparams as $parm){
        $product['description'] = str_replace($parm->keyword,$parm->replace_with,$product['description']);


       }

       $product['description1'] =$product['description'];

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
