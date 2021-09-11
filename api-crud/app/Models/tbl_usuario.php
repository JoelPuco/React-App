<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tbl_usuario extends Model
{
    use HasFactory;


    protected $table = 'tbl_usuarios';

    protected $primaryKey = 'id_usuario';


    protected $fillable = [
        'nombre_usuario',
        'cedula_usuario',
        'telefono_usuario',
        'mail_usuario',
    ];

}
