class Livro {
  isbn;
  constructor(titulo = "default", autor, anoPublicacao) {
    if (!titulo) throw new Error("forneça um titulo");
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }

  getTitulo() {
    return this.titulo;
  }

  getAutor() {
    return this.autor;
  }

  getAnoPublicacao() {
    return this.anoPublicacao;
  }

  imprimirDetalhesLivro() {
    console.log(`Titulo: ${this.titulo}`);
    console.log(`Autor: ${this.autor}`);
    console.log(`Ano: ${this.anoPublicacao}`);
  }
}

class LivroView {
  constructor(livros = [], element) {
    this.livros = livros;
  }

  append(livro) {
    return `<div${livro.titulo} </div>`;
  }

  print() {
    for (livro in this.livros) {
      element.append(this.append(livro));
    }
  }
}

const livro = new Livro("Javascript", "Fulano de Tal", 2009);
const livro1 = new Livro("Javascript1", "Fulano de Tal", 2009);
livro1.isbn = "";

const livroView = new LivroView(
  [livro, livro1],
  document.querySelector("body")
);
livroView.print();

class ContaBancaria {
  constructor(nome, saldo) {
    this.nome = nome;
    this.saldo = saldo;
  }

  getSaldo() {
    return Number(this.saldo).toFixed(2);
  }

  setSaldo(novoSaldo) {
    if (typeof novoSaldo === "number") {
      this.saldo = novoSaldo;
    }
  }

  sacar(valor) {
    if (this.saldo <= valor) {
      this.setSaldo(this.saldo - valor);
      return valor;
    }
  }
}

const conta = new ContaBancaria("victor", 10);
conta.saldo = 1000;
conta.setSaldo("100bdhgf00000");
