<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kyc_log extends Model
{
    use HasFactory;


    protected $table = 'kyc_logs';

    protected $fillable = [
        'activity_by',
        'activity_type'
    ];

}
