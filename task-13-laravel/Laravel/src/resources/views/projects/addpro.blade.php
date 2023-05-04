@extends('user.userpage')
@section('content')
 
<div class="card">
  <div class="card-header">Add Project Page</div>
  <div class="card-body">
      
        <form action="{{ url('users/' . $project_id . '/project') }}" method="POST">
            {!! csrf_field() !!}
            
            <h1>Project ID: {{ $project_id }}</h1>
            <input type="hidden" name="project_id" id="project_id" value="{{ $project_id }}">
            <label>Project Name</label></br>
            <input type="text" name="project" id="project" class="form-control"></br>
            <label>Project Description</label></br>
            <input type="text" name="projectdesc" id="projectdesc" class="form-control"></br>
            <input type="submit" value="Save" class="btn btn-success"></br>
        </form>
   
  </div>
</div>
 
@stop