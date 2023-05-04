<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProjectController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|

*/



// Resourceful routes for UserController
Route::resource('/users' , 'App\Http\Controllers\UserController');

// Route to handle form submission for user update
Route::put('/users/{userList}', 'App\Http\Controllers\UserController@update');

// Route to handle form submission for user creation
Route::post('/users', 'App\Http\Controllers\UserController@store');

// Route to handle form submission for user deletion
Route::post('users/{id}/delete', [UserController::class, 'destroy']);

// Route to display projects associated with a user
Route::get('users/{id}/project', [ProjectController::class, 'index']);

// Route to display form for creating a project associated with a user
Route::get('/projects/{id}/create', [ProjectController::class, 'create']);

// Route to handle form submission for project creation
Route::post('/projects', [ProjectController::class, 'store']);


Route::post('projects/{id}/delete', [ProjectController::class, 'destroy']);

