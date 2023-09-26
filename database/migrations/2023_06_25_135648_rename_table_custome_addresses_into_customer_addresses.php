<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::rename('custome_addresses', 'customer_addresses');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::rename('customer_addresses', 'custome_addresses');
    }
};
