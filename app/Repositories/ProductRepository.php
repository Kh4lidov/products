<?php

declare(strict_types=1);

namespace App\Repositories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Collection;

class ProductRepository
{
    public function findByIdOrFail(int $id): Product
    {
        return Product::findOrFail($id);
    }

    public function getAll(): Collection|array
    {
        return Product::get();
    }

    public function save(Product $product): bool
    {
        return $product->save();
    }

    public function delete(Product $product): bool
    {
        return $product->delete();
    }
}
