@extends('user.userpage')

@section('content')
<div class="container">
    <div class="pull-left">        
        <nav class="navbar navbar-expand-lg  navbar-dark bg-dark d-flex justify-content-end mx-5 rounded px-3">
            <div class="navbar-nav ml-auto">
                <a href="{{ url('/users') }}"> Go Back </a>
            </div>
            <div class="navbar-brand mr-auto ml-3">
                <h2>Project Page</h2>
            </div>
            <div class="navbar-nav ml-auto">
            <a href="{{ url('/projects/' . $userId . '/create') }}" class="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i> Add Project</a>

            </div>
        </nav>


        <br>
        </br>

        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="table-responsive">
                        <table class="table table-striped text-center">
                            <thead >
                                <tr class="table-dark">
                                    <th scope="col">#</th>
                                    <th scope="col">Porject Name</th>
                                    <th scope="col">Project Description</th>
                                    <th scope="col">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                            @foreach($users as $project)
                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td>{{ $project->project }}</td>
                                    <td>{{ $project->projectdesc }}</td>
                                    <td>
                                        <a href="{{ url('/users/' . $project->id . '/edit') }}" title="Edit Student"><button class="btn btn-primary btn-sm"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></a>
                                        <form method="POST" action="/users/{{$project->project_id }}/delete" accept-charset="UTF-8" style="display:inline">
                                            {{ method_field('DELETE') }}
                                            {{ csrf_field() }}
                                            <button type="submit" class="btn btn-danger btn-sm" title="Delete Contact"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>   
    </div>
</div>
@endsection