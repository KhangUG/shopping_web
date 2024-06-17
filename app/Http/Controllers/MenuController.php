<?php

namespace App\Http\Controllers;

use App\Components\MenuRecusive;
use Illuminate\Http\Request;
use App\Models\Menu;


class MenuController extends Controller
{
    private $menuRecusive;
    private $menu;
    public function __construct(MenuRecusive $menuRecusive, Menu $menu)
    {
        $this->menuRecusive = $menuRecusive;
        $this->menu = $menu;
    }
    public function index()
    {
        $menus = $this->menu->latest()->paginate(5);
        return view('menus.index', compact('menus'));
    }

    


    public function create(){
        $optionSelect = $this->menuRecusive->menuRecursiveAdd();
        return view('menus.add', compact('optionSelect'));
    }

    public function store(Request $request)
    {
        $this->menu->create([
            'name' => $request->name,
            'parent_id' => $request->parent_id
        ]);

        return redirect()->route('menus.index');
    }

    public function edit($id,Request $request)
    {
        $menuFollowIdEdit = $this->menu->find($id);
        $optionSelect = $this->menuRecusive->menuRecursiveEdit($menuFollowIdEdit->parent_id);
        
        return view('menus.edit', compact('optionSelect', 'menuFollowIdEdit'));
    }

    public function update($id,Request $request)
    {
        $this->menu->find($id)->update([
            'name' => $request->name,
            'parent_id' => $request->parent_id
        ]);

        return redirect()->route('menus.index');
    }

    public function delete($id,Request $request)
    {
        $this->menu->find($id)->delete();
        return redirect()->route('menus.index');
    }

}
