<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User_otp extends Model
{
    use HasFactory;

    protected $fillable = [
        
        'mobile_number',
        'country_code',
        'otp',
        'status'

    ];

    public $timestamps = false;
    
    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];



   


}
