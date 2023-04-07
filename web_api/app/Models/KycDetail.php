<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KycDetail extends Model
{
    use HasFactory;


    protected $fillable = [
        'title',
        'ar_title',
        'status',
        'position',
        'subtitle',
        'subtitle_ar',
        'type'
    ];

}
