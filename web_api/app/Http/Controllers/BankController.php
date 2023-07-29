<?php

namespace App\Http\Controllers;

use App\Traits\CustomTrait;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BankController extends Controller
{

    public $token;
    public function accessToken()
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://sandbox.anb.com.sa/v1/b2b-auth/oauth/accesstoken',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => 'grant_type=client_credentials&client_id=UXwpy8Q8XBjBeYHZAA2XB1gxDcSvoRFI&client_secret=2bAx0UMZ1gRta6Gr',
            CURLOPT_HTTPHEADER => array(
                'Accept: application/json',
                'Content-Type: application/x-www-form-urlencoded'
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        $res = json_decode($response);
        $this->token = $res->access_token;
    }

    public function payment(Request $req)
    {
        $this->accessToken();
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://sandbox.anb.com.sa/v1/payment/json',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => '{
  "sequenceNumber": "138",
  "valueDate": "210414",
  "currency": "SAR",
  "amount": "' . $req->amount . '",
  "orderingParty": "SWAGGER",
  "feeIncluded": false,
  "orderingPartyAddress1": "An Nafel",
  "orderingPartyAddress2": "Riyadh",
  "orderingPartyAddress3": "Saudi Arabia",
  "debitAccount": "0108057386290014",
  "destinationBankBIC": "ARNBSARI",
  "channel": "ANB",
  "creditAccount": "0108061198800019",
  "beneficiaryName": "Saud",
  "beneficiaryAddress1": "KSA",
  "beneficiaryAddress2": "Riyadh",
  "narrative": "ANB To ANB Transfer",
  "transactionComment": "ANB to ANB works",
  "purposeOfTransfer": "38"
}',
            CURLOPT_HTTPHEADER => array(
                'Authorization: Bearer ' . $this->token . '',
                'Content-Type: text/plain'
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        $res = json_decode($response);
        return CustomTrait::SuccessJson($res);
    }


    public function bankBlance(Request $req)
    {
        $this->accessToken();
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://sandbox.anb.com.sa/v1/report/account/balance?accountNumber=' . $req->accountNumber . '',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => array(
                'Authorization: Bearer ' . $this->token . ''
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);
        return $response;
    }
}
