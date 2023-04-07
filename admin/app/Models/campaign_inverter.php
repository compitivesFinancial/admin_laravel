<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class campaign_inverter extends Model
{
    use HasFactory;
    public $timestamps=false;
    protected $table = 'camaign_invester';


    protected $fillable=["campaign_id","invester_id","amount"];

}
