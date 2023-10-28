<?php

namespace App\Http\Controllers;

use DateTime;

use Carbon\Carbon;
use App\Models\Yaqeen;
use App\Traits\CustomTrait;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class YaqeenController extends Controller
{

    public function YageenAuth()
    {

        //ALTANAFUSIAH_FINANCE_CO_TRIAL_YAK
        //kXEB975WKfzsD6eyJYoM
        $curl = curl_init("https://yakeencore.api.elm.sa/api/v1/yakeen/login?Username=ALTANAFUSIAH_FINANCE_CO_YAK&Password=46KIG7PZ6hGhO7FWc6TQ");
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://yakeencore.api.elm.sa/api/v1/yakeen/login?Username=ALTANAFUSIAH_FINANCE_CO_YAK&Password=46KIG7PZ6hGhO7FWc6TQ",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_CUSTOMREQUEST => 'GET',
            CURLOPT_HTTPHEADER => array(
                'app-id: 6a8020cb',
                'app-key: 4a5cf5aa0d113fbbe560ec714a043e67',
            ),
        ));
        $response = curl_exec($curl);
        curl_close($curl);
        $res = json_decode($response);

        $yaqen = Yaqeen::create([
            'token' => $res->access_token,
        ]);

        return $yaqen;
    }




    public function yaqenIqamaSaudi(Request $req)
    {

        $yaqenToken = Yaqeen::get()->last();
        $currentDate = Carbon::now();
        $time = $yaqenToken['created_at'];
        $total = $currentDate->diffInHours($time);
        if ($yaqenToken == null) {

            $this->YageenAuth();
            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://yakeencore.api.elm.sa/api/v1/yakeen/data?iqama=' . $req['iqama']. '&birthDateG=' . $req['birthDateG'] . '',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'GET',
                CURLOPT_HTTPHEADER => array(
                    'usage-code: USC90010',
                    'operator-Id: 2130635150',
                    'app-id: 6a8020cb',
                    'app-key: 4a5cf5aa0d113fbbe560ec714a043e67',
                    'service-Identifier: 29c3c467-3192-471f-9e66-c52fb92f0dd4',
                    "Authorization: Bearer {$yaqenToken['token']}",
                    'Cookie: 9fdd0c3c00e2cddb1a94180204e9dd86=c2a4c639340fec052c525d51fb276a90; NSC_3Tdbmf-Pqfotijgu.w4=14b5a3d94456a1593f35e91f73179db4ec5cc88f5d93141396964eb279cec105ef88e639; TS01e2737f=015a42f27ef682d8d7cca99bab3e6369cf4f9033a8d6f503564b242fa2853fba25d2ab008701882ec8dc4f461a12127f7f6f23b20bc2c005282198ec1ce9a8e66978a3c8497893e5a922c43d214636ba1bea0fba11'
                ),
            ));
            $response = curl_exec($curl);
            curl_close($curl);
            $res = json_decode($response);
            return CustomTrait::SuccessJson($res);

        } elseif ($total >= 24 || $total == null) {

            Yaqeen::Where('token', $yaqenToken['token'])->delete();
            $this->YageenAuth();
            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://yakeencore.api.elm.sa/api/v1/yakeen/data?iqama=' . $req['iqama'] . '&birthDateG=' .$req['birthDateG']. '',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'GET',
                CURLOPT_HTTPHEADER => array(
                    'usage-code: USC90006',
                    'operator-Id: 2130635150',
                    'app-id: 6a8020cb',
                    'app-key: 4a5cf5aa0d113fbbe560ec714a043e67',
                    'service-Identifier: 29c3c467-3192-471f-9e66-c52fb92f0dd4',
                    "Authorization: Bearer {$yaqenToken['token']}",
                    'Cookie: 9fdd0c3c00e2cddb1a94180204e9dd86=c2a4c639340fec052c525d51fb276a90; NSC_3Tdbmf-Pqfotijgu.w4=14b5a3d94456a1593f35e91f73179db4ec5cc88f5d93141396964eb279cec105ef88e639; TS01e2737f=015a42f27ef682d8d7cca99bab3e6369cf4f9033a8d6f503564b242fa2853fba25d2ab008701882ec8dc4f461a12127f7f6f23b20bc2c005282198ec1ce9a8e66978a3c8497893e5a922c43d214636ba1bea0fba11'
                ),
            ));
            $response = curl_exec($curl);
            curl_close($curl);
            $res = json_decode($response);
            return CustomTrait::SuccessJson($res);

        } else {

            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://yakeencore.api.elm.sa/api/v1/yakeen/data?iqama=' .$req['iqama'] . '&birthDateG=' .$req['birthDateG']. '',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'GET',
                CURLOPT_HTTPHEADER => array(
                    'usage-code: USC90006',
                    'operator-Id: 2130635150',
                    'app-id: 6a8020cb',
                    'app-key: 4a5cf5aa0d113fbbe560ec714a043e67',
                    'service-Identifier: 29c3c467-3192-471f-9e66-c52fb92f0dd4',
                    "Authorization: Bearer {$yaqenToken['token']}",
                    'Cookie: 9fdd0c3c00e2cddb1a94180204e9dd86=c2a4c639340fec052c525d51fb276a90; NSC_3Tdbmf-Pqfotijgu.w4=14b5a3d94456a1593f35e91f73179db4ec5cc88f5d93141396964eb279cec105ef88e639; TS01e2737f=015a42f27ef682d8d7cca99bab3e6369cf4f9033a8d6f503564b242fa2853fba25d2ab008701882ec8dc4f461a12127f7f6f23b20bc2c005282198ec1ce9a8e66978a3c8497893e5a922c43d214636ba1bea0fba11'
                ),
            ));
            $response = curl_exec($curl);
            curl_close($curl);
            $res = json_decode($response);
            return CustomTrait::SuccessJson($res);
        }
    }








    public function yaqeensaudi(Request $req)
    {
        $yaqenToken = Yaqeen::get()->last();
        $currentDate = Carbon::now();
        $time = $yaqenToken['created_at'];
        $total = $currentDate->diffInHours($time);
        if ($yaqenToken == null) {
            $this->YageenAuth();

            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://yakeencore.api.elm.sa/api/v1/yakeen/data?nin='.$req['nin'].'&dateString='.$req['dateString'].'',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'GET',
                CURLOPT_HTTPHEADER => array(
                    'usage-code: USC90007',
                    'operator-Id: 1001035755',
                    'app-id: 6a8020cb',
                    'app-key: 4a5cf5aa0d113fbbe560ec714a043e67',
                    'service-identifier: 59a92123-b9ed-4eca-97ac-479ecde32d0a',
                    "Authorization: Bearer {$yaqenToken['token']}",
                    'Cookie: 9fdd0c3c00e2cddb1a94180204e9dd86=c2a4c639340fec052c525d51fb276a90; NSC_3Tdbmf-Pqfotijgu.w4=14b5a3d94456a1593f35e91f73179db4ec5cc88f5d93141396964eb279cec105ef88e639; TS01e2737f=015a42f27eba1d6b335d5f0f019adc8e08d3d5c6b24febbc3cb2fdc1faa09f30552d21784f8af81004b61c76464bf3db825d1b417e9c167b9c22c03eb3fbc42717fc064a8b65e4a2435343d5f78778a7405cfa05e0'
                ),
            ));

            $response = curl_exec($curl);

            curl_close($curl);


            $res = json_decode($response);
            return $res;
            return CustomTrait::SuccessJson($res);
        } elseif ($total >= 24 || $total == null) {
            Yaqeen::Where('token', $yaqenToken['token'])->delete();
            $this->YageenAuth();



            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://yakeencore.api.elm.sa/api/v1/yakeen/data?nin='.$req['nin'].'&dateString='.$req['dateString'].'',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'GET',
                CURLOPT_HTTPHEADER => array(
                    'usage-code: USC90007',
                    'operator-Id: 1001035755',
                    'app-id: 6a8020cb',
                    'app-key: 4a5cf5aa0d113fbbe560ec714a043e67',
                    'service-identifier: 59a92123-b9ed-4eca-97ac-479ecde32d0a',
                    "Authorization: Bearer {$yaqenToken['token']}",
                    'Cookie: 9fdd0c3c00e2cddb1a94180204e9dd86=c2a4c639340fec052c525d51fb276a90; NSC_3Tdbmf-Pqfotijgu.w4=14b5a3d94456a1593f35e91f73179db4ec5cc88f5d93141396964eb279cec105ef88e639; TS01e2737f=015a42f27eba1d6b335d5f0f019adc8e08d3d5c6b24febbc3cb2fdc1faa09f30552d21784f8af81004b61c76464bf3db825d1b417e9c167b9c22c03eb3fbc42717fc064a8b65e4a2435343d5f78778a7405cfa05e0'
                ),
            ));

            $response = curl_exec($curl);

            curl_close($curl);


            $res = json_decode($response);

            return CustomTrait::SuccessJson($res);
        } else {



            $curl = curl_init();

            curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://yakeencore.api.elm.sa/api/v1/yakeen/data?nin='.$req['nin'].'&dateString='.$req['dateString'].'',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'GET',
                CURLOPT_HTTPHEADER => array(
                    'usage-code: USC90007',
                    'operator-Id: 1001035755',
                    'app-id: 6a8020cb',
                    'app-key: 4a5cf5aa0d113fbbe560ec714a043e67',
                    'service-identifier: 59a92123-b9ed-4eca-97ac-479ecde32d0a',
                    "Authorization: Bearer {$yaqenToken['token']}",
                    'Cookie: 9fdd0c3c00e2cddb1a94180204e9dd86=c2a4c639340fec052c525d51fb276a90; NSC_3Tdbmf-Pqfotijgu.w4=14b5a3d94456a1593f35e91f73179db4ec5cc88f5d93141396964eb279cec105ef88e639; TS01e2737f=015a42f27eba1d6b335d5f0f019adc8e08d3d5c6b24febbc3cb2fdc1faa09f30552d21784f8af81004b61c76464bf3db825d1b417e9c167b9c22c03eb3fbc42717fc064a8b65e4a2435343d5f78778a7405cfa05e0'
                ),
            ));

            $response = curl_exec($curl);

            curl_close($curl);


            $res = json_decode($response);

            return CustomTrait::SuccessJson($res);
        }
    }
}



