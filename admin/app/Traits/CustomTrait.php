<?php
namespace App\Traits;


use App\Models\Email;
use App\Models\User;
use App\Models\Email_template_type;
use Mail;
use Crypt;
use DB;



trait CustomTrait
{

    public function createAccountNumber($id='',$type,$opportunity='')
    {
       

        if($id !=''){
            $id=$id; 
        }

        if($opportunity !=''){
            $id=$opportunity; 
        }

        // echo $id;
        // echo '--';
        // echo $type;
        // die;
        


        $n8digit=str_pad($id, 8, '0', STR_PAD_LEFT);


        $n11digit=$type.$n8digit;
        $n14digit='008'.$n11digit;
      

        // 100000166

        $oddsum=$n14digit[0]+$n14digit[2]+$n14digit[4]+$n14digit[6]+$n14digit[8]+$n14digit[10]+$n14digit[12];
        $evensum=$n14digit[1]+$n14digit[3]+$n14digit[5]+$n14digit[7]+$n14digit[9]+$n14digit[11]+$n14digit[13];
        $checkdigit1=9-((($oddsum*3)+$evensum)%10);

        $n15digit=$n14digit.$checkdigit1;







        $n20digit='30100'.$n15digit;

        $temp=$n20digit.'281000';
        $checkdigit2=98- CustomTrait::bcmod($temp, '97');
        $checkdigit2=str_pad($checkdigit2, 2, '0', STR_PAD_LEFT);
        $n22digit=$checkdigit2.$n20digit;
        $n24digit='SA'.$n22digit;


        // echo $n24digit;
        // die;


        return $n24digit;



    }


 

    public function bcmod($x, $y)
    {
        $take = 5;    
        $mod = '';
        do
        {
            $a = (int)$mod.substr( $x, 0, $take );
            $x = substr( $x, $take );
            $mod = $a % $y;   
        }
        while ( strlen($x) );
        return (int)$mod;
    }


    public function sendSMS($arr)
{

     $AppSid = config('constants.welcome.AppSid');
     $SenderID = config('constants.welcome.SenderID');
   

     $message = $arr['message'];
     $arr['mobile'];
     $arr['country_code'];
  

    $to=$arr['country_code'].$arr['mobile'];

    $api_params = '?AppSid='.$AppSid.'&SenderID='.$SenderID.'&Recipient='.$to.'&Body='.$message.'&responseType=JSON&CorrelationID=1&baseEncode=true&statusCallback=sent&async=false'; 

    $smsGatewayUrl = "http://el.cloud.unifonic.com/rest/SMS/messages";

    $url = $smsGatewayUrl.$api_params;



    // echo $url = "https://www.google.com/";


    $ch = curl_init($url);  
    curl_setopt($ch, CURLOPT_TIMEOUT, 5);  
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);  
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);  
    echo $response = curl_exec($ch);
    // echo $res = json_decode($response);

}
 

