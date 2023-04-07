<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class campaign extends Model
{
    use HasFactory;
    public $timestamps=false;
    protected $fillable=['tagline','share_price','valuation','min_investment','max_investment','expected_rise','duration_id','returns_type_id','short_bio',
	'reasons_to_invest','fund_allocation','	terms','rewards','team',];

}
