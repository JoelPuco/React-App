<?php

namespace Database\Seeders;

use App\Models\tbl_usuario;
use Illuminate\Database\Seeder;

class tbl_usuariosTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //Vaciar tabla
        tbl_usuario::truncate();

        $faker = \Faker\Factory::create();
        
        //Variables cedula y telefono
        $cedula = '123456789';
        $telefono = '091234567';

        //Funcion para crear datos ficticios
        for($i = 0; $i < 7 ; $i++){
            tbl_usuario::create([
                'nombre_usuario' => $faker->name,
                'cedula_usuario' => $cedula.$i,
                'telefono_usuario' => $telefono.$i,
                'mail_usuario' => $faker->email,
            ]);
        }
    }
}
