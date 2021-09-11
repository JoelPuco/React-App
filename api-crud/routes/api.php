<?php

use App\Http\Controllers\Tbl_UsuariosController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('usuario', [Tbl_UsuariosController::class, 'index']);
Route::get('usuario/{id}', [Tbl_UsuariosController::class, 'show']);
Route::post('usuario', [Tbl_UsuariosController::class, 'store']);
Route::put('usuario/{id}', [Tbl_UsuariosController::class, 'update']);
Route::delete('usuario/{id}', [Tbl_UsuariosController::class, 'delete']);
