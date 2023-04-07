<?php

namespace App\Http\Controllers;

use App\Traits\CustomTrait;
use Illuminate\Http\Request;
use App\Models\ProductAttribute;
use App\Models\ProductAttributeDetail;
use App\Models\Product;
use App\Models\ProductDetail;
use DB;
use Exception;
use Illuminate\Support\Facades\Log;

class ProductConttroller extends Controller
{




    public function GetById($id)
    {

        $product = Product::select('id', 'title', 'ar_title')->where(['id' => $id, 'status' => 1])->orderBy('position', 'ASC')->first()->toArray();


        $sql = "select product_details.id,product_details.product_attribute_id,product_details.product_attribute_detail_id,
            
            (select GROUP_CONCAT(productattributedetails.title) from productattributedetails left join product_attributes 
            ON productattributedetails.product_attribute_id = product_attributes.id 
            where find_in_set(productattributedetails.id ,replace(product_details.product_attribute_detail_id,' ','')) order by product_attributes.position) AS 'value'
            
            from product_details where product_details.product_id = $id group by id,product_id,product_attribute_id,product_attribute_detail_id ";


        $info = DB::select(DB::raw($sql));
        $product['product_detail'] = json_decode(json_encode($info), true);


        return  CustomTrait::SuccessJson($product);
    }



    public function productAttributelist()
    {

        $product_attribute = ProductAttribute::select('id', 'title', 'ar_title', 'status', 'position', 'multiselect')->where('status', 1)->orderBy('position', 'ASC')->get()->toArray();


        foreach ($product_attribute as $key => $val) {

            $id = $val['id'];

            $ProductAttributeDetail = ProductAttributeDetail::select('id', 'product_attribute_id', 'title', 'ar_title', 'subtitle', 'subtitle_ar', 'status', 'position')->where(['product_attribute_id' => $id, 'status' => 1])->orderBy('position', 'ASC')->get()->toArray();

            $product_attribute[$key]['detail'] = $ProductAttributeDetail;
        }


        return  CustomTrait::SuccessJson($product_attribute);
    }





    public function list()
    {


        $product = Product::select('id', 'title', 'ar_title')->where('status', 1)->orderBy('position', 'ASC')->get()->toArray();


        foreach ($product as $key => $val) {

            $id = $val['id'];


            $sql = "select
            
            (select GROUP_CONCAT(productattributedetails.title) from productattributedetails left join product_attributes 
            ON productattributedetails.product_attribute_id = product_attributes.id 
            where find_in_set(productattributedetails.id ,replace(product_details.product_attribute_detail_id,' ','')) order by product_attributes.position) AS 'value'
            
            from product_details where product_details.product_id = $id group by id,product_id,product_attribute_id,product_attribute_detail_id ";


            $info = DB::select(DB::raw($sql));
            $product[$key]['product_attribute_detail'] = json_decode(json_encode($info), true);
        }


        return  CustomTrait::SuccessJson($product);
    }






    public function insert(Request $req)
    {


        try {

            $preduct = new Product;
            $preduct->title = $req->title;
            $preduct->ar_title = $req->ar_title;
            $preduct->status = $req->status;
            $preduct->position = $req->position;
            $preduct->save();
        } catch (Exception $e) {

            Log::channel('product')->info($e->getMessage());

            $data = [
                'message' => "something went wronge"
            ];
            return  CustomTrait::ErrorJson($data);
        }


        foreach ($req->product_detail as $key => $val) {


            try {

                $preductDetail = new ProductDetail;
                $preductDetail->product_id = $preduct->id;
                $preductDetail->product_attribute_id = $val['product_attribute_id'];
                $preductDetail->product_attribute_detail_id = $val['product_attribute_detail_id'];
                $preductDetail->status = 1;
                $preductDetail->save();
            } catch (Exception $e) {

                Log::channel('product')->info($e->getMessage());

                $data = [
                    'message' => "something went wronge"
                ];
                return  CustomTrait::ErrorJson($data);
            }
        }


        $data = [
            'message' => "Product Added"
        ];
        return  CustomTrait::SuccessJson($data);
    }























    public function update(Request $req)
    {

        try {

            $preduct = Product::find($req->id);
            $preduct->title = $req->title;
            $preduct->ar_title = $req->ar_title;
            $preduct->status = $req->status;
            $preduct->position = $req->position;
            $preduct->save();
        } catch (Exception $e) {

            Log::channel('product')->info($e->getMessage());

            $data = [
                'message' => "something went wronge"
            ];
            return  CustomTrait::ErrorJson($data);
        }




        foreach ($req->product_detail as $key => $val) {



            if (!isset($val['id']) || $val['id'] == '') {

                try {

                    $preductDetail = new ProductDetail;
                    $preductDetail->product_id = $req->id;
                    $preductDetail->product_attribute_id = $val['product_attribute_id'];
                    $preductDetail->product_attribute_detail_id = $val['product_attribute_detail_id'];
                    $preductDetail->status = 1;
                    $preductDetail->save();
                } catch (Exception $e) {

                    Log::channel('product')->info($e->getMessage());

                    $data = [
                        'message' => "something went wronge"
                    ];
                    return  CustomTrait::ErrorJson($data);
                }
            } else {


                try {

                    $preductDetail = ProductDetail::find($val['id']);
                    $preductDetail->product_id = $req->id;
                    $preductDetail->product_attribute_id = $val['product_attribute_id'];
                    $preductDetail->product_attribute_detail_id = $val['product_attribute_detail_id'];
                    $preductDetail->status = 1;
                    $preductDetail->save();
                } catch (Exception $e) {

                    Log::channel('product')->info($e->getMessage());

                    $data = [
                        'message' => "something went wronge"
                    ];
                    return  CustomTrait::ErrorJson($data);
                }
            }
        }


        $data = [
            'message' => "Product Updated"
        ];
        return  CustomTrait::SuccessJson($data);
    }







    function delete(Request $req)
    {


        $sql = "SELECT * FROM product_details WHERE product_id = $req->id";
        $info = DB::select(DB::raw($sql));


        if (count($info)) {


            $data = [
                'message' => "This is refered in other table"
            ];
            return  CustomTrait::ErrorJson($data);
        } else {


            try {

                $evo = Product::find($req->id);
                $evo->status = 3;
                $evo->save();
            } catch (Exception $e) {

                Log::channel('product')->info($e->getMessage());

                $data = [
                    'message' => "something went wronge"
                ];
                return  CustomTrait::ErrorJson($data);
            }

            $data = [
                'message' => 'Product Attribute Deleted'
            ];

            return  CustomTrait::SuccessJson($data);
        }
    }








    public function deleteProductDetail(Request $req)
    {



        try {

            $preduct = ProductDetail::find($req->id);
            $preduct->status = 3;
            $preduct->save();
        } catch (Exception $e) {

            Log::channel('product')->info($e->getMessage());

            $data = [
                'message' => "something went wronge"
            ];
            return  CustomTrait::ErrorJson($data);
        }


        $data = [
            'message' => 'Evaluation Detail Deleted'
        ];

        return  CustomTrait::SuccessJson($data);
    }
}
