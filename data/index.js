import Agrupamento from "../model/Agrupamento";
import Exercicio from "../model/Exercicio";
const assets = "../assets/exercicios/";

const ExerciciosAbdomen = [
  new Exercicio(
    1,
    "Abdômen básico",
    "Esse exercício pode ser executado na posição deitado no chão e os pés fixos no chão e dando uma leve inclinação para frente colocando as mãos na nuca.",
    require(assets + "abdominal_basico.png"),
    1
  ),
  new Exercicio(
    2,
    "Abdômen com apoio",
    "Com as mãos na nuca, faça o movimento de elevação, depois volte à mesma posição. É importante que as pernas fiquem paralelas ao solo e não mudem de posição. Você pode usar uma cadeira ou banco para apoiar as pernas.",
    require(assets + "abdominal_com_apoio.png"),
    1
  ),
  new Exercicio(
    3,
    "Abdominal prancha",
    "O movimento é simples: de barriga para baixo, apoie os cotovelos e os antebraços e também a ponta dos pés que devem estar na linha dos ombros. Mantenha essa posição por um determinado tempo, o ideal é começar com 30 segundos e ir aumentando de forma progressiva.",
    require(assets + "abdominal_prancha.png"),
    1
  ),
];

const ExerciciosPeito = [
  new Exercicio(
    1,
    "Flexão de braço",
    "Essa posição dá ênfase a parte superior do peito, o movimento deve fluir com o tronco ereto, pés apoiados em um banco e mãos no chão ou pés apoiados acima da linha das mãos, conforme exemplo abaixo.",
    require(assets + "flexao_braco.png"),
    2
  ),
  new Exercicio(
    2,
    "Flexão declinada",
    "Essa posição dá ênfase a parte superior do peito, o movimento deve fluir com o tronco ereto, pés apoiados em um banco e mãos no chão ou pés apoiados acima da linha das mãos, conforme exemplo abaixo.",
    require(assets + "flexao_declinado.png"),
    2
  ),
  new Exercicio(
    3,
    "Flexão inclinada",
    "Essa posição dá ênfase a parte inferior do peito, o movimento deve fluir com o tronco ereto, pés apoiados no chão e mãos em um banco ou mão apoiadas acima da linha dos pés, conforme exemplo abaixo.",
    require(assets + "flexao_inclinado.png"),
    2
  ),
];

const ExerciciosBraço = [
  new Exercicio(
    1,
    "Elevação lateral(com elástico)",
    "De pé, segure o elástico com os braços estendidos, um de cada lado. Eleve os braços para fora até que os halteres atinjam o nível dos ombros. Regresse lentamente à posição inicial.",
    require(assets + "elevacao_frontal_com_elastico.png"),
    3
  ),
  new Exercicio(
    2,
    "Elevação frontal(com elástico)",
    "De pé segure o elástico palmas das mãos voltadas para dentro e à largura dos ombros. Os braços devem estar completamente esticados. Puxe o elástico  para a frente e para cima até ao nível dos ombros. Regresse lentamente à posição inicial.",
    require(assets + "elevacao_lateral_com_elastico.png"),
    3
  ),
  new Exercicio(
    3,
    "Rosca direta(com elástico)",
    "Nesse exercício os braços sobem e descem ao mesmo tempo.",
    require(assets + "rosca_direta_com_elastico.png"),
    3
  ),
];

const ExerciciosPerna = [
  new Exercicio(
    1,
    "Agachamento",
    "O movimento deve ser sempre observando a angulação adequada entre os joelhos e as pernas que deve ser de 90°.",
    require(assets + "agachamento.png"),
    4
  ),
  new Exercicio(
    2,
    "Avanço ou Afundo",
    "Aqui você deverá apoiar as mãos só que com o corpo na posição de lado para mesa ou cadeira. O movimento simula uma passada na qual a perna que será trabalhada fica à frente do corpo e a perna de apoio deverá descer até que o joelho da frente forme um ângulo de 90°, conforme exemplo abaixo:",
    require(assets + "avanco_ou_afundo.png"),
    4
  ),
];

const ExerciciosGluteo = [
  new Exercicio(
    1,
    "Elevação pélvica",
    "Basta ficar na posição deitada de costas no chão, os braços apoiados, retos, ao lado do corpo e com os joelhos fletidos. Em seguida basta erguer o quadril para trabalhar a musculatura, conforme exemplo abaixo:",
    require(assets + "elevacao_pelvica.png"),
    5
  ),
];

export default Agrupamentos = [
  new Agrupamento(1, "Abdômen", ExerciciosAbdomen),
  new Agrupamento(2, "Peito", ExerciciosPeito),
  new Agrupamento(3, "Braços", ExerciciosBraço),
  new Agrupamento(4, "Pernas", ExerciciosPerna),
  new Agrupamento(5, "Gluteo", ExerciciosGluteo),
];
