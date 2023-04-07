<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class kyc_info_type extends Model
{
    use HasFactory;
    public $timestamps=false;
    protected $fillable=['title','ar_title','position','status'];
}
