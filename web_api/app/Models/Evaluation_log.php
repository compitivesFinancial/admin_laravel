<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluation_log extends Model
{
    use HasFactory;


    protected $table = 'evaluation_logs';

    public $timestamps = false;

    protected $fillable = [
        'evaluation_id',
        'activity_by',
        'activity_type',
        'campaign_id'
    ];


}
