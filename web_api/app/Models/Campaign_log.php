<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campaign_log extends Model
{
    use HasFactory;


    protected $table = 'campaign_logs';

    protected $fillable = [
        'activity_by',
        'activity_type'
    ];




}
