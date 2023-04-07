<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admin_Log extends Model
{
    use HasFactory;


    protected $fillable = [
        'admin_id',
        'ip',
        'created_on'
    ];


    public $timestamps = false;


}
