<?php

namespace App\Http\Requests\Products;

use App\Models\Product;
use Illuminate\Validation\Rule;

class EditProductRequest extends CreateProductRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $rules = parent::rules();

        $rules['article'] = [
            'required',
            'alpha_num:ascii',
            Rule::unique(Product::class)->ignore($this->route('productId'))
        ];

        return $rules;
    }
}
