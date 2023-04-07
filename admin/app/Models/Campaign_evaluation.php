<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campaign_evaluation extends Model
{
    use HasFactory;
    public $timestamps=false;
    protected $fillable=['evaluation_id','evaluation_detail_id','campaign_id','value'];

}
