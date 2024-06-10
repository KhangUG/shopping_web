<!-- resources/views/child.blade.php -->

@extends('layout.admin')

@section('title')
<title>Trang chủ</title>
@endsection

@section('content')
<div class="content-wrapper">
   @include('partials.content-header', ['name' => 'category', 'key' => 'Add' ])

    <!-- Main content -->
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-6">
                <form>
                    <div class="form-group">
                        <label>Tên Danh Mục</label>
                        <input type="email" class="form-control" placeholder="Nhập tên danh mục ">

                    </div>
                    <div class="form-group">
                        <label >Chọn danh mục cha </label>
                        <select class="form-control" >
                            <option value="0">Chọn danh mục cha</option>
                            {!!$htmlOption!!}
                        </select>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                </div>
                


            </div>

        </div>
    </div>
</div>
@endsection