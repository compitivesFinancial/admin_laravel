<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    protected $table = 'pages';
    protected $fillable = [
        'title',
        'ar_title',
        'description',
        'ar_description',
        'status',
        'image',
        'position'
    ];

    

}
