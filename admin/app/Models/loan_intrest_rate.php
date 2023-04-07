<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class loan_intrest_rate extends Model
{
    use HasFactory;


    protected $table = 'loan_intrest_rates';

    protected $fillable = [
        'intrest_calc_method_id',
        'accrued_interest_id',
        'interest_rate_charged_id',
        'intrest_rate_constraint_default',
        'intrest_rate_constraint_min',
        'intrest_rate_constraint_max'
    ];



}
