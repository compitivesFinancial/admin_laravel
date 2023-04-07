<?php

namespace App\Http\Controllers;


use App\Traits\CustomTrait;
use Illuminate\Http\Request;
use App\Models\Evaluation;
use App\Models\EvaluationDetail;
use App\Models\Evaluation_category;
use DB;
use Exception;
use Illuminate\Support\Facades\Log;

class EvaluationConttroller extends Controller
{

    function list(Request $req)
    {

        $evaluation = DB::select("SELECT  id,title,ar_title,position,role_id,rank_type,status,(select group_concat(title) from admin__roles where find_in_set(id,role_id)) as admin_role FROM evaluations where status = 1 order by position asc");

        $data = json_decode(json_encode($evaluation), true);
        return  CustomTrait::SuccessJson($data);
    }




    function GetById($id)
    {



        $evaluation = Evaluation::select('id', 'title', 'ar_title', 'position', 'role_id', 'rank_type', 'status')->where(['id' => $id, 'status' => 1])->orderBy('position', 'ASC')->first()->toArray();


        $evo_category = Evaluation_category::select('id', 'title', 'ar_title', 'minrange', 'maxrange', 'position', 'status')->where(['evp_id' => $id])->orderBy('position', 'ASC')->get()->toArray();




        foreach ($evo_category as $key => $val) {

            $evo_detail = EvaluationDetail::select('id', 'evp_id', 'evo_cat_id', 'title', 'ar_title', 'minrange', 'maxrange', 'position', 'status')->where(['evo_cat_id' => $val['id']])->orderBy('position', 'ASC')->get()->toArray();

            $evo_category[$key]['detail'] = $evo_detail;
            $evaluation['category'] = $evo_category;
        }



        return  CustomTrait::SuccessJson($evaluation);
    }



    public function insert(Request $req)
    {


        if (!isset($req->id) || $req->id == '') {

            try {


                $evo = new Evaluation;
                $evo->title = $req->title;
                $evo->ar_title = $req->ar_title;
                $evo->role_id = $req->role_id;
                $evo->rank_type = $req->rank_type;
                $evo->status = $req->status;
                $evo->position = $req->position;
                $evo->save();
            } catch (Exception $e) {

                Log::channel('evaluation')->info($e->getMessage());

                $data = [
                    'message' => "something went wronge"
                ];
                return  CustomTrait::ErrorJson($data);
            }
        } else {

            try {

                $evo = Evaluation::find($req->id);
                $evo->title = $req->title;
                $evo->ar_title = $req->ar_title;
                $evo->role_id = $req->role_id;
                $evo->rank_type = $req->rank_type;
                $evo->status = $req->status;
                $evo->position = $req->position;
                $evo->save();
            } catch (Exception $e) {

                Log::channel('evaluation')->info($e->getMessage());

                $data = [
                    'message' => "something went wronge"
                ];
                return  CustomTrait::ErrorJson($data);
            }
        }


        $evoid = $evo->id;


        foreach ($req->evo_category as $key => $val) {

            if (!isset($val['id']) || $val['id'] == '') {

                try {

                    $preductDetail = new Evaluation_category;
                    $preductDetail->evp_id = $evo->id;


                    $preductDetail->title = $val['title'];
                    $preductDetail->ar_title = $val['ar_title'];
                    if ($req->type == 3) {
                        $preductDetail->minrange = $val['minrange'];
                        $preductDetail->maxrange = $val['maxrange'];
                    }
                    $preductDetail->status = $val['status'];
                    $preductDetail->position = $val['position'];
                    $preductDetail->save();
                } catch (Exception $e) {

                    Log::channel('evaluation')->info($e->getMessage());

                    $data = [
                        'message' => "something went wronge"
                    ];
                    return  CustomTrait::ErrorJson($data);
                }
            } else {



                try {


                    $evocat = Evaluation_category::find($val['id']);
                    $evocat->evp_id = $req->id;
                    $evocat->title = $val['title'];
                    $evocat->ar_title = $val['ar_title'];

                    if ($req->type == 3) {
                        $evocat->minrange = $val['minrange'];
                        $evocat->maxrange = $val['maxrange'];
                    }

                    $evocat->status = $val['status'];
                    $evocat->position = $val['position'];
                    $evocat->save();
                } catch (Exception $e) {

                    Log::channel('evaluation')->info($e->getMessage());

                    $data = [
                        'message' => "something went wronge"
                    ];
                    return  CustomTrait::ErrorJson($data);
                }
            }
        }



        $data = [
            'message' => 'Evaluation Added'
        ];

        return  CustomTrait::SuccessJson($data);
    }











