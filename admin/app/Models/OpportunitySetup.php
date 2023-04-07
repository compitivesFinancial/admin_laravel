<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OpportunitySetup extends Model
{
    use HasFactory;


    protected $table = 'opportunity_setups';


    protected $fillable = [
        'opportunity_id',
        'master_id',
        'steps',
        'role',
        'activity',
        'master_type'
    ];


}
