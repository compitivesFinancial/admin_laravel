<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class campaign_attachment extends Model
{
    use HasFactory;

    public $timestamps=false;

    protected $table = 'campaign_attachment';

    protected $fillable=['id','campaign_id','attachment','ext','status'];

}
