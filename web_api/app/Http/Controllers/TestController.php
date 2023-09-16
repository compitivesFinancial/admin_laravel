<?php

namespace App\Http\Controllers;

use DB;
use Mail;
use App\Models\loan;
use App\Models\User;
use App\Http\Requests;
use App\Models\Product;
use App\Mail\MyDemoMail;
use App\Models\campaign;
use App\Traits\CustomTrait;
use App\Models\Campaign_log;
use Illuminate\Http\Request;
use App\Models\campaign_team;
use App\Models\email_template;

use App\Models\campaign_image ;



use App\Models\campaign_inverter;


use App\Models\borrower_statement;


use App\Models\investor_statement;
use App\Models\repayment_scheduling;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Crypt;


class TestController extends Controller
{


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


    public function myDemoMail()
    {

    $to_name = 'John Doe';
    $to_email = 'imrahulghatwal@gmail.com';
    $attachment = 'http://35.154.195.186/web_api/public/logo.png';
    $subject = 'Registration';


    $arr = [
      'to_name'=>$to_name,
      'to_email'=>$to_email,
      'subject'=>$subject
    ];


    $template = 'welcome';

    return CustomTrait::sendMail($arr,$template);


    }




    public function myDemoMailAttach()
    {

    $to_name = 'John Doe';
    $to_email = 'imrahulghatwal@gmail.com';
    $attachment = 'http://35.154.195.186/web_api/public/logo.png';
    $subject = 'Registration';


    $arr = [
      'to_name'=>$to_name,
      'to_email'=>$to_email,
      'subject'=>$subject,
      'attachment'=>$attachment
    ];


    $template = 'welcome';

    return CustomTrait::sendMailWithAttachment($arr,$template);

    }





    public function sendMail()
    {


      $id = 1;


    $data=email_template::select("id","message")->first()->toArray();

    // echo '<pre>';
    // print_r($data);

    $arr = explode(' ',$data['message']);

    // print_r($arr);
    // die;








    $message =" ";
    foreach($arr as $key=>$val){



      if(substr(trim($val), 0, 2)=='{%'){


       $result = substr(substr(trim($val), 0, -2), 2);


          $arrr = explode('.',$result);



          $data=User::where('id',$id)->first()->toArray();


          $table = $arrr[0];
          $coloum = $arrr[1];

          $sql = "select $coloum from $table where id = $id";

          $data = DB::select(DB::raw($sql));
          $product = json_decode(json_encode($data), true);


          $variable = $product[0][$arrr[1]];
          $message .=" $variable";

      }else{

          $message .=" $val";

      }







    }


    echo $message;

    }











    // public function myDemoMailAttach()
    // {

    // $to_name = 'John Doe';
    // $to_email = 'imrahulghatwal@gmail.com';
    // $attachment = 'http://35.154.195.186/web_api/public/logo.png';
    // $subject = 'Registration';


    // $arr = [
    //   'to_name'=>$to_name,
    //   'to_email'=>$to_email,
    //   'subject'=>$subject,
    //   'attachment'=>$attachment
    // ];


    // $template = 'welcome';

    // return CustomTrait::sendMailHtml($to_name,$to_email,$attachment,$body);

    // }




}
