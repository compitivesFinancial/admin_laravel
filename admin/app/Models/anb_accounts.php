<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class anb_accounts extends Model
{
    use HasFactory;
    
    public $timestamps=false;

    protected $table = 'anb_accounts';

    protected $fillable=['user_id','opportunity_id','type','account_number'];

}
