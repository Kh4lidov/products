<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Products\CreateProductRequest;
use App\Http\Requests\Products\EditProductRequest;
use App\Models\Product;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;

class ProductsController extends Controller
{
    public function productList(): InertiaResponse
    {
        return Inertia::render('Products/ProductList', [
            'products' => fn () => Product::get()
        ]);
    }

    public function create(CreateProductRequest $request): RedirectResponse
    {
        Product::create([
            "article" => $request->get('article'),
            "name" => $request->get('name'),
            "status" => $request->get('status'),
            "data" => $request->get('data')
        ]);

        return redirect()->back();
    }

    public function edit(int $productId, EditProductRequest $request): RedirectResponse
    {
        $product = Product::findOrFail($productId);

        $product->article = $request->get('article');
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
