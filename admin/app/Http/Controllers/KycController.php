<?php

namespace App\Http\Controllers;


use App\Traits\CustomTrait;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\KycDetail;
use App\Models\Kyc;
use App\Models\UserKycRole;
use App\Models\UserKyc;
use App\Models\User;
use App\Models\kyc_info_type;
use App\Models\user_type;
use App\Models\Country;
use App\Models\City;


use Illuminate\Support\Facades\Hash;
use DB;

class KycController extends Controller
{

    

    public function insert(Request $req)
    {

        try {

            $kyc = new Kyc;
            $kyc->title = $req->title;
            $kyc->ar_title = $req->ar_title;
            $kyc->status = $req->status;
            $kyc->position = $req->position;
            $kyc->save();
        } catch (Exception $e) {

            Log::channel('kyc')->info($e->getMessage());

            $data = [
                'message' => "something went wronge"
            ];
            return  CustomTrait::ErrorJson($data);
        }

        $kycid = $kyc->id;

        foreach ($req->kyc_detail as $key => $val) {

            try {

                $kyc = new KycDetail;
                $kyc->kyc_id = $kycid;
                $kyc->type = $val['type'];
                $kyc->info_type = $val['info_type'];
                $kyc->title = $val['title'];
                $kyc->ar_title = $val['ar_title'];


                $kyc->length = $val['length'];
                $kyc->mandatory = $val['mandatory'];


                // $kyc->mandatory = $val['mandatory'];
                // $kyc->mandatory = $val['mandatory'];

                $kyc->status = $val['status'];
                $kyc->position = $val['position'];
                $kyc->save();

            } catch (Exception $e) {

                Log::channel('kyc')->info($e->getMessage());
                $data = [
                    'message' => "something went wronge"
                ];
                return  CustomTrait::ErrorJson($data);
            }
        }


        $data = [
            'message' => 'Kyc Added'
        ];

        return  CustomTrait::SuccessJson($data);
    }





    function list()
    {

        $data = Kyc::select('id', 'title', 'ar_title', 'status', 'position')->where(['status' => 1])->orderBy('position', 'ASC')->get()->toArray();
        return  CustomTrait::SuccessJson($data);
    }



    function GetById($id)
    {

        $kyc = Kyc::select('id', 'title', 'ar_title', 'status', 'position')->where(['id' => $id, 'status' => 1])->orderBy('position', 'ASC')->first()->toArray();

        $kycdetail = KycDetail::select('id', 'kyc_id', 'type', 'info_type', 'title', 'ar_title', 'status', 'position','length','mandatory')->where(['kyc_id' => $id, 'status' => 1])->orderBy('position', 'ASC')->get()->toArray();


        $kyc['kyc_detail'] = $kycdetail;

        return  CustomTrait::SuccessJson($kyc);
    }









    public function update(Request $req)
    {


        try {

            $kyc = kyc::find($req->id);
            $kyc->title = $req->title;
            $kyc->ar_title = $req->ar_title;
            $kyc->status = $req->status;
            $kyc->position = $req->position;
            $kyc->save();

        } catch (Exception $e) {

            Log::channel('kyc')->info($e->getMessage());
            $data = [
                'message' => "something went wronge"
            ];
            return  CustomTrait::ErrorJson($data);
        }


        foreach ($req->kyc_detail as $key => $val) {


            if (!isset($val['id']) || $val['id'] == '') {

                try {

                    $kyc = new KycDetail;
                    $kyc->kyc_id = $req->id;
                    $kyc->title = $val['title'];
                    $kyc->ar_title = $val['ar_title'];
                    $kyc->type = $val['type'];
                    $kyc->info_type = $val['info_type'];
					if(empty($val['length'])){ $val['length']=0;}
					if(empty($val['mandatory'])){ $val['mandatory']=0;}
                    $kyc->length = $val['length'];
                    $kyc->mandatory = $val['mandatory'];
                    $kyc->status = $val['status'];
                    $kyc->position = $val['position'];
                    $kyc->save();
                } catch (Exception $e) { //for exception

                    Log::channel('kyc')->info($e->getMessage());
                    $data = [
                        'message' => "something went wronge"
                    ];
                    return  CustomTrait::ErrorJson($data);
                }
            } else {

                try {

                    $kyc = KycDetail::find($val['id']);
                    $kyc->kyc_id = $req->id;
                    $kyc->title = $val['title'];
                    $kyc->ar_title = $val['ar_title'];
                    $kyc->type = $val['type'];
                    $kyc->info_type = $val['info_type'];
					if(empty($val['length'])){ $val['length']=0;}
					if(empty($val['mandatory'])){ $val['mandatory']=0;}
                    $kyc->length = $val['length'];
                    $kyc->mandatory = $val['mandatory'];
                    $kyc->status = $val['status'];
                    $kyc->position = $val['position'];
                    $kyc->save();

                    
                } catch (Exception $e) {

                    Log::channel('kyc')->info($e->getMessage());
                    $data = [
                        'message' => "something went wronge"
                    ];
                    return  CustomTrait::ErrorJson($data);
                }
            }
        }


        $data = [
            'message' => "Kyc Updated"
        ];

        return  CustomTrait::SuccessJson($data);
    }


