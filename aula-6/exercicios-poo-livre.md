**Exercício 1: Manipulação de Arrays e Funções**

```javascript
// Crie uma função que recebe um array e retorna a soma de todos os seus elementos.
function somaArray(array) {
  // seu código aqui
}

// Teste a função com um array de números.
console.log(somaArray([1, 2, 3, 4])); // Saída esperada: 10
```

**Exercício 2: Estruturas de Controle e Funções**

```javascript
// Crie uma função que verifica se um número é par ou ímpar.
function verificaParImpar(numero) {
  // seu código aqui
}

// Teste a função com diferentes números.
console.log(verificaParImpar(5)); // Saída esperada: Ímpar
```

**Exercício 3: Manipulação de Objetos e Estruturas de Controle**

```javascript
// Crie um objeto representando um aluno com propriedades como nome, idade e notas.
const aluno = {
  // seu código aqui
};

// Implemente uma função que verifica se o aluno foi aprovado (nota maior ou igual a 7).
function verificaAprovacao(aluno) {
  // seu código aqui
}

// Teste a função com o objeto aluno.
console.log(verificaAprovacao(aluno)); // Saída esperada: Aprovado ou Reprovado
```

**Exercício 4: Laços de Repetição e Arrays**

```javascript
// Crie uma função que recebe um array de números e retorna a média aritmética.
function calculaMedia(array) {
  // seu código aqui
}

// Teste a função com um array de números.
console.log(calculaMedia([10, 8, 6, 9])); // Saída esperada: 8.25
```

**Exercício 5: Programação Orientada a Objetos (POO)**

```javascript
// Crie uma classe chamada "Pessoa" com propriedades como nome, idade e um método para saudar.
class Pessoa {
  // seu código aqui
}

// Crie uma instância da classe Pessoa e chame o método de saudação.
const pessoa = new Pessoa(/* parâmetros */);
pessoa.saudacao(); // Saída esperada: Olá, meu nome é [nome] e tenho [idade] anos.
```

**Exercício 6: Encapsulamento e Métodos**

```javascript
// Modifique a classe Pessoa para encapsular as propriedades e implementar métodos getter e setter.
class Pessoa {
  // seu código aqui
}

// Crie uma instância da classe Pessoa e utilize os métodos para acessar e modificar as propriedades.
const pessoa = new Pessoa(/* parâmetros */);
pessoa.setNome("João");
console.log(pessoa.getNome()); // Saída esperada: João
```

**Exercício 7: Herança e Polimorfismo**

```javascript
// Crie uma classe base "Animal" com propriedades como nome e um método para emitir som.
class Animal {
  // seu código aqui
}

// Crie duas classes que herdam de Animal, por exemplo, "Cachorro" e "Gato".
class Cachorro extends Animal {
  // seu código aqui
}

class Gato extends Animal {
  // seu código aqui
}

// Crie instâncias de cada classe e chame o método para emitir som.
const cachorro = new Cachorro(/* parâmetros */);
const gato = new Gato(/* parâmetros */);

cachorro.emitirSom(); // Saída esperada: Au Au!
gato.emitirSom(); // Saída esperada: Miau!
```

**Exercício 8: Composição e Objetos**

```javascript
// Crie uma classe chamada "Carro" com propriedades como modelo e ano, e uma classe "Motor" com propriedades como tipo e potência.
class Motor {
  // seu código aqui
}

class Carro {
  // seu código aqui
}

// Componha a classe Carro com a classe Motor.
const carro = new Carro(/* parâmetros */);

// Acesse as propriedades do motor do carro.
console.log(carro.getTipoMotor()); // Saída esperada: [tipo]
console.log(carro.getPotenciaMotor()); // Saída esperada: [potência]
```

**Exercício 9: Manipulação de Strings e Objetos**

```javascript
// Crie uma função que recebe uma string e retorna um objeto contendo a contagem de cada caractere.
function contarCaracteres(str) {
  // seu código aqui
}

// Teste a função com uma string.
console.log(contarCaracteres("javascript")); // Saída esperada: { j: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
```

**Exercício 10: Programação Orientada a Objetos (POO) e Arrays**

```javascript
// Crie uma classe "ContaBancaria" com propriedades como saldo e métodos para depositar e sacar.
class ContaBancaria {
  // seu código aqui
}

// Crie uma classe "Cliente" com propriedades como nome e uma lista de contas bancárias.
class Cliente {
  // seu código aqui
}

// Crie instâncias das classes e realize operações de depósito e saque.
const cliente = new Cliente(/* parâmetros */);
const conta1 = new ContaBancaria(/* parâmetros */);
const conta2 = new ContaBancaria(/* parâmetros */);

cliente.adicionarConta(conta1);
cliente.adicionarConta(conta2);

conta1.depositar(100);
conta2.sacar(50);

console.log(conta1.getSaldo()); // Saída esperada: 100
console.log(conta2.getSaldo()); // Saída esperada: 50
```

