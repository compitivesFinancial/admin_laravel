<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'ar_title',
        'status',
        'position'
    ];

    
    public function productattribute(){

        return $this->belongsTo(ProductAttribute::class);

    }

    public function productattributedetail(){

        return $this->belongsTo(ProductAttributeDetail::class);

    }
}
