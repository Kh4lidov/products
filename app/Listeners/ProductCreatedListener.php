<?php

declare(strict_types=1);

namespace App\Listeners;

use App\Events\ProductCreatedEvent;
use App\Notifications\ProductCreated;
use Illuminate\Support\Facades\Notification;

class ProductCreatedListener
{
    /**
     * Handle the event.
     */
    public function handle(ProductCreatedEvent $event): void
    {
        Notification::route(
            'mail',
            config('products.email')
        )
            ->notify(new ProductCreated($event->product));
    }
}
