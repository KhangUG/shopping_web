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
        $htmlOption = $this->getCategory($perentId = '');
        return view('admin.category.add', compact('htmlOption'));
    }

    public function index()
    {
        $categories = $this->category->latest()->paginate(5);
        return view('admin.category.index', compact('categories'));
    }

    public function store(Request $request)
    {
        $category = new Category();
        $category->name = $request->name;
        $category->parent_id = $request->parent_id;
        $category->slug = Str::slug($request->name); 
        $category->save();

        return redirect()->route('admin.categories.index')->with('success', 'Category created successfully.');
    }

    public function getCategory($perentId)
    {
        $data = $this->category->all();
        $recusive = new Recusive($data);
        $htmlOption = $recusive->categoryRecusive($perentId); 
        return $htmlOption;
    }
    public function edit($id){
        $category = $this->category->find($id);
        $htmlOption = $this->getCategory($category->parent_id);
        return view('admin.category.edit', compact('category', 'htmlOption'));

    }
    public function update($id, Request $request){
        $this ->category -> find($id) -> update([
            'name' => $request->name,
            'parent_id' => $request->parent_id,
            'slug' => Str::slug($request->name)  
        ]);
        
        return redirect()->route('admin.categories.index');
    }


    public function delete($id){
        $this->category->find($id)->delete();
        return redirect() -> route('admin.categories.index');
    }
}
