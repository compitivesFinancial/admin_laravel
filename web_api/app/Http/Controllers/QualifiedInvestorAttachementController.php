<?php

namespace App\Http\Controllers;

use App\Models\qualified_investor_attachement;
use App\Traits\CustomTrait;
use Illuminate\Http\Request;
use PHPUnit\Framework\Constraint\IsEmpty;

class QualifiedInvestorAttachementController extends Controller
{
    public function saveQualifiedInvestData(Request $req)
    {
        try {
            qualified_investor_attachement::create([
                "investor_id" => $req->investor_id,
                "min3WorkYear_url" => $req->min3WorkYear_url,
                "certificateCME1_url" => $req->certificateCME1_url,
                "professionalCertificate_url" => $req->professionalCertificate_url,
                "investTenOpport_url" => $req->investTenOpport_url,
                "netOrigin_url" => $req->netOrigin_url,
            ]);
        } catch (\Throwable $th) {
            return CustomTrait::ErrorJson($$th->getMessage());
        }
        return CustomTrait::SuccessJson('done');
    }
    /**************************************************************************************************/
    public function updateQualifiedInvestData(Request $req)
    {
        try {
            qualified_investor_attachement::where($req->id)->update([
                "investor_id" => $req->investor_id,
                "min3WorkYear_url" => $req->min3WorkYear_url,
                "certificateCME1_url" => $req->certificateCME1_url,
                "professionalCertificate_url" => $req->professionalCertificate_url,
                "investTenOpport_url" => $req->investTenOpport_url,
                "netOrigin_url" => $req->netOrigin_url,
            ]);
            return CustomTrait::SuccessJson('done');
        } catch (\Throwable $th) {
            return CustomTrait::ErrorJson($$th->getMessage());
        }
    }
    /**************************************************************************************************/

    public function deleteQualifiedInvestData(Request $req)
    {
        try {
            qualified_investor_attachement::where($req->id)->delete();
            return CustomTrait::SuccessJson('done');
        } catch (\Throwable $th) {
            return CustomTrait::ErrorJson($$th->getMessage());
        }

    }
    /**************************************************************************************************/

    public function getQualifiedInvestData($id)
    {
        try {
            $data = qualified_investor_attachement::where('investor_id', $id)->get();
            if (!$data->isEmpty()) {
                return CustomTrait::SuccessJson($data);
            } else {
                return CustomTrait::ErrorJson($data);
            }
        } catch (\Throwable $th) {
            return CustomTrait::ErrorJson($$th->getMessage());
        }
    }
}
