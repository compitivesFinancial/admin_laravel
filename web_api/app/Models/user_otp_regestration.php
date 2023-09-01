<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_otp_regestration extends Model
{
    use HasFactory;
    protected $fillable = ['otp', 'email'];
}
