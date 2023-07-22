<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class loginRandom extends Model
{
    use HasFactory;
    protected $fillable=['email','count'];
}
