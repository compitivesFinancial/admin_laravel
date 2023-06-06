<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQualifiedInvestorAttachementsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('qualified_investor_attachements', function (Blueprint $table) {
            $table->id();
            $table->string("investor_id");
            $table->string("min3WorkYear_url");
            $table->string("certificateCME1_url");
            $table->string("professionalCertificate_url");
            $table->string("investTenOpport_url");
            $table->string("netOrigin_url");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('qualified_investor_attachements');
    }
}
