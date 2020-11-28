import Agrupamento from "../model/Agrupamento";
import Exercicio from "../model/Exercicio";

const ExerciciosAbdomen = [
  new Exercicio(1, "Abdômen básico"),
  new Exercicio(2, "Abdômen bicicleta"),
  new Exercicio(3, "Abdominal prancha"),
];

const ExerciciosPeito = [new Exercicio(1, "Flexão de braço")];

export default Agrupamentos = [
  new Agrupamento(1, "Abdômen", ExerciciosAbdomen),
  new Agrupamento(2, "Peito", ExerciciosPeito),
];
