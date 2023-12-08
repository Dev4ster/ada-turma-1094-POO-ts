/**
 * O prototype é um mecanismo interno do JavaScript 
 * que permite aos objetos herdar propriedades e métodos 
 * de outros objetos. Essa herança é diferente da herança 
 * de classe tradicional encontrada em linguagens orientadas 
 * a objetos, como Java e C#. No JavaScript, a herança ocorre 
 * através da chamada “herança prototípica” e é baseada em 
 * objetos, em vez de classes. */


function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}


Pessoa.prototype.dizerOla = function() {
  console.log(`Olá meu nome é ${this.nome} e tenho ${this.idade} anos.`)
}


const pessoa1 = new Pessoa("Victor", 26)
const pessoa2 =  new Pessoa("Maria", 30)

Pessoa.prototype.dizerOla = function() {
  console.log(`Olá`)
}
pessoa1.dizerOla()
pessoa2.dizerOla()


const lista = [1, 2, 3, 4] // new Array(1,2,3)
Array.prototype.quantosPares = function() {
  let count = 0
  for(const elemento of this) {
    if(elemento % 2 === 0) {
      count++;
    }
  }

  return count
}
 

console.log(pessoa2)
