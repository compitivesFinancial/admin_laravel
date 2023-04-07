<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Email extends Model
{
    use HasFactory;

    public $timestamps=false;
    protected $table = 'email_templates';
    protected $fillable=['title','ar_title','subject','ar_subject','message','ar_message','module'];


}