    public function insertEvaluationDetail(Request $req)
    {

        foreach ($req->evo_detail as $key => $val) {

            if (!isset($val['id']) || $val['id'] == '') {


                try {


                    $evo_detail = new EvaluationDetail;
                    $evo_detail->evp_id = $val['evo_id'];
                    $evo_detail->evo_cat_id = $val['evo_cat_id'];
                    $evo_detail->title = $val['title'];
                    $evo_detail->ar_title = $val['ar_title'];

                    $evo_detail->minrange = $val['minrange'];
                    $evo_detail->maxrange = $val['maxrange'];

                    $evo_detail->status = $val['status'];
                    $evo_detail->position = $val['position'];
                    $evo_detail->save();
                } catch (Exception $e) {

                    Log::channel('evaluation')->info($e->getMessage());

                    $data = [
                        'message' => "something went wronge"
                    ];
                    return  CustomTrait::ErrorJson($data);
                }
            } else {

                try {



                    $evo_detail = EvaluationDetail::find($val['id']);
                    $evo_detail->evp_id = $val['evo_id'];
                    $evo_detail->evo_cat_id = $val['evo_cat_id'];
                    $evo_detail->title = $val['title'];
                    $evo_detail->ar_title = $val['ar_title'];

                    $evo_detail->minrange = $val['minrange'];
                    $evo_detail->maxrange = $val['maxrange'];

                    $evo_detail->status = $val['status'];
                    $evo_detail->position = $val['position'];
                    $evo_detail->save();
                } catch (Exception $e) {

                    Log::channel('evaluation')->info($e->getMessage());

                    $data = [
                        'message' => "something went wronge"
                    ];
                    return  CustomTrait::ErrorJson($data);
                }
            }
        }
        $data = [
            'message' => 'Evaluation Detail Added'
        ];

        return  CustomTrait::SuccessJson($data);
    }





    public function update(Request $req)
    {


        foreach ($req->evo_detail as $key => $val) {



            if (!isset($val['id']) || $val['id'] == '') {


                try {

                    $evocat = new Evaluation_category;
                    $evocat->evp_id = $req->id;
                    $evocat->title = $val['title'];
                    $evocat->ar_title = $val['ar_title'];
                    $evocat->minrange = $val['minrange'];
                    $evocat->maxrange = $val['maxrange'];
                    $evocat->status = $val['status'];
                    $evocat->position = $val['position'];
                    $evocat->save();
                } catch (Exception $e) {

                    Log::channel('evaluation')->info($e->getMessage());

                    $data = [
                        'message' => "something went wronge1"
                    ];
                    return  CustomTrait::ErrorJson($data);
                }
            } else {



                try {

                    $evocat = Evaluation_category::find($val['id']);
                    $evocat->evp_id = $req->id;
                    $evocat->title = $val['title'];
                    $evocat->ar_title = $val['ar_title'];
                    $evocat->minrange = $val['minrange'];
                    $evocat->maxrange = $val['maxrange'];
                    $evocat->status = $val['status'];
                    $evocat->position = $val['position'];
                    $evocat->save();
                } catch (Exception $e) {

                    Log::channel('evaluation')->info($e->getMessage());

                    $data = [
                        'message' => "something went wronge2"
                    ];
                    return  CustomTrait::ErrorJson($data);
                }



                foreach ($val['detail'] as $key1 => $val1) {


                    if (!isset($val1['id']) || $val1['id'] == '') {

                        try {

                            $evoDetail = new EvaluationDetail;
                            $evoDetail->evp_id = $req->id;
                            $evoDetail->evo_cat_id = $val1['evo_cat_id'];


                            $evoDetail->title = $val1['title'];
                            $evoDetail->ar_title = $val1['ar_title'];

                            if ($req->rank_type == 3) {

                                $evoDetail->minrange = $val1['minrange'];
                                $evoDetail->maxrange = $val1['maxrange'];
                            }

                            $evoDetail->status = $val1['status'];
                            $evoDetail->position = $val1['position'];
                            $evoDetail->save();
                        } catch (Exception $e) {

                            Log::channel('evaluation')->info($e->getMessage());

                            $data = [
                                'message' => "something went wronge1"
                            ];
                            return  CustomTrait::ErrorJson($data);
                        }
                    } else {


                        try {

                            $evoDetail = EvaluationDetail::find($val1['id']);
                            $evoDetail->evp_id = $req->id;
                            $evoDetail->evo_cat_id = $val1['evo_cat_id'];


                            $evoDetail->title = $val1['title'];
                            $evoDetail->ar_title = $val1['ar_title'];

                            if ($req->rank_type == 3) {

                                $evoDetail->minrange = $val1['minrange'];
                                $evoDetail->maxrange = $val1['maxrange'];
                            }

                            $evoDetail->status = $val1['status'];
                            $evoDetail->position = $val1['position'];

                            $evoDetail->save();
                        } catch (Exception $e) {

                            Log::channel('evaluation')->info($e->getMessage());

                            $data = [
                                'message' => "something went wronge2"
                            ];
                            return  CustomTrait::ErrorJson($data);
                        }
                    }
                }
            }
        }








        $data = [
            'message' => 'Evaluation Updated'
        ];

        return  CustomTrait::SuccessJson($data);
    }





    function delete(Request $req)
    {

        $sql = "SELECT * FROM evaluation_attributes WHERE evp_id = $req->id";
        $info = DB::select(DB::raw($sql));


        if (count($info)) {


            $data = [
                'message' => "This is refered in other table"
            ];
            return  CustomTrait::ErrorJson($data);
        } else {


            try {

                $evo = Evaluation::find($req->id);
                $evo->status = 3;
                $evo->save();
            } catch (Exception $e) {

                Log::channel('evaluation')->info($e->getMessage());

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








    public function deleteEvoDetail(Request $req)
    {

        try {

            $preduct = EvaluationDetail::find($req->id);
            $preduct->status = 3;
            $preduct->save();
        } catch (Exception $e) {

            Log::channel('evaluation')->info($e->getMessage());

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
