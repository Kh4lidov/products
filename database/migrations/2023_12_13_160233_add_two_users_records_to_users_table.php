<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Hash;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        DB::table('users')->insert([
            'name' => 'Администратор',
            'email' => 'admin@example.com',
            'password' => Hash::make('admin12345'),
            'role' => 'admin'
        ]);

        DB::table('users')->insert([
            'name' => 'Менеджер продуктов',
            'email' => 'products_manager@example.com',
            'password' => Hash::make('manager12345'),
            'role' => config('products.role')
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::table('users')->where('email', 'admin@example.com')->delete();
        DB::table('users')->where('email', 'products_manager@example.com')->delete();
    }
};
