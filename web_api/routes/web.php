<?php

use Illuminate\Support\Facades\Route;


use App\Http\Controllers\TestController;
use App\Http\Controllers\exampleController;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Route::get('/my-demo-mail',[TestController::class,'myDemoMail']);
Route::get('/mydemomailattach',[TestController::class,'myDemoMailAttach']);
Route::get('/sendmail',[TestController::class,'sendMail']);






// Route::group(['middleware' => 'auth:sanctum'], function() {
//     Route::group(['middleware' => ['isauth']], function () {
//         Route::get('/examplefunc',[exampleController::class,'examplefunc']);
//     });
// });


