<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('question_categories')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');

        DB::table('question_categories')->insert([
            'id' => 1,
            'name' => 'Ecologia',
            'icon_path' => 'subject-icons/ecologia.png',
        ]);

        DB::table('question_categories')->insert([
            'id' => 2,
            'name' => 'Genética e Evolução',
            'icon_path' => 'subject-icons/genetic.png',
        ]);

        DB::table('question_categories')->insert([
            'id' => 3,
            'name' => 'Citologia',
            'icon_path' => 'subject-icons/citologia.png',
        ]);

        DB::table('question_categories')->insert([
            'id' => 4,
            'name' => 'Fisiologia Humana',
            'icon_path' => 'subject-icons/human.png',
        ]);

        DB::table('question_categories')->insert([
            'id' => 5,
            'name' => 'Microbiologia e Parasitologia',
            'icon_path' => 'subject-icons/virus.png',
        ]);

        DB::table('question_categories')->insert([
            'id' => 6,
            'name' => 'Botânica',
            'icon_path' => 'subject-icons/flower.png',
        ]);

        DB::table('question_categories')->insert([
            'id' => 7,
            'name' => 'Zoologia',
            'icon_path' => 'subject-icons/fox.png',
        ]);

        DB::table('question_categories')->insert([
            'id' => 8,
            'name' => 'Biotecnologia',
            'icon_path' => 'subject-icons/biotec.png'
        ]);
    }
}