**Exercício 11: Callbacks e Funções de Ordem Superior (HOF)**

```javascript
// Crie uma função chamada "executaOperacao" que recebe dois números e uma função como argumento.
// A função deve executar a operação especificada pela função fornecida nos dois números e retornar o resultado.
function executaOperacao(num1, num2, operacao) {
  // seu código aqui
}

// Crie funções de operação, como soma, subtração, multiplicação e divisão.
// Teste a função "executaOperacao" com diferentes operações.
console.log(executaOperacao(5, 3, soma)); // Saída esperada: 8
```

**Exercício 12: Arrow Functions e Métodos de Arrays**

```javascript
// Utilize arrow functions e métodos de arrays para filtrar apenas os números pares de uma lista.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = /* seu código aqui */;

console.log(pares); // Saída esperada: [2, 4, 6, 8, 10]
```

**Exercício 13: Tratamento de Erros e Funções**

```javascript
// Crie uma função que recebe dois números e retorna a divisão do primeiro pelo segundo.
// Adicione tratamento de erro para casos em que a divisão por zero ocorre.
function divisaoSegura(num1, num2) {
  // seu código aqui
}

// Teste a função com diferentes valores, incluindo a divisão por zero.
console.log(divisaoSegura(10, 2)); // Saída esperada: 5
```

**Exercício 14: Manipulação de Strings e Objetos**

```javascript
// Crie uma função que recebe uma string e retorna um objeto contendo a contagem de palavras únicas.
function contarPalavrasUnicas(frase) {
  // seu código aqui
}

// Teste a função com uma frase.
console.log(contarPalavrasUnicas("o rato roeu o casaco do rei de roma"));
// Saída esperada: { o: 3, rato: 1, roeu: 1, casaco: 1, do: 1, rei: 1, de: 1, roma: 1 }
```

**Exercício 15: Manipulação de Objetos e Métodos**

```javascript
// Crie uma função construtora chamada "Livro" que recebe título, autor e ano de publicação como parâmetros.
// Adicione um método ao protótipo que retorna uma string com informações do livro.
function Livro(titulo, autor, anoPublicacao) {
  // seu código aqui
}

Livro.prototype.informacoesLivro = function () {
  // seu código aqui
};

// Crie instâncias da classe Livro e chame o método informacoesLivro.
const livro1 = new Livro(
  "JavaScript: The Good Parts",
  "Douglas Crockford",
  2008
);
console.log(livro1.informacoesLivro());
// Saída esperada: "JavaScript: The Good Parts, escrito por Douglas Crockford, publicado em 2008."
```

**Exercício 16: Uso de Promise em JavaScript**

```javascript
// Crie uma função que simula uma operação assíncrona com Promise, por exemplo, uma requisição HTTP fictícia.
function simularRequisicaoHTTP() {
  // seu código aqui
}

// Utilize a função e encadeie Promises para lidar com o resultado ou erro.
simularRequisicaoHTTP()
  .then((resultado) => console.log("Sucesso:", resultado))
  .catch((erro) => console.error("Erro:", erro));
```

**Exercício 17: Uso de Classes e Módulos em JavaScript**

```javascript
// Crie uma classe chamada "Calculadora" em um módulo separado.
// A classe deve ter métodos para adição, subtração, multiplicação e divisão.
// Exporte a classe e importe-a em outro arquivo para utilização.
```

**Exercício 18: Manipulação de Datas em JavaScript**

```javascript
// Crie uma função que recebe uma data de nascimento e calcula a idade da pessoa.
function calcularIdade(dataNascimento) {
  // seu código aqui
}

// Teste a função com diferentes datas de nascimento.
console.log(calcularIdade(new Date(1990, 5, 15))); // Saída esperada: idade atual
```

**Exercício 19: Uso de Set e Map em JavaScript**

```javascript
// Utilize um Set para armazenar uma lista de cores únicas.
const cores = new Set(/* seu código aqui */);

// Adicione algumas cores e verifique se uma cor específica já está presente.
console.log(cores.has("azul")); // Saída esperada: true ou false
```

**Exercício 20: Async/Await e Requisições Assíncronas**

```javascript
// Crie uma função assíncrona que realiza uma requisição HTTP utilizando fetch e retorna o resultado.
async function realizarRequisicaoHTTP() {
  // seu código aqui
}

// Chame a função e imprima o resultado.
realizarRequisicaoHTTP().then((resultado) => console.log(resultado));
```
