<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class borrower_statement extends Model
{
    use HasFactory;


    protected $table = 'l_borrower_statement';

    protected $fillable = [
        'due_date',
        'principle',
        'interest',
        'total'
    ];



}