public function sendOtpMail($otp,$email)
{


    $to_email = $email;
    // $attachment = 'http://35.154.195.186/web_api/public/logo.png';
    $subject = "Email varification";
    $body = $message = "Your otp for email verification is $otp";


    $body = '<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Email</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    
    <body>
        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <td align="center">
                        <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td align="center" valign="top"
                                        
                                        bgcolor="#fff" >
                                        <table class="col-600" width="600" height="400" border="0" align="center"
                                            cellpadding="0" cellspacing="0" style="background-color:#ffffff94;">
     
                                            <tbody>
                                                <!-- <tr>
                                                    <td height="40"></td>
                                                </tr> -->
    
    
                                                <tr>
                                                    <td align="center" style="line-height: 0px;">
                                                        <img style="display:block; line-height:0px; font-size:0px; border:0px;"
                                                            src="http://35.154.195.186/web_api/public/logo.png"
                                                            width="150"  alt="logo">
                                                    </td>
                                                </tr>
    
    
                                                <tr>
                                                    <td align="left"
                                                        style="font-family: "Lato", sans-serif; font-size:15px; color:#000; line-height:24px; font-weight: 300;">
                                                        '.$message.'
                                                    </td>
                                                </tr>
    
    
                                                <tr>
                                                    <td height="50"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>              
    
                <tr>
                    <td height="5"></td>
                </tr>
    
    
                <!-- END 3 BOX SHOWCASE -->
    
    
                <!-- START WHAT WE DO -->
    
                <tr>
                    <td align="center">
                        <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0"
                            style="margin-left:20px; margin-right:20px;">
    
    
    
                            <tbody>
                               
                                <!-- START FOOTER -->
    
                                <tr>
                                    <td align="center">
                                        <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0"
                                            style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
                                            <tbody>
                                                
                                                <tr>
                                                    <td align="center" bgcolor="#160034"
                                                        height="185">
                                                        <table class="col-600" width="600" border="0" align="center"
                                                            cellpadding="0" cellspacing="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td height="25"></td>
                                                                </tr>
    
                                                            <tr>
                                                                <td align="center"
                                                                    style="font-family: "Raleway",  sans-serif; font-size:26px; font-weight: 500; color:#fff !important;">
                                                                    Follow us for some cool stuffs</td>
                                                            </tr>

    
    
                                                                <tr>
                                                                    <td height="25"></td>
                                                                </tr>
    
    
    
                                                            </tbody>
                                                        </table>
                                                        <table align="center" width="35%" border="0" cellspacing="0"
                                                            cellpadding="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center" width="30%"
                                                                        style="vertical-align: top;">
                                                                        <a href="#"
                                                                            > <img
                                                                                src="https://designmodo.com/demo/emailtemplate/images/icon-fb.png">
                                                                        </a>
                                                                    </td>
    
                                                                    <td align="center" class="margin" width="30%"
                                                                        style="vertical-align: top;">
                                                                        <a href="#"
                                                                            > <img
                                                                                src="https://designmodo.com/demo/emailtemplate/images/icon-twitter.png">
                                                                        </a>
                                                                    </td>
    
                                                                    <td align="center" width="30%"
                                                                        style="vertical-align: top;">
                                                                        <a href="#"
                                                                            > <img
                                                                                src="https://designmodo.com/demo/emailtemplate/images/icon-googleplus.png">
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
    
    
    
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
    
                <!-- END FOOTER -->
    
            </tbody>
        </table>
    </body>
    
    </html>';
  
   

//     Mail::send([], [], function($message) use ($to_email,$subject,$body) {
//     $message->from('rahulghatwal@imcrinox.com','Ice Web');
//     $message->to($to_email);
//     $message->subject($subject);
//     $message->bcc('rahulghatwal@imcrinox.com','My bcc Name');
//     $message->setBody($body, 'text/html');

// });



    $dataout = [
        'message' => "Email sent Successfull."
      ]; 


    return $dataout;
 



}



