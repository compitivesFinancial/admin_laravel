<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductAttribute extends Model
{
    use HasFactory;


    protected $table = 'product_attributes';

    public $timestamps = false;

    protected $fillable = [
        'title',
        'ar_title',
        'status',
        'position',
        'multiselect'
    ];


    public function product(){

        return $this->hasOne(Product::class);

    }


}
