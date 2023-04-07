<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class repayment_scheduling extends Model
{
    use HasFactory;


    protected $table = 'l_repayment_scheduling';

    protected $fillable = [
        'interval_method_id',
        'payment_every',
        'internal_type',
        'installments_constraints_default',
        'installments_constraints_min',
        'installments_constraints_max',
        'first_due_date_default',
        'first_due_date_min',
        'first_due_date_max',
        'gracetype',
        'grace_period',
        'collect_principle'
    ];



}