    function delete(Request $req)
    {



        $sql = "SELECT id FROM kyc_details WHERE kyc_id = $req->id";
        $info = DB::select(DB::raw($sql));


        if (count($info)) {


            $data = [
                'message' => "This is refered in other table"
            ];
            return  CustomTrait::ErrorJson($data);
        } else {


            try {

                $preduct = Kyc::find($req->id);
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
                'message' => 'Kyc Deleted'
            ];

            return  CustomTrait::SuccessJson($data);
        }
    }




    public function deleteKycDetail(Request $req)
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

                Log::channel('kyc')->info($e->getMessage());

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








    function showAddUserKyc()
    {


        $session_user_id = auth('sanctum')->user()->id;

        $user = User::select('role_type')->where(['id' => $session_user_id])->first()->toArray();

        $detail = UserKycRole::select('id', 'user_type_id', 'kyc_id')->get()->toArray();


        foreach ($detail as $key1 => $val1) {


            $temp = user_type::select('title')->where('id', $val1['user_type_id'])->first();
            $detail[$key1]['title'] = $temp['title'];


            $arrKyc_id = explode(',', $val1['kyc_id']);


            foreach ($arrKyc_id as $key => $val) {

                $detail[$key1]['kyc'][$key] = Kyc::select('id', 'title', 'ar_title', 'status', 'position')->where(['id' => $val])->first()->toArray();


                $temp2 = KycDetail::select('info_type')->where(['kyc_id' => $val])->groupBy('info_type')->orderBy('info_type', 'ASC')->orderBy('position', 'ASC')->get()->toArray();


                $detail[$key1]['kyc'][$key]['info_type'] = $temp2;
                foreach ($detail[$key1]['kyc'][$key]['info_type'] as $key2 => $val2) {

                    $temp = KycDetail::select('id', 'kyc_id', 'type', 'info_type', 'title', 'ar_title', 'status', 'position')->where(['kyc_id' => $val, 'info_type' => $val2['info_type'], 'status' => 1])->orderBy('info_type', 'ASC')->orderBy('position', 'ASC')->get()->toArray();

                    $detail[$key1]['kyc'][$key]['info_type'][$key2]['detail'] = $temp;
                }
            }
        }


        return  CustomTrait::SuccessJson($detail);
    }




    public function insertUserKyc(Request $req)
    {

        try {

            $user = new User;
            $user->name = $req->name;
            $user->email = $req->email;
            $user->password = Hash::make($req->password);
            $user->role_type = $req->user_id;
            $user->admin_role_id = 1;
            $user->mobile_number = $req->mobile;
            $user->status = 1;
            $user->save();
        } catch (Exception $e) {

            Log::channel('kyc')->info($e->getMessage());
            $data = [
                'message' => "something went wronge"
            ];
            return  CustomTrait::ErrorJson($data);
        }


        foreach ($req->field as $key => $val) {


            if (!empty($val['value'])) {

                try {

                    $kyc = new UserKyc;
                    $kyc->user_id = $user->id;
                    $kyc->kyc_detail_id = $val['kyc_detail_id'];
                    $kyc->value = $val['value'];
                    $kyc->status = 1;
                    $kyc->save();
                } catch (Exception $e) {

                    Log::channel('kyc')->info($e->getMessage());
                    $data = [
                        'message' => "something went wronge"
                    ];
                    return  CustomTrait::ErrorJson($data);
                }
            }
        }



        $data = [
            'message' => 'Kyc User Added'
        ];

        return  CustomTrait::SuccessJson($data);
    }









