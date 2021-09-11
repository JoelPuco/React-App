<?php

namespace App\Http\Controllers;

use App\Models\tbl_usuario;
use Illuminate\Http\Request;

class Tbl_UsuariosController extends Controller
{

    //Funcion -> Muestra todos los usuario
    public function index()
    {
        return tbl_usuario::all();
    }

    //Funcion -> Muestra un solo usuario
    public function show($id)
    {
        return tbl_usuario::find($id);
    }

    //Funcion -> Inserta un nuevo usuario
    public function store(Request $request)
    {
        return tbl_usuario::create($request->all());
    }

    //Funcion -> Actualiza los datos del usario
    public function update(Request $request, $id)
    {
        $usuario = tbl_usuario::findOrFail($id);
        $usuario->update($request->all());
        return $usuario;
    }

    //Funcion -> Elimina datos de usuario
    public function delete(Request $request, $id)
    {
        $usuario = tbl_usuario::findOrFail($id);
        $usuario->delete();
        return 204;
    }
}
