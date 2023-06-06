<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class qualified_investor_attachement extends Model
{
    use HasFactory;
    protected $fillable = [
        "investor_id",
        "min3WorkYear_url",
        "certificateCME1_url",
        "professionalCertificate_url",
        "investTenOpport_url",
        "netOrigin_url",
    ];
}
