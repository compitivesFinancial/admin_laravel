<?php



use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CampaignController;
use App\Http\Controllers\InvesterController;
use App\Http\Controllers\BorrowerController;
use App\Http\Controllers\KycController;
use App\Http\Controllers\UserController;


use App\Http\Controllers\exampleController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PageConttroller;
use App\Http\Controllers\YaqeenController;
use App\Models\Kyc;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

    //added By Qaysar For retrieve the conditions and terms from registration page in public mode without login
    Route::get('/get_page_by_id_outside/{id}',[PageConttroller::class,'GetById']);

    Route::get('/get_campagin_outside',[CampaignController::class,'campaginOutSide']);
    Route::post('login', [AdminController::class, 'login']);
    Route::post('/check_mobile',[UserController::class,'checkMobile']);
    Route::post('/send_otp',[UserController::class,'sendOtp']);
    Route::post('/verify_otp',[UserController::class,'verifyOtp']);
    Route::post('/login_verify_otp',[UserController::class,'loginVerifyOtp']);
    Route::post('/login',[UserController::class,'login']);
    Route::post('/register',[UserController::class,'register']);

    Route::get('yaqeenlogin',[YaqeenController::class,'YageenAuth']);
    Route::get('yaqenIqama', [YaqeenController::class,'yaqenIqamaSaudi']);
    Route::get('yaqeensaudi', [YaqeenController::class,'yaqeensaudi']);
    //product
    Route::get('/list_product',[ProductConttroller::class,'list']);



    Route::group(['middleware' => ['auth:sanctum']], function() {
    // Route::group(['middleware' => ['isauth']], function () {

        Route::get('/examplefunc',[exampleController::class,'examplefunc']);



          Route::get('logout', [AdminController::class, 'logout']);
          Route::get('user', [AdminController::class, 'user']);


          //userkyc show with value
        Route::get('/show_userkyc',[KycController::class,'showAddUserKyc']);
        Route::post('/modify_userkyc',[KycController::class,'ModifyUserKyc']);

//borowwer
        Route::get('/opportunity_detail/{id}',[BorrowerController::class,'opportunityDetail']);
        Route::get('/userkycdetail',[BorrowerController::class,'KycDetail']);
        Route::post('/borrower_profile',[BorrowerController::class,'userdetail']);
        Route::post('/borrower_wallet',[BorrowerController::class,'borrowerWallet']);
        Route::post('/borrowerdashboard',[BorrowerController::class,'borrowerdashboard']);
// ali api
Route::get('/account_number',[UserController::class,'userAccoutnumber']);
Route::get('investor_statment',[InvesterController::class,'investorStatment']);
Route::get('wallet_investor',[InvesterController::class,'investorWallet']);
Route::get('borrower_statment',[BorrowerController::class,'borrowerStatment']);
Route::get('wallet_borrower',[BorrowerController::class,'borroweWallet']);

//borroweWallet
// yaqeen
//wathq


Route::get('commercialregistration/{id}', [KycController::class,'commercialregistration']);


//invester
        Route::get('/invester_opportunity_detail/{id}',[InvesterController::class,'investerOpportunityDetail']);
        Route::get('/invester_kycdetail',[InvesterController::class,'KycDetail']);
        Route::post('/invester_profile',[InvesterController::class,'userdetail']);
        Route::post('/invester_wallet',[InvesterController::class,'investerWallet']);



        Route::post('/investordashboard',[InvesterController::class,'investordashboard']);



        Route::post('/add_campaign',[CampaignController::class,'insert']);
        Route::post('/update_campaign',[CampaignController::class,'update']);
        Route::get('/list_campaign',[CampaignController::class,'list']);
        Route::get('/get_campaign_by_id/{id}',[CampaignController::class,'getById']);
        Route::post('update_version_program/{id}',[CampaignController::class,'updateVersionProgram']);

        Route::get('/user_campaign/{id}',[CampaignController::class,'userCampaign']);
        Route::get('/user_campaign_borrower/{id}',[CampaignController::class,'userCampaignborrower']);

        Route::post('/invest',[CampaignController::class,'invest']);


        //loan
        Route::post('/borrower_statement',[CampaignController::class,'borrowerStatement']);
        Route::post('/payloan',[CampaignController::class,'borrowerpayLoan']);
        Route::post('/invester_statement',[CampaignController::class,'investerStatement']);


        //page
        // Route::get('/get_page_list',[PageConttroller::class,'list']);
        Route::get('/get_page_by_id/{id}',[PageConttroller::class,'GetById']);
        Route::post('/get_page_by_id/{id}',[PageConttroller::class,'GetById']);

        //home
        Route::get('/total_raised',[CampaignController::class,'totalRaised']);
        Route::get('/get_cms_list',[CampaignController::class,'cmsList']);
        Route::get('/cmsget_by_id/{id}',[CampaignController::class,'cmsGetById']);
        Route::get('/cmsget_by_type/{id}',[CampaignController::class,'cmsGetByType']);

      });

    //});

    Route::post('/contact_us',[CampaignController::class,'contactUs']);
    Route::get('/home_page_api',[CampaignController::class,'homePageApi']);
    Route::get('/footer',[CampaignController::class,'footer']);

