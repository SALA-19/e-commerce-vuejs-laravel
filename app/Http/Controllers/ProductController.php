<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index(){
        $products = Product::query()
        ->where('published','=',1)
        ->orderBy('created_at','desc')
        ->paginate(6);
        return view('product.index', ['products'=>$products]);
    }

    public function view(Product $product)
    {
        return view('product.view', ['product' => $product]);
    }
}
