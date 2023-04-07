<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class investor_statement extends Model
{
    use HasFactory;


    protected $table = 'l_investor_statement';

    protected $fillable = [
        'campaign_id',
        'invester_id',
        'date',
        'principle',
        'profit',
        'total'

    ];



}