    function showupdateKycUser($id)
    {

        $user = User::where(['id' => $id])->first()->toArray();


        $detail = UserKycRole::select('id', 'user_type_id', 'kyc_id')->where(['user_type_id' => $user['admin_role_id']])->first()->toArray();

        $arrKyc_id = explode(',', $detail['kyc_id']);

        foreach ($arrKyc_id as $key => $val) {

            $detail['kyc'][$key] = Kyc::select('id', 'title', 'ar_title', 'status', 'position')->where(['id' => $val])->first()->toArray();


            $temp2 = KycDetail::select('info_type')->where(['kyc_id' => $val])->orderBy('info_type', 'ASC')->groupBy('info_type')->orderBy('position', 'ASC')->get()->toArray();


            $detail['kyc'][$key]['info_type'] = $temp2;

            foreach ($detail['kyc'][$key]['info_type'] as $key1 => $val1) {



                $temp = KycDetail::leftjoin('user_kycs', 'kyc_details.id', '=', 'user_kycs.kyc_detail_id')->where(['kyc_id' => $val, 'kyc_details.info_type' => $val1['info_type'], 'kyc_details.status' => 1, 'user_kycs.user_id' => $id])->orderBy('info_type', 'ASC')->orderBy('position', 'ASC')->get(['kyc_details.id', 'kyc_details.kyc_id', 'kyc_details.type', 'kyc_details.info_type', 'kyc_details.title', 'kyc_details.ar_title', 'kyc_details.status', 'kyc_details.position', 'user_kycs.value as value'])->toArray();


                $detail['kyc'][$key]['info_type'][$key1]['detail'] = $temp;
            }
        }


        return  CustomTrait::SuccessJson($detail);
    }






    public function updateUserKyc(Request $req)
    {

        try {

            $data = User::find($req->user_id);
            $data->name = $req->name;
            $data->email = $req->email;
            $data->mobile_number = $req->mobile;
            $data->password = $req->password;
            $data->save();
        } catch (Exception $e) {

            Log::channel('kyc')->info($e->getMessage());
            $data = [
                'message' => "something went wronge"
            ];
            return  CustomTrait::ErrorJson($data);
        }



        foreach ($req->field as $key => $val) {


            $userkycrole = UserKyc::select('id')->where(['user_id' => $req->user_id, 'kyc_detail_id' => $val['kyc_detail_id']])->get()->toArray();

            $count = count($userkycrole);




            if ($count) {



                try {

                    $kyc = UserKyc::find($userkycrole[0]['id']);
                    $kyc->user_id = $req->user_id;
                    $kyc->kyc_detail_id = $val['kyc_detail_id'];
                    $kyc->value = $val['value'];
                    $kyc->status = 1;
                    $kyc->save();
                } catch (Exception $e) {

                    Log::channel('kyc')->info($e->getMessage());
                    $data = [
                        'message' => "something went wronge"
                    ];
                    return  CustomTrait::ErrorJson($data);
                }
            } else {


                try {

                    $kyc = new UserKyc;
                    $kyc->user_id = $req->user_id;
                    $kyc->kyc_detail_id = $val['kyc_detail_id'];
                    $kyc->value = $val['value'];
                    $kyc->save();
                } catch (Exception $e) {

                    Log::channel('kyc')->info($e->getMessage());
                    $data = [
                        'message' => "something went wronge"
                    ];
                    return  CustomTrait::ErrorJson($data);
                }
            }
        }





        $data = [
            'message' => 'Kyc User Updated'
        ];

        return  CustomTrait::SuccessJson($data);
    }



    function infotype_list()
    {
        $data = kyc_info_type::where('status', 1)->get()->toArray();
        return  CustomTrait::SuccessJson($data);
    }



    function deleteInfoType(Request $req)
    {



        $sql = "SELECT id FROM kyc_details WHERE info_type = $req->id";
        $info = DB::select(DB::raw($sql));


        if (count($info)) {


            $data = [
                'message' => "This is refered in other table"
            ];
            return  CustomTrait::ErrorJson($data);
        } else {


            try {

                $infotype = kyc_info_type::find($req->id);
                $infotype->status = 3;
                $infotype->save();
            } catch (Exception $e) {

                Log::channel('product')->info($e->getMessage());

                $data = [
                    'message' => "something went wronge"
                ];
                return  CustomTrait::ErrorJson($data);
            }

            $data = [
                'message' => 'Info type Deleted'
            ];

            return  CustomTrait::SuccessJson($data);
        }
    }



