<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Products\CreateProductRequest;
use App\Http\Requests\Products\EditProductRequest;
use App\Models\Product;
use App\Notifications\ProductCreated;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Notification;

class ProductsController extends Controller
{
    public function productList()
    {
        return Inertia::render('Products/ProductList', [
            'products' => fn () => Product::get(),
        ]);
    }

    public function create(CreateProductRequest $request): RedirectResponse
    {
        $product = Product::create([
            "article" => $request->get('article'),
            "name" => $request->get('name'),
            "status" => $request->get('status'),
            "data" => $request->get('data')
        ]);

        Notification::route(
            'mail',
            config('products.email')
        )
            ->notify(new ProductCreated($product));

        return redirect()->back();
    }

    public function edit(int $productId, EditProductRequest $request): RedirectResponse
    {
        $product = Product::findOrFail($productId);

        if ($request->user()->is_admin) {
            $product->article = $request->get('article');
        }

        $product->name = $request->get('name');
        $product->status = $request->get('status');
        $product->data = $request->get('data');

        $product->save();

        return redirect()->back();
    }

    public function delete(int $productId): Response
    {
        Product::findOrFail($productId)->delete();

        return response()->noContent();
    }
}
