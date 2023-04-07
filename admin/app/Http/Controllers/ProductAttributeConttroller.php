<?php

namespace App\Http\Controllers;

use App\Traits\CustomTrait;
use Illuminate\Http\Request;
use App\Models\ProductAttribute;
use App\Models\ProductAttributeDetail;
use DB;
use Exception;
use Illuminate\Support\Facades\Log;

class ProductAttributeConttroller extends Controller
{



    function list(Request $req)
    {

        $data = ProductAttribute::where('status', 1)->orderBy('position', 'ASC')->get()->toArray();
        return  CustomTrait::SuccessJson($data);
    }





    function GetById($id)
    {

        $productAttribute = ProductAttribute::select('id', 'title', 'ar_title', 'status', 'position')->where(['id' => $id, 'status' => 1])->orderBy('position', 'ASC')->first()->toArray();


        $productAttributedetail = ProductAttributeDetail::select('id', 'title', 'ar_title', 'subtitle', 'subtitle_ar', 'status', 'position')->where(['product_attribute_id' => $id, 'status' => 1])->orderBy('position', 'ASC')->get()->toArray();


        $productAttribute['product_detail'] = $productAttributedetail;

        $data = [
            'message' => 'Product Added'
        ];

        return  CustomTrait::SuccessJson($productAttribute);
    }









    public function insert(Request $req)
    {


        try {

            $preduct = new ProductAttribute;
            $preduct->title = $req->title;
            $preduct->ar_title = $req->ar_title;
            $preduct->multiselect = $req->multiselect;
            $preduct->status = $req->status;
            $preduct->position = $req->position;
            $preduct->save();
        } catch (Exception $e) {

            Log::channel('productattribute')->info($e->getMessage());

            $data = [
                'message' => "something went wronge"
            ];
            return  CustomTrait::ErrorJson($data);
        }


        foreach ($req->product_detail as $key => $val) {


            try {

                $preductDetail = new ProductAttributeDetail;
                $preductDetail->product_attribute_id = $preduct->id;
                $preductDetail->title = $val['title'];
                $preductDetail->ar_title = $val['ar_title'];
                $preductDetail->subtitle = $val['subtitle'];
                $preductDetail->subtitle_ar = $val['subtitle_ar'];
                $preductDetail->status = $val['status'];
                $preductDetail->position = $val['position'];
                $preductDetail->save();
            } catch (Exception $e) {

                Log::channel('productattribute')->info($e->getMessage());

                $data = [
                    'message' => "something went wronge"
                ];
                return  CustomTrait::ErrorJson($data);
            }
        }

        $data = [
            'message' => 'Product Added'
        ];

        return  CustomTrait::SuccessJson($data);
    }




    public function update(Request $req)
    {


        try {

            $preduct = ProductAttribute::find($req->id);
            $preduct->title = $req->title;
            $preduct->ar_title = $req->ar_title;
            $preduct->multiselect = $req->multiselect;
            $preduct->status = $req->status;
            $preduct->position = $req->position;
            $preduct->save();
        } catch (Exception $e) {

            Log::channel('productattribute')->info($e->getMessage());

            $data = [
                'message' => "something went wronge"
            ];
            return  CustomTrait::ErrorJson($data);
        }




        foreach ($req->product_detail as $key => $val) {




            if (!isset($val['id']) || $val['id'] == '') {


                try {

                    $preductDetail = new ProductAttributeDetail;
                    $preductDetail->product_attribute_id = $req->id;
                    $preductDetail->title = $val['title'];
                    $preductDetail->ar_title = $val['ar_title'];
                    $preductDetail->subtitle = $val['subtitle'];
                    $preductDetail->subtitle_ar = $val['subtitle_ar'];
                    $preductDetail->status = $val['status'];
                    $preductDetail->position = $val['position'];
                    $preductDetail->save();
                } catch (Exception $e) {

                    Log::channel('productattribute')->info($e->getMessage());


                    $data = [
                        'message' => "something went wronge3"
                    ];
                    return  CustomTrait::ErrorJson($data);
                }
            } else {




                try {

                    $preDetail = ProductAttributeDetail::find($val['id']);
                    $preDetail->product_attribute_id = $req->id;
                    $preDetail->title = $val['title'];
                    $preDetail->ar_title = $val['ar_title'];
                    $preDetail->subtitle = $val['subtitle'];
                    $preDetail->subtitle_ar = $val['subtitle_ar'];
                    $preDetail->status = $val['status'];
                    $preDetail->position = $val['position'];
                    $preDetail->save();
                } catch (Exception $e) {

                    Log::channel('productattribute')->info($e->getMessage());

                    $data = [
                        'message' => "something went wronge4"
                    ];
                    return  CustomTrait::ErrorJson($data);
                }
            }
        }


        $data = [
            'message' => 'Product Updated'
        ];

        return  CustomTrait::SuccessJson($data);
    }





    function delete(Request $req)
    {

        $sql = "SELECT * FROM productattributedetails WHERE product_attribute_id = $req->id";
        $info = DB::select(DB::raw($sql));


        if (count($info)) {


            $data = [
                'message' => "This is refered in other table"
            ];
            return  CustomTrait::ErrorJson($data);
        } else {


            try {

                $preduct = ProductAttribute::find($req->id);
                $preduct->status = 3;
                $preduct->save();
            } catch (Exception $e) {

                Log::channel('productattribute')->info($e->getMessage());

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




    public function deleteProDetail(Request $req)
    {

        $sql = "SELECT * FROM product_details WHERE FIND_IN_SET($req->id,product_attribute_detail_id)";
        $info = DB::select(DB::raw($sql));


        if (count($info)) {

            $data = [
                'message' => "This is refered in other table"
            ];
            return  CustomTrait::ErrorJson($data);
        } else {

            try {

                $preduct = ProductAttributeDetail::find($req->id);
                $preduct->status = 3;
                $preduct->save();
            } catch (Exception $e) {

                Log::channel('productattribute')->info($e->getMessage());

                $data = [
                    'message' => "something went wronge"
                ];
                return  CustomTrait::ErrorJson($data);
            }


            $data = [
                'message' => 'Product Attribute Detail Deleted'
            ];

            return  CustomTrait::SuccessJson($data);
        }
    }
}
