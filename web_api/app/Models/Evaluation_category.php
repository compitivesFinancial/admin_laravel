<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluation_category extends Model
{
    use HasFactory;


    protected $table = 'evaluation_category';

    public $timestamps = false;

    protected $fillable = [
        'title',
        'ar_title',
        'status',
        'position'
    ];


    public function product(){
        return $this->hasOne(Product::class);
    }


}
