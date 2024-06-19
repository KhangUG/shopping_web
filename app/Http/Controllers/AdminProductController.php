<?php

namespace App\Http\Controllers;
use App\Models\Category;
use App\Components\Recusive;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\ProductTag;
use App\Traits\StorageImageTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use App\Models\Tag;
use Illuminate\Support\Facades\Log;
use Exception;
use Illuminate\Support\Facades\DB;

class AdminProductController extends Controller
{      
    use StorageImageTrait;
    private $category;
    private $product;
    private $productImage;
    private $tag;
    private $productTag;
    public function __construct(Category $category, Product $product, ProductImage $productImage, Tag $tag, ProductTag $productTag){
        $this->category = $category;
        $this->product = $product;
        $this->productImage = $productImage;
        $this->tag= $tag;
        $this->productTag = $productTag;
    }
    public function index(){
        $products = $this->product->latest()->paginate(5);
        return view('admin.product.index', compact('products'));
    }

    public function create(){
        $htmlOption = $this->getCategory($perentId = '');
        return view('admin.product.add', compact('htmlOption'));
    }

    public function getCategory($perentId)
    {
        $data = $this->category->all();
        $recusive = new Recusive($data);
        $htmlOption = $recusive->categoryRecusive($perentId); 
        return $htmlOption;
    }

    public function store(Request $request)
{   
    try{
        DB::beginTransaction();
        $dataProductCreate = [
            'name' => $request->name,
            'price' => $request->price,
            'content' => $request->contents,
            'user_id' => auth()->id(),
            'category_id' => $request->category_id
        ];
    
        $dataUploadFeatureImage = $this->storageTraitUpload($request, 'feature_image_path', 'products');
    
        if (!empty($dataUploadFeatureImage)) {
            $dataProductCreate['feature_image_name'] = $dataUploadFeatureImage['file_name'];
            $dataProductCreate['feature_image_path'] = $dataUploadFeatureImage['file_path'];
        }
    
        $product = $this->product->create($dataProductCreate);
    
        //insert vao product image
    
        if($request->hasFile('image_path')){
            foreach($request->image_path as $fileItem){
                $dataProductImageDetail = $this->storageTraitUploadMutiple($fileItem,'products');
                $product->images()->create([
                    'product_id' =>$product->id,
                    'image_path' => $dataProductImageDetail['file_path'],
                    'image_name' => $dataProductImageDetail['file_name'],
    
                ]);
                
            }
        }
    
        //insert tag for product
        if(!empty($request->tags)){
            foreach($request->tags as $tagItem){
                //Insert ddeesn bang tag
                $tagInstance = $this->tag->firstOrCreate(['name' => $tagItem]);
                $tagIds[] = $tagInstance->id;
            }
        }
        
        $product->tags()->attach($tagIds);
        DB::commit();
        return redirect()->route('product.index');
    
    
    }catch(\Exception $exception){
        DB::rollBack();
        Log::error('Message: ' . $exception->getMessage(). 'Line: ' . $exception->getFile());
    }   
}


    public function edit($id)
    {
        $product = $this->product->find($id);
        $htmlOption = $this->getCategory($perentId = '');
        return view('admin.product.edit', compact('htmlOption', 'product'));
    }

}
