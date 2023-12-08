<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;

class Product extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'article',
        'name',
        'status',
        'data'
    ];

    protected $casts = [
        'data' => 'json'
    ];

    public function scopeAvailable(Builder $query)
    {
        return $query->where('status', '=', 'available');

    }
}
