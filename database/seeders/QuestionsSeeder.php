<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionsSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */

    private $questions = [
        [
            'year' => '2000',
            'questions' => [
                [ // 2
                    'statement' => 'No processo de fabricação de pão, os padeiros, após prepararem a massa
                        utilizando fermento biológico, separam uma porção de massa em forma de
                        "bola" e a mergulham num recipiente com água, aguardando que ela suba,
                        como pode ser observado, respectivamente, em I e II do esquema abaixo.
                        Quando isso acontece, a massa está pronta para ir ao forno.',
                    'answers' => [
                        ['I está correta.'],
                        ['II está correta.' => 'correct'],
                        ['I e II estão corretas.'],
                        ['II e III estão corretas.'],
                        ['III está correta.']
                    ],
                    'image_path' => '01.png',
                    'category' => 8,
                ],
                [ // 10
                    'statement' => 'A adaptação dos integrantes da seleção brasileira de futebol à altitude de La
                        Paz foi muito comentada em 1995, por ocasião de um torneio, como pode ser
                        lido no texto abaixo.
                        "A seleção brasileira embarca hoje para La Paz, capital da Bolívia,
                        situada a 3.700 metros de altitude, onde disputará o torneio
                        Interamérica. A adaptação deverá ocorrer em um prazo de 10 dias,
                        aproximadamente. 0 organismo humano, em altitudes elevadas,
                        necessita desse tempo para se adaptar, evitando-se, assim, risco de um
                        colapso circulatório."
                        (Adaptado da revista Placar, edição fev.1995)
                        A adaptação da equipe foi necessária principalmente porque a atmosfera de La
                        Paz, quando comparada à das cidades brasileiras, apresenta: ',
                    'answers' => [
                        ['menor pressão e menor concentração de oxigênio.' => 'correct'],
                        ['maior pressão e maior quantidade de oxigênio.'],
                        ['maior pressão e maior concentração de gás carbônico.'],
                        ['menor pressão e maior temperatura.'],
                        ['maior pressão e menor temperatura.']
                    ],
                    'category' => 4,
                ],
                [ // 11
                    'statement' => 'A energia térmica liberada em processos de fissão nuclear pode ser utilizada na
                        geração de vapor para produzir energia mecânica que, por sua vez, será
                        convertida em energia elétrica. Abaixo está representado um esquema básico
                        de uma usina de energia nuclear. Com relação ao impacto ambiental causado pela poluição térmica no processo
                        de refrigeração da usina nuclear, são feitas as seguintes afirmações:
                        I o aumento na temperatura reduz, na água do rio, a quantidade de
                        oxigênio nela dissolvido, que é essencial para a vida aquática e para a
                        decomposição da matéria orgânica.
                        II o aumento da temperatura da água modifica o metabolismo dos peixes.
                        III o aumento na temperatura da água diminui o crescimento de bactérias e
                        de algas, favorecendo o desenvolvimento da vegetação.
                        Das afirmativas acima, somente está(ão) correta(s):',
                    'answers' => [
                        ['I'],
                        ['II'],
                        ['III'],
                        ['I e II' => 'correct'],
                        ['II e III'],
                    ],
                    'image_path' => '03.png',
                    'category' => 1,
                ],
                [ //16
                    'statement' => 'No mapa, é apresentada a distribuição geográfica de aves de grande porte е que não voam.
                        Há evidências mostrando que essas aves, que podem ser originárias de um
                        mesmo ancestral, sejam, portanto, parentes. Considerando que, de fato, tal
                        parentesco ocorra, uma explicação possível para a separação geográfica
                        dessas aves, como mostrada no mapa, poderia ser:',
                    'answers' => [
                        ['a grande atividade vulcânica, ocorrida há milhões de anos, eliminou essas aves do Hemisfério Norte.'],
                        ['na origem da vida, essas aves eram capazes de voar, o que permitiu que atravessassem as águas oceânicas, ocupando vários continentes.'],
                        ['o ser humano, em seus deslocamentos, transportou essas aves, assim que elas surgiram na Terra, distribuindo-as pelos diferentes continentes.'],
                        ['o afastamento das massas continentais, formadas pela ruptura de um continente único, dispersou essas aves que habitavam ambientes adjacentes.' => 'correct'],
                        ['a existência de períodos glaciais muito rigorosos, no Hemisfério Norte, provocou um gradativo deslocamento dessas aves para o Sul, mais quente.']
                    ],
                    'image_path' => '04.png',
                    'category' => 2,
                ],
                [ //22
                    'statement' => 'O gráfico abaixo representa o fluxo (quantidade de água em movimento) de um rio, em três regiões distintas, após certo tempo de chuva. Comparando-se, nas três regiões, a interceptação da água da chuva pela
                        cobertura vegetal, é correto afirmar que tal interceptação:',
                    'answers' => [
                        ['é maior no ambiente natural preservado.' => 'correct'],
                        ['independe da densidade e do tipo de vegetação.'],
                        ['é menor nas regiões de florestas.'],
                        ['aumenta quando aumenta o grau de intervenção humana.'],
                        ['diminui à medida que aumenta a densidade da vegetação.'],
                    ],
                    'image_path' => '05.png',
                    'category' => 1,
                ]
            ]
        ],
        [
            'year' => '2001',
            'questions' => [
                [ //3
                    'statement' => 'Numa rodovia pavimentada, ocorreu o tombamento de um caminhão que transportava ácido
                        sulfúrico concentrado. Parte da sua carga fluiu para um curso d\'água não poluído que deve
                        ter sofrido, como conseqüência,
                        I. mortandade de peixes acima da normal no local do derrame de ácido e em suas
                        proximidades.
                        II. variação do pH em função da distância e da direção da corrente de água.
                        III. danos permanentes na qualidade de suas águas.
                        IV. aumento momentâneo da temperatura da água no local do derrame.
                        E correto afirmar que, dessas consequências, apenas podem ocorrer',
                    'answers' => [
                        ['I e II.' => 'correct'],
                        ['II e III.'],
                        ['II e IV.'],
                        ['I, II e IV.'],
                        ['II, III e IV'],
                    ],
                    'category' => 1,
                ]
            ],
        ]
    ];


    public function run(): void
    {
        DB::statement('SET FOREIGN_KEY_CHECKS=0;');
        DB::table('question')->truncate();
        DB::table('answer')->truncate();
        DB::statement('SET FOREIGN_KEY_CHECKS=1;');


        $questionId = 1;
        foreach ($this->questions as $question) {
            $currentYear = $question['year'];
            foreach ($question['questions'] as $actualQuestion) {
                $data = [
                    'statement' => $actualQuestion['statement'],
                    'year' => $currentYear,
                    'category_id' => $actualQuestion['category'],
                ];
                if (isset($actualQuestion['image_path'])) {
                    $data['image_path'] = $actualQuestion['image_path'];
                }
                DB::table('question')->insert($data);

                $answers = $actualQuestion['answers'];
                foreach ($answers as $answerCorrect) {
                    $answerText = isset($answerCorrect[0]) ? $answerCorrect[0] : array_keys($answerCorrect)[0];
                    $answerData = [
                        'text' => $answerText,
                        'question_id' => $questionId,
                        'is_correct' => $answerCorrect == 'correct' ? 1 : 0,
                    ];

                    DB::table('answer')->insert($answerData);
                }

                $questionId++;
            }
        }
    }
}