public function sendMailHtml($id,$type,$otherid='')
{


  

    $dataEmail=Email::select("id","message","ar_message","subject","ar_subject")->where('module',$type)->first()->toArray();
    $arr = explode(' ',$dataEmail['message']);
  


    $message ="";

    $p=0;
    foreach($arr as $key=>$val){
  
  
      if(substr(trim($val), 0, 2)=='{%'){
  
       $result = substr(substr(trim($val), 0, -2), 2);
       $arrr = explode('.',$result);
  
  
  
          $data=User::where('id',$id)->first()->toArray();
  
          $table = $arrr[0];
          $coloum = $arrr[1];
  
          if($p == 0){
           $sql = "select $coloum from $table where id = $id";
          }else{
           $sql = "select $coloum from $table where id = $otherid";
          }
         
          $datasql = DB::select(DB::raw($sql));
          $tableData = json_decode(json_encode($datasql), true);

 
  
  
          $variable = $tableData[0][$arrr[1]];
          $message .=" $variable";
  
        $p++;
      }else{
  
          $message .=" $val";
  
      }
  
    }
  
    
  
    //get user data
    $data=User::where('id',$id)->first()->toArray();
  
    
    $to_name = $data['name'];
    $to_email = $data['email'];
    // $attachment = 'http://35.154.195.186/web_api/public/logo.png';
    $subject = $dataEmail['subject'];
    // $body = $message;


    $body = '<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Email</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    
    <body>
        <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
            <tbody>
                <tr>
                    <td align="center">
                        <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0">
                            <tbody>
                                <tr>
                                    <td align="center" valign="top"
                                        
                                        bgcolor="#fff" >
                                        <table class="col-600" width="600" height="400" border="0" align="center"
                                            cellpadding="0" cellspacing="0" style="background-color:#ffffff94;">
     
                                            <tbody>
                                                <!-- <tr>
                                                    <td height="40"></td>
                                                </tr> -->
    
    
                                                <tr>
                                                    <td align="center" style="line-height: 0px;">
                                                        <img style="display:block; line-height:0px; font-size:0px; border:0px;"
                                                            src="http://35.154.195.186/web_api/public/logo.png"
                                                            width="150"  alt="logo">
                                                    </td>
                                                </tr>
    
    
                                                <tr>
                                                    <td align="left"
                                                        style="font-family: "Lato", sans-serif; font-size:15px; color:#000; line-height:24px; font-weight: 300;">
                                                        '.$message.'
                                                    </td>
                                                </tr>
    
    
                                                <tr>
                                                    <td height="50"></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>              
    
                <tr>
                    <td height="5"></td>
                </tr>
    
    
                <!-- END 3 BOX SHOWCASE -->
    
    
                <!-- START WHAT WE DO -->
    
                <tr>
                    <td align="center">
                        <table class="col-600" width="600" border="0" align="center" cellpadding="0" cellspacing="0"
                            style="margin-left:20px; margin-right:20px;">
    
    
    
                            <tbody>
                               
                                <!-- START FOOTER -->
    
                                <tr>
                                    <td align="center">
                                        <table align="center" width="100%" border="0" cellspacing="0" cellpadding="0"
                                            style=" border-left: 1px solid #dbd9d9; border-right: 1px solid #dbd9d9;">
                                            <tbody>
                                                
                                                <tr>
                                                    <td align="center" bgcolor="#160034"
                                                        height="185">
                                                        <table class="col-600" width="600" border="0" align="center"
                                                            cellpadding="0" cellspacing="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td height="25"></td>
                                                                </tr>
    
                                                            <tr>
                                                                <td align="center"
                                                                    style="font-family: "Raleway",  sans-serif; font-size:26px; font-weight: 500; color:#fff !important;">
                                                                    Follow us for some cool stuffs</td>
                                                            </tr>

    
    
                                                                <tr>
                                                                    <td height="25"></td>
                                                                </tr>
    
    
    
                                                            </tbody>
                                                        </table>
                                                        <table align="center" width="35%" border="0" cellspacing="0"
                                                            cellpadding="0">
                                                            <tbody>
                                                                <tr>
                                                                    <td align="center" width="30%"
                                                                        style="vertical-align: top;">
                                                                        <a href="#"
                                                                            > <img
                                                                                src="https://designmodo.com/demo/emailtemplate/images/icon-fb.png">
                                                                        </a>
                                                                    </td>
    
                                                                    <td align="center" class="margin" width="30%"
                                                                        style="vertical-align: top;">
                                                                        <a href="#"
                                                                            > <img
                                                                                src="https://designmodo.com/demo/emailtemplate/images/icon-twitter.png">
                                                                        </a>
                                                                    </td>
    
                                                                    <td align="center" width="30%"
                                                                        style="vertical-align: top;">
                                                                        <a href="#"
                                                                            > <img
                                                                                src="https://designmodo.com/demo/emailtemplate/images/icon-googleplus.png">
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
    
    
    
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
    
                <!-- END FOOTER -->
    
            </tbody>
        </table>
    </body>
    
    </html>';
  
   

//     Mail::send([], [], function($message) use ($to_email,$subject,$body) {
//     $message->from('rahulghatwal@imcrinox.com','Ice Web');
//     $message->to($to_email);
//     $message->subject($subject);
//     $message->bcc('rahulghatwal@imcrinox.com','My bcc Name');
//     $message->setBody($body, 'text/html');

// });



    $dataout = [
        'message' => "Email sent Successfull."
      ]; 


    return $dataout;
 

}




    
    public function SuccessJson($data){

 

        return response()->json([
            'status' => true,
            'response'=> $data,
            ],200);

            // base64_encode(
     

                // $test = Crypt::encrypt(response()->json([
                // 'status' => true,
                // 'response'=> $data,
                // ],200));

                // echo Crypt::decrypt($test,true);
                // die;


                // return Crypt::encrypt(response()->json([
                //     'status' => true,
                //     'response'=> $data,
                //     ],200));
                
                

    }


    
  
    public function ErrorJson($data)
    {
     

        return response()->json([
            'status' => false,
            'response'=> $data,
            ],200);

    }



}