<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProductConttroller;
use App\Http\Controllers\ProductAttributeConttroller;
use App\Http\Controllers\EvaluationConttroller;
use App\Http\Controllers\KycController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoanManagementController;
use App\Http\Controllers\CampaignController;
use App\Http\Controllers\EmailController;
use App\Http\Controllers\PageConttroller;
use App\Http\Controllers\CmsConttroller;












/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


    Route::post('login', [AdminController::class, 'login']);

    Route::group(['middleware' => ['auth:sanctum','cors']], function() {
          Route::get('logout', [AdminController::class, 'logout']);
          Route::get('user', [AdminController::class, 'user']);
          Route::get('/get_admin_byid/{id}',[AdminController::class,'getUserById']);
          Route::post('/add_admin',[AdminController::class,'addAdmin']);
          Route::post('/get_department',[AdminController::class,'getDepartment']);
          Route::get('/admin_list',[AdminController::class,'showuser']);
          Route::post('/update_admin',[AdminController::class,'updateuser']);
          Route::get('/admin_ip_list',[AdminController::class,'listAdminIp']);
          Route::post('/add_admin_ip',[AdminController::class,'addAdminIp']);
          Route::get('/list_adminiplogs',[AdminController::class,'adminLogs']);




//email
Route::get('/list_template',[EmailController::class,'listTemplate']);
Route::post('/insert_template',[EmailController::class,'insertTemplate']);
Route::post('/update_template',[EmailController::class,'updateTemplate']);
Route::get('/get_email_byid/{id}',[EmailController::class,'getById']);
Route::post('/sendmailer',[EmailController::class,'myDemoMail']);
Route::get('/get_template_type',[EmailController::class,'getTemplateType']);
Route::post('/setvalues',[EmailController::class,'setValues']);
Route::post('/sendmail',[EmailController::class,'sendMail']);


    //product attribute
    Route::get('/list_product_attribute',[ProductAttributeConttroller::class,'list']);
    Route::post('/add_product_attribute',[ProductAttributeConttroller::class,'insert']);
    Route::post('/update_product_attribute',[ProductAttributeConttroller::class,'Update']);
    Route::get('/get_by_id/{id}',[ProductAttributeConttroller::class,'GetById']);
    Route::post('/delete_product_attribute',[ProductAttributeConttroller::class,'delete']);
    Route::post('/delete_product_detail',[ProductAttributeConttroller::class,'deleteProDetail']);

    //EvaluationConttroller
    Route::post('/add_evaluation',[EvaluationConttroller::class,'insert']);
    Route::post('/add_evaluation_detail',[EvaluationConttroller::class,'insertEvaluationDetail']);
    Route::get('/list_evaluation',[EvaluationConttroller::class,'list']);
    Route::get('/get_evaluation_by_id/{id}',[EvaluationConttroller::class,'GetById']);
    Route::post('/update_evaluation',[EvaluationConttroller::class,'Update']);
    Route::post('/delete_evaluation',[EvaluationConttroller::class,'delete']);
    Route::post('/delete_evaluation_detail',[EvaluationConttroller::class,'deleteEvoDetail']);






    //product
    Route::get('/product_list',[ProductConttroller::class,'list']);
    Route::post('/add_product',[ProductConttroller::class,'insert']);
    Route::get('/get_product_by_id/{id}',[ProductConttroller::class,'GetById']);
    Route::post('/update_product',[ProductConttroller::class,'update']);
    Route::post('/delete_product',[ProductConttroller::class,'delete']);
    Route::post('/delete_product_detail',[ProductConttroller::class,'deleteProductDetail']);
    Route::get('/product_attribute_list',[ProductConttroller::class,'productAttributelist']);




    //kyc
    Route::post('/add_kyc',[KycController::class,'insert']);
    Route::get('/kyc_list',[KycController::class,'list']);
    Route::get('/get_kyc_by_id/{id}',[KycController::class,'GetById']);
    Route::post('/update_kyc',[KycController::class,'update']);
    Route::post('/delete_kyc',[KycController::class,'delete']);
    Route::post('/delete_kyc_detail',[KycController::class,'deleteProductDetail']);
    Route::get('/kyc_infotype_list',[KycController::class,'infotype_list']);
    Route::get('/kyc_type_list',[KycController::class,'type_list']);
    Route::post('/delete_infotype',[KycController::class,'deleteInfoType']);
    Route::post('/add_infotype',[KycController::class,'addInfotype']);
    Route::post('/update_infotype',[KycController::class,'updateInfotype']);
    Route::get('/get_infotype_id/{id}',[KycController::class,'GetInfotypeById']);


        //user type
        Route::get('/show_user_type',[KycController::class,'showUserType']);
        Route::post('/update_user_type',[KycController::class,'updateUserType']);

        /////////////loan/////////////////////////////


        Route::get('/loantype_list',[LoanManagementController::class,'loanTypeList']);
        Route::get('/accruedinterest_list',[LoanManagementController::class,'accruedInterestList']);

        Route::get('/intrest_list',[LoanManagementController::class,'intrestList']);
        Route::get('/intrest_calculation_list',[LoanManagementController::class,'intrestCalculationList']);
        Route::get('/intrest_rate_charged_list',[LoanManagementController::class,'intrestRateChargedList']);



        //loan

        Route::get('/loan_list',[LoanManagementController::class,'loanList']);
        Route::post('/loan_insert',[LoanManagementController::class,'loanInsert']);
        Route::post('/loan_update',[LoanManagementController::class,'loanUpdate']);
        Route::get('/loanget_by_id/{id}',[LoanManagementController::class,'GetById']);
        Route::post('/get_opportunities_by_product',[LoanManagementController::class,'GetOpportunityByProduct']);


        // Route::post('/loanintrestrate_insert',[LoanManagementController::class,'loanIntrestRateInsert']);
        Route::get('/loan_intrest_rate_list',[LoanManagementController::class,'loanIntrestRateList']);
        Route::get('/loan_list',[LoanManagementController::class,'loanList']);


    //repayment
    Route::get('/graceperiod_list',[LoanManagementController::class,'gracePeriodList']);
    Route::get('/payamentintervalmethod_list',[LoanManagementController::class,'payamentIntervalMethodList']);
    Route::post('/repaymentscheduling_insert',[LoanManagementController::class,'repaymentSchedulingInsert']);
    Route::post('/applyloan',[CampaignController::class,'applyLoan']);
    Route::post('/get_statements',[CampaignController::class,'getStatements']);
    Route::post('update_version_program/{id}',[CampaignController::class,'updateVersionProgram']);

    //invester list
    Route::post('/get_invester_list',[CampaignController::class,'getInvesterList']);
    Route::get('/get_country_list',[KycController::class,'countryList']);
    Route::get('/get_city_list/{id}',[KycController::class,'cityList']);


    //cms
    Route::post('/insert_cms',[CmsConttroller::class,'insert']);
    Route::get('/get_cms_by_id/{id}',[CmsConttroller::class,'GetById']);
    Route::post('/update_cms',[CmsConttroller::class,'update']);
    Route::get('/get_cms_list',[CmsConttroller::class,'list']);
    Route::post('/delete_cms',[CmsConttroller::class,'delete']);
    Route::get('/get_by_type/{id}',[CmsConttroller::class,'GetByType']);

    //userKyc
    Route::get('/show_userkyc',[KycController::class,'showAddUserKyc']);
    Route::post('/add_userkyc',[KycController::class,'insertUserKyc']);
    Route::get('/show_updateuserkyc/{id}',[KycController::class,'showupdateKycUser']);
    Route::post('/update_userkyc',[KycController::class,'updateUserKyc']);


    //user
    Route::get('/usertype_list/{id}',[UserController::class,'showUserType']);
    Route::get('/admin_department',[UserController::class,'adminDepartment']);
    Route::get('/getUserList/{role_type}',[UserController::class,'getUserList']);
    Route::get('/get_user/{id}',[UserController::class,'getUser']);
    Route::get('/get_user_detail/{id}',[UserController::class,'getUserDetail']);

//campaign
    Route::get('/list_campaign/{id}',[CampaignController::class,'list']);
    Route::get('/listing_campaign',[CampaignController::class,'listing']);
    Route::get('/get_campaign_by_id/{id}/{role}',[CampaignController::class,'getById']);
    // Route::get('/get_campaign_by_id/{id}/{role}',[CampaignController::class,'getByIdnew']);
    Route::post('/kyc_approvestatus',[CampaignController::class,'kycApproveStatus']);
    Route::post('/delete_campaign',[CampaignController::class,'deleteCampaign']);
    Route::post('/campaign_approvestatus',[CampaignController::class,'CampaignApproveStatus']);
    Route::post('/modify_evaluation_campaign',[CampaignController::class,'modifyEvaluationCampaign']);


    //page
    Route::post('/insert_page',[PageConttroller::class,'insert']);
    Route::post('/update_page',[PageConttroller::class,'update']);
    Route::get('/get_page_list',[PageConttroller::class,'list']);
    Route::get('/get_page_by_id/{id}',[PageConttroller::class,'GetById']);
    Route::post('/add_PagesParameters',[PageConttroller::class,'add_pagesparam']);
    Route::post('/deleteparams',[PageConttroller::class,'deleteparams']);
    Route::get('/getPagesParameters',[PageConttroller::class,'getPagesParameters']);

    //oppornity setup
    Route::post('/deleteCampaignattachment',[CampaignController::class,'deleteCampaignattachment']);
    Route::post('/getcampaignattachment',[CampaignController::class,'getcampaignattachment']);
    Route::post('/addcampaignattachment',[CampaignController::class,'addcampaignattachment']);
    Route::post('/insert_opportunity_setup',[CampaignController::class,'insertOpportunitySetup']);
    Route::post('campaign_update_closedate/{id}',[CampaignController::class,'updateDateCampagin']);


});
