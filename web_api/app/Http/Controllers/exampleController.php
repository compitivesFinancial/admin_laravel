<?php

namespace App\Http\Controllers;

use App\Traits\CustomTrait;
use Illuminate\Http\Request;
use App\Models\campaign;
use App\Models\Product;
use App\Models\campaign_inverter;
use App\Models\campaign_team;
use App\Models\campaign_image ;
use App\Models\Campaign_log;
use App\Models\borrower_statement;
use App\Models\investor_statement;
use App\Models\repayment_scheduling;
use App\Models\loan;


use Illuminate\Support\Facades\Auth;


use App\Http\Requests;
use Mail;
use App\Mail\MyDemoMail;

class exampleController extends Controller
{


  public function examplefunc()
    {

      echo 'hurrey';
      die;
   


    }











}
