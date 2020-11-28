export default class Exercicio {
  constructor(id, nome, descricao, imagem) {
    this._id = id;
    this._nome = nome;
    this._descricao = descricao;
    this._imagem = imagem;
  }

  get id() {
    return this._id;
  }
  get nome() {
    return this._nome;
  }
  get descricao() {
    return this._descricao;
  }
  get imagem() {
    return this._imagem;
  }
}
