<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Email_template_type extends Model
{
    use HasFactory;

    public $timestamps=false;
    protected $table = 'email_template_type';


}
