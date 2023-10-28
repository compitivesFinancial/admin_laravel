<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact_us extends Model
{
    use HasFactory;

    protected $table = 'contact_us';
    public $timestamps = false;

    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'mobile',
        'message',
        'ip'
    ];



}
