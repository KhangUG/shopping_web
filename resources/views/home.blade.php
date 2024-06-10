<!-- resources/views/child.blade.php -->

@extends('layout.admin')

@section('title')
<title>Trang chủ</title>
@endsection

@section('content')
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  @include ('partials.content-header', ['name' => 'Home', 'key' => 'home' ])
 

  <!-- Main content -->
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        

        <div class="col-md-12">
        Trang chủ
        </div>
       

      </div>

    </div>
  </div>
</div>
@endsection