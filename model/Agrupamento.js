export default class Agrupamento {
  constructor(id, nome, exercicios) {
    this._id = id;
    this._nome = nome;
    this._exercicios = exercicios;
  }

  get id() {
    return this._id;
  }
  get nome() {
    return this._nome;
  }
  get exercicios() {
    return [...this._exercicios];
  }
}
