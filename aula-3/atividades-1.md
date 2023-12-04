# Exercício 1: Sistema de Login em JavaScript

Requisitos:

Desenvolva um sistema de login simples em JavaScript utilizando POO. O sistema deve permitir que usuários se cadastrem, realizem login e exibam uma mensagem personalizada após o login.

1. **Classe: SistemaDeLogin**
   - Atributo: `usuarios` (array de objetos com informações de usuário).
   - Métodos: `cadastrarUsuario(nome, senha)`, `realizarLogin(nome, senha)`, `exibirMensagemPersonalizada(nome)`.

**Exemplo de Uso:**

```javascript
// Criando instância do sistema de login
const sistemaLogin = new SistemaDeLogin();

// Cadastrando usuários
sistemaLogin.cadastrarUsuario("usuario1", "senha123");
sistemaLogin.cadastrarUsuario("usuario2", "abc456");

// Realizando login e exibindo mensagem personalizada
const usuarioLogado = sistemaLogin.realizarLogin("usuario1", "senha123");
console.log(sistemaLogin.exibirMensagemPersonalizada(usuarioLogado));
// Saída esperada: Bem-vindo, usuario1!
```

# Exercício 2: Conversor de Moeda em JavaScript

Requisitos:

Crie um conversor de moeda simples em JavaScript utilizando POO. O conversor deve permitir a conversão de uma moeda para outra com base em uma taxa de câmbio.

1. **Classe: ConversorDeMoeda**
   - Atributos: `taxaCambio`.
   - Método: `converter(valor, moedaOrigem, moedaDestino)`, que converte o valor de uma moeda para outra.

**Exemplo de Uso:**

````javascript
// Criando instância do conversor de moeda
const conversorMoeda = new ConversorDeMoeda(5.0); // Taxa de câmbio: 5.0

// Convertendo moeda
const valorConvertido = conversorMoeda.converter(100, 'USD', 'BRL');
console.log(`Valor convertido: ${valorConvertido} BRL`);
// Saída esperada: Valor convertido: 500.0 BRL```


# Contador de Palavras em JavaScript

Requisitos:

Implemente um contador de palavras em JavaScript utilizando POO. O contador deve receber uma string como entrada e fornecer a contagem de palavras.

1. **Classe: ContadorDePalavras**
    - Atributo: `texto` (string de entrada).
    - Método: `contarPalavras()`, que retorna o número de palavras no texto.

**Exemplo de Uso:**

```javascript
// Criando instância do contador de palavras
const contadorPalavras = new ContadorDePalavras('JavaScript é uma linguagem poderosa.');

// Obtendo contagem de palavras
const contagem = contadorPalavras.contarPalavras();
console.log(`Número de palavras: ${contagem}`);
// Saída esperada: Número de palavras: 5```
````
