export default class ExercicioFicha {
  constructor(id, exercicio, agrupamento) {
    this._id = id;
    this._exercicio = exercicio;
    this._agrupamento = agrupamento;
  }

  get id() {
    return this._id;
  }
  get exercicio() {
    return this._exercicio;
  }
  get agrupamento() {
    return this._agrupamento;
  }
}
