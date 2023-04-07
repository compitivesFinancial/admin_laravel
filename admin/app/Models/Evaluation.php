<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluation extends Model
{
    use HasFactory;


    protected $table = 'evaluations';

    protected $fillable = [
        'title',
        'ar_title',
        'status',
        'position',
        'role_id',
        'rank_type'
    ];


    public function product(){

        return $this->hasOne(Product::class);

    }


}
