<?php

use App\Http\Controllers\Products\ProductsController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect()->route('login');
});

Route::prefix('/products')->middleware(['auth', 'has_role:' . config('products.role')])->group(function () {
    Route::get('/', [ProductsController::class, 'productList'])->name('products');
    Route::post('/', [ProductsController::class, 'create'])->name('products.create');
    Route::put('/{productId}', [ProductsController::class, 'edit'])->name('products.edit');
    Route::delete('/{productId}', [ProductsController::class, 'delete'])->name('products.delete');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
