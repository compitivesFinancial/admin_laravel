<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class loan_type extends Model
{
    use HasFactory;


    protected $table = 'loan_types';

    protected $fillable = [
        'title',
        'ar_title'
    ];



}
