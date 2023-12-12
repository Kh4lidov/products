<?php

declare(strict_types=1);

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\Products\CreateProductRequest;
use App\Http\Requests\Products\EditProductRequest;
use App\Services\ProductService;
use Inertia\Inertia;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Inertia\Response as InertiaResponse;

class ProductsController extends Controller
{
    public function __construct(private readonly ProductService $productService)
    {}

    public function productList(): InertiaResponse
    {
        return Inertia::render('Products/ProductList', [
            'products' => fn () => $this->productService->getAll(),
        ]);
    }

    public function create(CreateProductRequest $request): RedirectResponse
    {
        $this->productService->create([
            'article' => $request->get('article'),
            'name' => $request->get('name'),
            'status' => $request->get('status'),
            'data' => $request->get('data')
        ]);

        return redirect()->back();
    }

    public function edit(int $productId, EditProductRequest $request): RedirectResponse
    {
        $product = $this->productService->findByIdOrFail($productId);

        $this->productService->edit($product, [
            'article' => $request->get('article'),
            'name' => $request->get('name'),
            'status' => $request->get('status'),
            'data' => $request->get('data')
        ]);

        return redirect()->back();
    }

    public function delete(int $productId): Response
    {
        $product = $this->productService->findByIdOrFail($productId);

        $this->productService->delete($product);

        return response()->noContent();
    }
}
