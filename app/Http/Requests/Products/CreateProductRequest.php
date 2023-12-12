<?php

declare(strict_types=1);

namespace App\Http\Requests\Products;

use App\Models\Product;
use Illuminate\Foundation\Http\FormRequest;

class CreateProductRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'article' => ['required', 'alpha_num:ascii', 'unique:'.Product::class],
            'name' => ['required', 'min:10']
        ];
    }

    public function messages(): array
    {
        return [
            'article.required' => 'Поле "Артикул" обязательно.',
            'article.unique' => 'Такой артикул уже существует.',
            'article.alpha_num' => 'Поле "Артикул" должно содержать только латинские символы и цифры.',
            'name.required' => 'Поле "Название" обязательно.',
            'name.min' => 'Поле "Название" должно содержать не менее 10 символов.'
        ];
    }
}
