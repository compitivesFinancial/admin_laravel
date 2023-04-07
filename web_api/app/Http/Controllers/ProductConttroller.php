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


    public function list()
    {


        
      $sql_title = $this->lang == 'en' ? 'title' : 'ar_title as title';

           $product=Product::select('id',$sql_title)->where('status', 1)->orderBy('position', 'ASC')->get()->toArray();
            
          
            foreach($product as $key=>$val){

             $id = $val['id'];


            $sql = "select
            
            (select GROUP_CONCAT(productattributedetails.$sql_title) from productattributedetails left join product_attributes 
            ON productattributedetails.product_attribute_id = product_attributes.id 
            where find_in_set(productattributedetails.id ,replace(product_details.product_attribute_detail_id,' ','')) order by product_attributes.position) AS 'value'
            
            from product_details where product_details.product_id = $id group by id,product_id,product_attribute_id,product_attribute_detail_id ";


             $info = DB::select(DB::raw($sql));
             $product[$key]['product_attribute_detail'] = json_decode(json_encode($info), true);

            }

            
            return  CustomTrait::SuccessJson($product);
        
    }




  

   



















 




    
    
}