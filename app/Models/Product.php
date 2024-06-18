<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $guarded = [];
    public function images(){
        return $this->hasMany(ProductImage::class, 'product_id');
    }

    public function tags(){
        return $this->belongsToMany(tag::class, 'product_tags', 'product_id', 'tag_id');
    }
    use HasFactory;
}
