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
    function  categoryRecusive($perentId,$id = 0, $text = '')
    {
       
        foreach($this->data as $value){
            if($value['parent_id'] == $id){
                if(!empty($perentId) && $perentId == $value['id']){
                    $this->htmlSlelect .= "<option selected value='". $value['id']. " '>". $text . $value['name'] .  "</option>";
                }else{
                    $this->htmlSlelect .= "<option value='". $value['id']. " '>". $text . $value['name'] .  "</option>";
                }
                
                $this->categoryRecusive($perentId,$value['id'], $text. '--');
            }
        }

        return $this->htmlSlelect;
    }
 } 
