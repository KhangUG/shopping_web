<?php

namespace App\Traits;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str; // Thêm dòng này để import class Str

trait StorageImageTrait {
    public function storageTraitUpload($request, $fieldName, $folderName) {
        if($request->hasFile($fieldName)) {
            $file = $request->file($fieldName); // Sử dụng dấu nháy kép cho biến $fieldName
            $fileNameOrigin = $file->getClientOriginalName();
            $fileNameHash = Str::random(20) . '.' . $file->getClientOriginalExtension(); // Sử dụng Str::random()
            $filePath = $file->storeAs('public/' . $folderName . '/' . auth()->id(), $fileNameHash);
    
            $dataUploadTrait = [
                'file_name' => $fileNameOrigin,
                'file_path' => Storage::url($filePath), // Sử dụng dấu nháy kép cho biến $filePath
            ];
            return $dataUploadTrait;
        }
        
        return null;
    }
}
