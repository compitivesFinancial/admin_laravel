<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EvaluationDetail extends Model
{
    use HasFactory;

    protected $table = 'evaluation_attributes';

    protected $fillable = [
        'title',
        'evp_id',
        'readiness_title',
        'readiness_ar_title',
        'weight_title',
        'weight_ar_title',
        'status',
        'position'
    ];


 



}
