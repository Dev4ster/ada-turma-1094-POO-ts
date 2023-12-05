class Usuario {
  static proximoID = 0;

  constructor(nome) {
    this.nome = nome;
    this.id = Usuario.gerarID();
  }

  static gerarID() {
    Usuario.proximoID += 1;
    return Usuario.proximoID;
  }
}

const usuario1 = new Usuario("Teste 1");
const usuario2 = new Usuario("Teste 2");
const usuario3 = new Usuario("Teste 3");

// console.log({
//   usuario1,
//   usuario2,
//   usuario3,
// });

class ProdutoPesoException extends Error {
  constructor(peso) {
    super("Peso inválido ou Peso igual a zero");
    this.peso = peso;
    this.name = "ProdutoPesoException";
  }
}

class ProdutoPromocaoException extends Error {
  constructor(preco) {
    this.preco = preco;
    super("Preço fora da promoção");
    this.name = "ProdutoPromocaoException";
  }
}

class Produto {
  nome; // inicializando
  preco = 0;
  #peso;
  constructor(nome, preco) {
    this.nome = nome; // atribuindo
    this.preco = preco;
    Produto.totalProdutos += 1;
    Produto.somaPrecos += preco;
  }

  #verificarPeso(peso) {
    if (!Number(peso) || Number(peso) < 0) {
      throw new ProdutoPesoException(peso);
    }
  }

  getPeso() {
    return this.#peso;
  }

  setPeso(peso) {
    this.#verificarPeso(peso);
    this.#peso = peso;
  }

  taEmPromocao() {
    return this.preco < 10;
  }

  static calcularMediaDePrecos() {
    if (Produto.totalProdutos === 0) {
      return 0;
    }

    return Produto.somaPrecos / Produto.totalProdutos;
  }
}

Produto.totalProdutos = 0;
Produto.somaPrecos = 0;

class ProdutoFilha extends Produto {
  #peso;
  teste() {
    this.#peso = "qualquer";
  }
}

const filha = new ProdutoFilha();
filha.setPeso("qualquercoisa");
filha.getPeso();

// try {
//   const produto1 = new Produto("Arroz", 12);
//   produto1.setPeso("lala");

//   if (produto1.taEmPromocao()) {
//     console.log("ta em promocao");
//   }

//   console.log("produto1", produto1);
// } catch (error) {
//   if (error instanceof ProdutoPesoException) {
//     console.log(`${error.message} - o peso foi: ${error.peso}`);
//   }

//   if (error instanceof ProdutoPromocaoException) {
//   }
// }

class CarrinhoDeCompras {
  produtos = [];

  adicionarProduto(produto) {
    this.produtos.push(produto);
  }

  exibirMediaDePrecos() {
    console.log(`A média é: ${Produto.calcularMediaDePrecos()}`);
  }
}

const produto1 = new Produto("Arroz", 12);

const produto2 = new Produto("Feijão", 17);

const carrinho = new CarrinhoDeCompras();
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);

carrinho.exibirMediaDePrecos();
