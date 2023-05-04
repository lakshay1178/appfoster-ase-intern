<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\UserList;


class ProjectList extends Model
{
    use HasFactory;

    protected $table = 'ProjectList';
    protected $primaryKey = 'id';
    protected $fillable = ['project_id','project', 'projectdesc' ];

    public function category()
    {
        return $this->belongsTo(UserList::class);
    }
}
 
