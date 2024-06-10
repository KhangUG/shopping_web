<?php

namespace App\Components;
use App\Models\Category;

class Recusive {
    private $data;
    private $htmlSlelect = '';
    public function __construct($data)
    {
        $this->data = $data;
    }
    function  categoryRecusive($id = 0, $text = '')
    {
       
        foreach($this->data as $value){
            if($value['parent_id'] == $id){
                $this->htmlSlelect .= "<option value='". $value['id']. " '>". $text . $value['name'] .  "</option>";
                $this->categoryRecusive($value['id'], $text. '--');
            }
        }

        return $this->htmlSlelect;
    }
 } 
