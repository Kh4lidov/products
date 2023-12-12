<?php

declare(strict_types=1);

namespace App\Services;

use App\Events\ProductCreatedEvent;
use App\Models\Product;
use App\Repositories\ProductRepository;
use Illuminate\Auth\AuthManager;
use Illuminate\Database\Eloquent\Collection;

class ProductService
{
    public function __construct(
        private readonly ProductRepository $productRepository,
        private readonly AuthManager $authManager
    ) {}

    public function findByIdOrFail(int $productId): Product
    {
        return $this->productRepository->findByIdOrFail($productId);
    }

    public function getAll(): Collection|array
    {
        return $this->productRepository->getAll();
    }

    public function create(array $data): Product
    {
        $product = new Product([
            'article' => $data['article'],
            'name' => $data['name'],
            'status' => $data['status'],
            'data' => $data['data']
        ]);

        $result = $this->productRepository->save($product);

        if ($result === false) {
            throw new \RuntimeException('Product was not saved!');
        }

        event(new ProductCreatedEvent($product));

        return $product;
    }

    public function edit(Product $product, array $data): Product
    {
        if ($this->authManager->user()->is_admin) {
            $product->article = $data['article'];
        }

        $product->name = $data['name'];
        $product->status = $data['status'];
        $product->data = $data['data'];

        $result = $this->productRepository->save($product);

        if ($result === false) {
            throw new \RuntimeException('Product was not updated!');
        }

        return $product;
    }

    public function delete(Product $product): bool
    {
        $result = $this->productRepository->delete($product);

        if ($result === false) {
            throw new \RuntimeException('Product was not deleted!');
        }

        return true;
    }
}
