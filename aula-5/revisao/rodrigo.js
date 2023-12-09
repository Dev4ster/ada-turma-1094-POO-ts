/***
  Sistema de Gerenciamento de Biblioteca:
Crie um sistema que permita adicionar, 
remover e listar livros em uma biblioteca. 
Use classes para representar livros e a biblioteca.
 */
const prompt = require('prompt-sync')();


class Livro{
  constructor(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
  }
}

class Biblioteca{
  livros = [];

  adicionar(livro){
    this.livros.push(livro)
    console.log(`${livro.titulo} foi adicionado a biblioteca.`)
  }
  
  remover(titulo){
    const livro = this.livros.find(livro => livro.titulo.toUpperCase() === titulo.toUpperCase() ) //retorna o livro encontrado.
    if(livro){
      this.livros = this.livros.filter(livro => livro.titulo.toUpperCase()  != titulo.toUpperCase() )
      console.log(`${titulo} removido da biblioteca.`)
    }else{
      console.log(`O livro com o titulo ${titulo} não encontrado.`)
    }
  }

  listar(){
    console.log("Livros na biblioteca.")
    this.livros.forEach(livro => console.log(`${livro.titulo} - ${livro.autor}`))
  }
}

const biblioteca = new Biblioteca();

const livro1 = new Livro("Senhor dos anéis", "Tolkien")
const livro2 = new Livro("Turma da Mônica", "Mauricio de Souza")

// biblioteca.adicionar(livro1);
// biblioteca.adicionar(livro2);
// console.log('')
// biblioteca.listar();
// console.log('')
// biblioteca.remover("senhor dos anéis")
// console.log('')

// biblioteca.listar();


// * com prompt

let parar = false

while(!parar) {
  const operacao = Number(prompt('O que gostaria de fazer [add=0, del=1, list=2, sair=3]?'));

  if(operacao === 0) {
    const livroNome = prompt('Qual nome do livro? ');
    const autorLivro = prompt('Qual nome do livro? ');
    biblioteca.adicionar(new Livro(livroNome, autorLivro))
  }else if(Number(operacao) === 1) {
    const livroTitulo = prompt('Qual nome do livro? ');
    biblioteca.remover(livroTitulo)
  } else if(Number(operacao) === 2) {
    biblioteca.listar()
  }else if(Number(operacao) === 3)  {
    parar = true
    console.log("saiu")
  }
}