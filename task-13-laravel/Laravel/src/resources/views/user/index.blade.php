@extends('user.userpage')

@section('content')
<div class="container">
    <div class="pull-left">        
        <nav class="navbar navbar-expand-lg  navbar-dark bg-dark d-flex justify-content-end mx-5 rounded px-3">
            <div class="navbar-brand mr-auto ml-3">
                <h2>UserPage</h2>
            </div>
            <div class="navbar-nav ml-auto">
                <a href="{{ url('/users/create') }}" class="btn btn-success"><i class="fa fa-plus" aria-hidden="true"></i> Add User</a>
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
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Project</th>
                                    <th scope="col">Options</th>
                                </tr>
                            </thead>
                            <tbody>
                            @foreach($users as $user)
                                <tr>
                                    <td>{{ $loop->iteration }}</td>
                                    <td>{{ $user->user }}</td>
                                    <td>{{ $user->email }}</td>
                                    <td><a href="/users/{{$user->id }}/project" title="View Projects"><i class="fa fa-eye" aria-hidden="true"></i></a></td>
                                    <td>                                        
                                        <a href="{{ url('/users/' . $user->id . '/edit') }}" title="Edit User"><button class="btn btn-primary btn-sm"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button></a>
                                        <form method="POST" action="/users/{{$user->id }}/delete" accept-charset="UTF-8" style="display:inline">
                                            
                                            <button type="submit" class="btn btn-danger btn-sm" title="Delete Contact" ><i class="fa fa-trash-o" aria-hidden="true"></i></button>
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