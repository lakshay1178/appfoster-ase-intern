@extends('user.userpage')
@section('content')
<div class="card">
  <div class="card-header">Edit Page</div>
  <div class="card-body">
      
      <form action="{{ url('users/' . $user->id) }}" method="post">
      @csrf
        @method("PATCH")
        <input type="hidden" name="id" id="id" value="{{$user->id}}" />
        <label>Name</label></br>
        <input type="text" name="name" id="name" value="{{$user->name}}" class="form-control"></br>
        <label>Email</label></br>
        <input type="text" name="email" id="email" value="{{$user->email}}" class="form-control"></br>
        <input type="submit" value="Update" class="btn btn-success"></br>
      </form>
  
  </div>
</div>
@stop