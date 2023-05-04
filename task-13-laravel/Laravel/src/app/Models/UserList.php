<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProjectList;


class UserList extends Model
{
    use HasFactory;

    protected $table = 'userList';
    protected $primaryKey = 'id';
    protected $fillable = [
         'user', 'email' 
    ];

    public function products()
    {
        return $this->hasMany(ProjectList::class, 'project_id', 'id');
    }

}
