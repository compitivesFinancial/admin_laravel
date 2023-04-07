<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserKyc extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'kyc_detail_id',
        'value',
        'status'
    ];


}
