class GeneroMusical {
  static nomeTabela = "genero_musical";
  static listaGeneros = [];

  #codigo;

  constructor(nome, descricao) {
    this.nome = nome;
    this.descricao = descricao;
    this.#codigo = "123";

    GeneroMusical.listaGeneros.push(this);
  }

  static getListaGeneros() {
    console.log("Lista de Gêneros Musicais.");
    GeneroMusical.listaGeneros.forEach((genero) => {
      console.log(`${genero.nome} - ${genero.descricao}`);
    });
  }

  getInfo() {
    console.log(`Gênero: ${this.nome}, Descrição: ${this.descricao}`);
  }

  getCodigo() {
    return this.#codigo;
  }

  setCodigo(codigo) {
    this.#codigo = codigo;
  }
}

const rock = new GeneroMusical("Rock", "Rock 1");
const pop = new GeneroMusical("Pop", "Pop 2");
const jazz = new GeneroMusical("Jazz", "Jazz 3");

console.log("rock", rock);
console.log("rock codigo", rock.getCodigo());
rock.setCodigo("outra coisa");
console.log("rock codigo", rock.getCodigo());
