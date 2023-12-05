// Instância Classe != Objeto

// Objeto Literal
const victor = {
  nome: "Victor",
  falar() {
    console.log("Oi");
  },
  andar() {},
  comer() {},
};

const murilo = {
  nome: "Murilo" + 1.6,
  falar() {
    console.log("Oi");
  },
  andar() {},
};

murilo.qualquercoisa = 0;

const emily = new Object({
  nome: "Emily",
  falar() {
    console.log("Oi");
  },
  andar() {},
});

const lista = [];

// Modelo / Molde = para criar pessoas

// Definição

/**
Classe: Define um tipo de objeto e seu comportamento. Serve como um modelo para criar instâncias.
Objeto Literal: Cria um objeto diretamente com propriedades e métodos específicos.
Instanciação:

Classe: É usada para criar instâncias usando a palavra-chave new.
Objeto Literal: É criado diretamente usando a sintaxe de chaves {}.
Reusabilidade:

Classe: Pode ser usada como um modelo para criar múltiplas instâncias do mesmo tipo de objeto.
Objeto Literal: É uma única instância, não serve como um modelo reutilizável.
 */

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(this.nome);
    Pessoa.falar(this);
  }

  //////
  static IDADE_PERMITIDA = 20;

  static falar(pessoa) {
    console.log(`oi ${pessoa.nome}`);
  }
}

const luana = new Pessoa("Luana", 10);
luana.apresentar();

const fernando = new Pessoa("Fernando", 11);
fernando.apresentar();

const bruna = new Pessoa("Bruna", 12);
bruna.apresentar();

Pessoa.falar(bruna);

if (luana.idade > Pessoa.IDADE_PERMITIDA) {
}

const data = new Date();
const ano = data.getFullYear();
