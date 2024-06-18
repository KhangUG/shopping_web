<!-- resources/views/child.blade.php -->

@extends('layout.admin')

@section('title')
<title>Add product</title>
@endsection

@section('content')
<div class="content-wrapper">
  @include('partials.content-header', ['name' => 'product', 'key' => 'List'])


  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <a href="{{route('product.create')}}" class='btn btn-success float-right m-2'>Add</a>
        </div>

        <div class="col-md-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Giá</th>
                <th scope="col">Hình ảnh</th>
                <th scope="col">Danh mục</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
             
              <tr>
                <th scope="row">1</th>
                <td>Iphone 11</td>
                <td>5.000.000</td>
                <td>
                    <img src="" alt="">
                </td>
                <td>Điện thoại</td>
                

                <td>
                  <a href="" class="btn btn-default">Edit</a>
                  <a href="" class="btn btn-danger">Delete</a>
                </td>
              </tr>
             
            </tbody>
          </table>
        </div>
        <div class="col-md-3">

        </div>
      </div>

    </div>
  </div>
</div>
@endsection