    function addInfotype(Request $req)
    {
        try {

            $kyc = new kyc_info_type;
            $kyc->title = $req->title;
            $kyc->ar_title = $req->ar_title;
            $kyc->status = $req->status;
            $kyc->position = $req->position;
            $kyc->save();
        } catch (Exception $e) {

            Log::channel('kyc')->info($e->getMessage());

            $data = [
                'message' => "something went wronge"
            ];
            return  CustomTrait::ErrorJson($data);
        }

        $data = [
            'message' => 'Kyc info type Added'
        ];

        return  CustomTrait::SuccessJson($data);
    }




    public function updateInfotype(Request $req)
    {


        try {

            $kyc = kyc_info_type::find($req->id);
            $kyc->title = $req->title;
            $kyc->ar_title = $req->ar_title;
            $kyc->status = $req->status;
            $kyc->position = $req->position;
            $kyc->save();
        } catch (Exception $e) {

            Log::channel('kyc')->info($e->getMessage());
            $data = [
                'message' => "something went wronge"
            ];
            return  CustomTrait::ErrorJson($data);
        }

        $data = [
            'message' => 'Kyc info type Updated'
        ];

        return  CustomTrait::SuccessJson($data);
    }





    function GetInfotypeById($id)
    {

        $data = kyc_info_type::where(['id' => $id, 'status' => 1])->first()->toArray();
        return  CustomTrait::SuccessJson($data);
    }


    function type_list()
    {
        $data = [
            ['id' => 1, 'value' => 'Characters'],
            ['id' => 2, 'value' => 'Textarea'],
            ['id' => 3, 'value' => 'Dropdownlist'],
            ['id' => 4, 'value' => 'Date'],
            ['id' => 5, 'value' => 'Yes/No'],
            ['id' => 6, 'value' => 'Mobile'],
            ['id' => 7, 'value' => 'Email'],
            ['id' => 8, 'value' => 'Gender'],
            ['id' => 9, 'value' => 'Upload']
        ];
        return  CustomTrait::SuccessJson($data);
    }






    function showUserType(Request $req)
    {

        $data['user_type'] = user_type::select('id', 'title')->where('status', 1)->get()->toArray();
        // $data['kyc']=kyc::where('status',1)->orderBy('position', 'ASC')->get()->toArray();


        foreach ($data['user_type'] as $key => $val) {


            $user_kyc_roles = UserKycRole::where('id', $val['id'])->first();
            $kyc_list = [];


            if ($user_kyc_roles) {

                $kyc_list = explode(',', $user_kyc_roles['kyc_id']);
            }


            $kyc = [];
            foreach ($kyc_list as $key1 => $val1) {



                $temp = kyc::select('id', 'title')->where(['id' => $val1, 'status' => 1])->orderBy('position', 'ASC')->first();
                if ($temp) {
                    $kyc[] = $temp;
                }
            }

            $data['user_type'][$key]['value'] = $kyc;
        }


        return  CustomTrait::SuccessJson($data);
    }



    function updateUserType(Request $req)
    {
        
        foreach ($req->user_type as $key => $val) {

            $user_kyc_roles = UserKycRole::where('user_type_id', $val['id'])->first();


            $temp = [];
            for ($i = 0; $i < count($val['value']); $i++) {
                $temp[] = $val['value'][$i]['id'];
            }

            $kyc_str = implode(',', $temp);

            if ($user_kyc_roles) {

                $data = UserKycRole::find($user_kyc_roles->id);
                $data->kyc_id = $kyc_str;
                $data->save();
            } else {

                $data = new UserKycRole;
                $data->kyc_id = $kyc_str;
                $data->user_type_id = $val['id'];
                $data->save();
            }
        }

        $data = ['message' => "Updated successfully."];
        return  CustomTrait::SuccessJson($data);
    }


    


    function countryList()
    {

        $data = Country::where(['status' => 1])->get();
        return  CustomTrait::SuccessJson($data);
    }


    function cityList($id)
    {

        $data = City::where(['state_id' => $id,'status' => 1])->get();
        return  CustomTrait::SuccessJson($data);
    }
    


}
