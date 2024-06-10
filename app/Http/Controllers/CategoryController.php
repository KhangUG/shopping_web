<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Components\Recusive;
use Illuminate\Support\Str; // Import Str

class CategoryController extends Controller
{
    private $category;

    public function __construct(Category $category) 
    {
        $this->category = $category;
    }

    public function create()
    {
        $data = $this->category->all();
        $recusive = new Recusive($data);
        $htmlOption = $recusive->categoryRecusive(); 
        return view('category.add', compact('htmlOption'));
    }

    public function index()
    {
        return view('category.index');
    }

    public function store(Request $request)
    {
        $category = new Category();
        $category->name = $request->name;
        $category->parent_id = $request->parent_id;
        $category->slug = Str::slug($request->name); // Sử dụng Str::slug để tạo slug
        $category->save();

        return redirect()->route('categories.index')->with('success', 'Category created successfully.');
    }
}
