<?php

namespace App\Http\Controllers;

use App\Traits\CustomTrait;
use Illuminate\Http\Request;
use App\Models\Email;
use App\Models\Email_template_type;

class EmailController extends Controller
{


   
  public function getTemplateType()
  {

    $data = Email_template_type::get();
    return  CustomTrait::SuccessJson($data);

  }



  


  public function listTemplate(Request $req)
  {

    $data = Email::orderBy('id', 'DESC')->get()->toArray();
    return  CustomTrait::SuccessJson($data);

  }


  public function getById($id)
  {

    $data = Email::where('id', $id)->first()->toArray();
    return  CustomTrait::SuccessJson($data);

  }



  

  public function insertTemplate(Request $req)
  {


    // $req->module

    $emaildata = Email::where(['module'=> $req->module,'type'=> $req->type])->first();


    if($emaildata){

      $data = [
        'message' => "Template already exist."
      ];       

      return  CustomTrait::ErrorJson($data);

    }

 


    try{

    $email = new Email;
    $email->title = $req->title;
    $email->ar_title = $req->ar_title;
    $email->subject= $req->subject;
    $email->ar_subject= $req->ar_subject;
    $email->message= $req->message;
    $email->ar_message= $req->ar_message;
    $email->module= $req->module;
    $email->type= $req->type;
    $email->save();


  }catch(Exception $e) {
      
    Log::channel('email')->info($e->getMessage());
    $data = [
        'message' => "something went wrong"
    ];           
    return  CustomTrait::ErrorJson($data);

}
   
    
    $data = [
      'message' => "Email Template Added Successfull."
    ];       
    return  CustomTrait::SuccessJson($data);

  }




  public function updateTemplate(Request $req)
  {
  
    $email=Email::find($req->id);
    $email->title = $req->title;
    $email->ar_title = $req->ar_title;
    $email->subject= $req->subject;
    $email->ar_subject= $req->ar_subject;
    $email->message= $req->message;
    $email->ar_message= $req->ar_message;
    $email->module= $req->module;
    $email->type= $req->type;
    $email->save();
  
    
    $data = [
      'message' => "Email Template Updated Successfull."
    ];       
    return  CustomTrait::SuccessJson($data);

  }
  


  public function sendMail(Request $req)
  {


  $id = $req->id;
  $type = $req->type;


  $result = CustomTrait::sendMailHtml($id,$type);
  return  CustomTrait::SuccessJson($result);


  }













  public function myDemoSms()
  {


    $six_digit_random_number = 123456;

    $message=urlencode("'".$six_digit_random_number ."' is your verification code for Bloss");
    $mobile = '8600414254';
    $country_code = '+91';


    $arr = [
      'message'=>$message,
      'mobile'=>$mobile,
      'country_code'=>$country_code
    ];

    return CustomTrait::sendSMS($arr);


    }









}
