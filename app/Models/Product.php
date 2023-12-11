<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Builder;

/**
 * App\Models\Product
 *
 * @property int $id
 * @property string $article
 * @property string $name
 * @property string $status
 * @property array $data
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @method static Builder|Product available()
 * @method static Builder|Product newModelQuery()
 * @method static Builder|Product newQuery()
 * @method static Builder|Product onlyTrashed()
 * @method static Builder|Product query()
 * @method static Builder|Product whereArticle($value)
 * @method static Builder|Product whereCreatedAt($value)
 * @method static Builder|Product whereData($value)
 * @method static Builder|Product whereDeletedAt($value)
 * @method static Builder|Product whereId($value)
 * @method static Builder|Product whereName($value)
 * @method static Builder|Product whereStatus($value)
 * @method static Builder|Product whereUpdatedAt($value)
 * @method static Builder|Product withTrashed()
 * @method static Builder|Product withoutTrashed()
 * @mixin \Eloquent
 */
class Product extends Model
{
    use SoftDeletes;

    public const AVAILABLE_STATUS = 'available';

    public const UNAVAILABLE_STATUS = 'unavailable';

    public const STATUSES = [
        self::AVAILABLE_STATUS => 'Доступен',
        self::UNAVAILABLE_STATUS => 'Не доступен'
    ];

    protected $fillable = [
        'article',
        'name',
        'status',
        'data'
    ];

    protected $casts = [
        'data' => 'json'
    ];

    public function scopeAvailable(Builder $query): Builder
    {
        return $query->where('status', '=', self::AVAILABLE_STATUS);

    }

    public function getStatus()
    {
        return self::STATUSES[$this->status];
    }
}
