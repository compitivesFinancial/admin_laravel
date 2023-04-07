<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductAttributeDetail extends Model
{
    use HasFactory;

    protected $table = 'productattributedetails';

    protected $fillable = [
        'title',
        'ar_title',
        'status',
        'position',
        'subtitle',
        'subtitle_ar'
    ];


    public function product(){

        return $this->hasOne(Product::class);

    }



}
