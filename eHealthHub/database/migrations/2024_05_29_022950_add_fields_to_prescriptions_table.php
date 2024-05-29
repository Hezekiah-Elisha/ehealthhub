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
        Schema::table('prescriptions', function (Blueprint $table) {
            $table->foreignId('patient_id')->constrained('patients');
            $table->foreignId('doctor_id')->constrained('doctors');
            $table->date('prescription_date');
            $table->text('medication');
            $table->text('dosage');
            $table->text('instructions')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('prescriptions', function (Blueprint $table) {
            //
        });
    }
};
