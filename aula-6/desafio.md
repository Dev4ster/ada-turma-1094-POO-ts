## Opção Desafio 1

**Tema do Exercício: Sistema de Entrega (Delivery) usando Programação Orientada a Objetos em JavaScript**

**Requisitos:**

1. Criar um sistema simples de entrega (delivery) que consistirá em clientes, restaurantes e pedidos.
2. Cada cliente pode fazer pedidos em um ou mais restaurantes.
3. Cada restaurante possui um menu com itens e preços.
4. Cada pedido contém itens do menu, a quantidade desejada e o cliente que fez o pedido.
5. O sistema deve calcular o valor total de cada pedido e rastrear o status da entrega (pendente, em andamento, entregue).
6. Implementar métodos para exibir informações relevantes, como o menu do restaurante, os pedidos do cliente e o status da entrega.

**Classes:**

1. `Cliente`: Representa um cliente. Atributos: `nome`, `endereço`.

- Métodos: `fazerPedido(restaurant, items)`, `consultarPedidos()`.

2. `Restaurante`: Representa um restaurante. Atributos: `nome`, `menu`.

- Métodos: `exibirMenu()`, `receberPedido(client, items)`.

3. `Pedido`: Representa um pedido feito por um cliente. Atributos: `cliente`, `restaurante`, `itens`, `status` (pendente, em andamento, entregue), `total`.

- Métodos: `calcularTotal()`, `atualizarStatus(status)`.

**Exemplo de Uso:**

```javascript
// Criar instâncias de Cliente e Restaurante
const cliente1 = new Cliente("João", "Rua A, 123");
const restaurante1 = new Restaurante("Restaurante A", {
  Pizza: 15,
  Hamburguer: 10,
  Salada: 8,
});

// Cliente faz um pedido
cliente1.fazerPedido(restaurante1, { Pizza: 2, Hamburguer: 1 });

// Restaurante recebe o pedido
restaurante1.receberPedido(cliente1, { Pizza: 2, Hamburguer: 1 });

// Exibir menu do restaurante
restaurante1.exibirMenu();

// Consultar pedidos do cliente
cliente1.consultarPedidos();

// Calcular total do pedido
const pedidoCliente1 = cliente1.consultarPedidos()[0];
console.log(`Total do pedido: R${pedidoCliente1.calcularTotal()}`);

// Atualizar status do pedido
pedidoCliente1.atualizarStatus("em andamento");

// Exibir status do pedido
console.log(`Status do pedido: ${pedidoCliente1.status}`);
```

---

## Opção Desafio 2

**Tema do Exercício: Desenvolvimento de Jogo com Programação Orientada a Objetos em JavaScript**

**Requisitos:**

1. Criar um jogo simples que envolva personagens, inimigos e itens.
2. Cada personagem pode interagir com inimigos, coletar itens e ganhar pontos.
3. Cada inimigo tem diferentes níveis de dificuldade e oferece uma quantidade variável de pontos ao ser derrotado.
4. O jogo deve permitir a movimentação dos personagens no ambiente e detectar colisões entre eles.
5. Implementar métodos para calcular a pontuação do jogador, exibir informações relevantes e controlar o estado do jogo (iniciado, pausado, concluído).

**Classes:**

1. `Personagem`: Representa um personagem do jogo. Atributos: `nome`, `pontuacao`, `posicao`.

- Métodos: `mover(direcao)`, `coletarItem(item)`, `derrotarInimigo(inimigo)`, `calcularPontuacao()`.

1. `Inimigo`: Representa um inimigo do jogo. Atributos: `tipo`, `nivelDificuldade`, `pontos`.
2. `Item`: Representa um item que pode ser coletado pelos personagens. Atributos: `nome`, `pontos`.
3. `Jogo`: Representa o estado geral do jogo. Atributos: `personagens`, `inimigos`, `itens`, `estado` (iniciado, pausado, concluído).

- Métodos: `iniciarJogo()`, `pausarJogo()`, `concluirJogo()`.

**Exemplo de Uso:**

```javascript
// Criar instâncias de Personagem, Inimigo, Item e Jogo
const jogador1 = new Personagem("Herói", 0, { x: 0, y: 0 });
const inimigo1 = new Inimigo("Orc", "Difícil", 10);
const item1 = new Item("Poção de Vida", 5);
const jogo = new Jogo();

// Adicionar personagem, inimigo e item ao jogo
jogo.adicionarPersonagem(jogador1);
jogo.adicionarInimigo(inimigo1);
jogo.adicionarItem(item1);

// Iniciar o jogo
jogo.iniciarJogo();

// Movimentar o personagem
jogador1.mover("direita");

// Derrotar um inimigo
jogador1.derrotarInimigo(inimigo1);

// Coletar um item
jogador1.coletarItem(item1);

// Exibir pontuação do jogador
console.log(`Pontuação do jogador: ${jogador1.calcularPontuacao()}`);

// Pausar o jogo
jogo.pausarJogo();

// Concluir o jogo
jogo.concluirJogo();
```

---

## Opção Desafio 3

**Tema do Exercício: Aplicativo de Lista de Tarefas (To-Do List) com Programação Orientada a Objetos em JavaScript**

**Requisitos:**

1. Criar um aplicativo de lista de tarefas que permita adicionar, remover e marcar tarefas como concluídas.
2. Cada tarefa deve ter uma descrição, uma prioridade (baixa, média, alta) e um status (pendente, concluída).
3. O aplicativo deve permitir a criação de múltiplas listas de tarefas.
4. Implementar métodos para exibir a lista de tarefas, adicionar tarefas, remover tarefas e marcar tarefas como concluídas.
5. O sistema deve calcular estatísticas, como o número total de tarefas, o número de tarefas concluídas e o número de tarefas pendentes em uma lista.

**Classes:**

1. `Tarefa`: Representa uma tarefa na lista. Atributos: `descricao`, `prioridade`, `status`.
2. `ListaTarefas`: Representa uma lista de tarefas. Atributos: `nome`, `tarefas`.

- Métodos: `adicionarTarefa(tarefa)`, `removerTarefa(tarefa)`, `marcarConcluida(tarefa)`, `exibirLista()`, `calcularEstatisticas()`.

1. `AplicativoToDoList`: Representa o aplicativo de lista de tarefas. Atributos: `listasTarefas`, `listaAtual`.

- Métodos: `criarLista(nome)`, `selecionarLista(nome)`, `exibirListasDisponiveis()`.

**Exemplo de Uso:**

```javascript
// Criar instâncias de Tarefa, ListaTarefas e AplicativoToDoList
const tarefa1 = new Tarefa("Estudar JavaScript", "alta", "pendente");
const tarefa2 = new Tarefa("Fazer exercícios de POO", "média", "pendente");

const lista1 = new ListaTarefas("Trabalho");
lista1.adicionarTarefa(tarefa1);
lista1.adicionarTarefa(tarefa2);

const tarefa3 = new Tarefa("Comprar mantimentos", "baixa", "pendente");
const tarefa4 = new Tarefa("Correr no parque", "média", "pendente");

const lista2 = new ListaTarefas("Pessoal");
lista2.adicionarTarefa(tarefa3);
lista2.adicionarTarefa(tarefa4);

const appToDoList = new AplicativoToDoList();
appToDoList.criarLista("Estudos");
appToDoList.selecionarLista("Estudos");
appToDoList.adicionarTarefa(new Tarefa("Ler livro", "média", "pendente"));

// Exibir listas disponíveis
console.log(appToDoList.exibirListasDisponiveis());

// Exibir lista de tarefas atual
appToDoList.listaAtual.exibirLista();

// Marcar tarefa como concluída
appToDoList.listaAtual.marcarConcluida(tarefa1);

// Exibir estatísticas da lista
console.log(appToDoList.listaAtual.calcularEstatisticas());
```

---

## Opção Desafio 4

**Tema do Exercício: Sistema de Controle de Estoque com Programação Orientada a Objetos em JavaScript**

**Requisitos:**

1. Criar um sistema de controle de estoque que gerencie produtos, categorias e movimentações de estoque.
2. Cada produto possui um nome, preço, quantidade em estoque e pertence a uma categoria.
3. O sistema deve permitir a adição de produtos, categorias e a realização de movimentações de entrada ou saída de estoque.
4. Implementar métodos para calcular o valor total em estoque, exibir informações sobre produtos e categorias, e rastrear o histórico de movimentações.
5. O sistema deve validar operações que resultem em estoque negativo.
6. Utilizar um exemplo de um software de mercado, como um sistema de controle de estoque de um supermercado.

**Classes:**

1. `Produto`: Representa um produto no estoque. Atributos: `nome`, `preco`, `quantidade`, `categoria`.
2. `Categoria`: Representa uma categoria de produtos. Atributos: `nome`.
3. `MovimentacaoEstoque`: Representa uma movimentação de entrada ou saída de estoque. Atributos: `produto`, `quantidade`, `tipo` (entrada, saída), `data`.
4. `Estoque`: Representa o estoque geral do sistema. Atributos: `produtos`, `categorias`, `movimentacoes`.

- Métodos: `adicionarProduto(produto)`, `adicionarCategoria(categoria)`, `realizarMovimentacao(movimentacao)`, `calcularValorTotal()`, `exibirInformacoesProduto(produto)`, `exibirInformacoesCategoria(categoria)`, `exibirHistoricoMovimentacoes()`.

**Exemplo de Uso:**

```javascript
// Criar instâncias de Produto, Categoria, MovimentacaoEstoque e Estoque
const categoriaAlimentos = new Categoria("Alimentos");
const produtoArroz = new Produto("Arroz", 10, 50, categoriaAlimentos);
const produtoFeijao = new Produto("Feijão", 8, 30, categoriaAlimentos);

const movimentacaoEntrada = new MovimentacaoEstoque(
  produtoArroz,
  20,
  "entrada",
  new Date("2023-01-15")
);
const movimentacaoSaida = new MovimentacaoEstoque(
  produtoFeijao,
  10,
  "saída",
  new Date("2023-01-16")
);

const sistemaEstoque = new Estoque();
sistemaEstoque.adicionarCategoria(categoriaAlimentos);
sistemaEstoque.adicionarProduto(produtoArroz);
sistemaEstoque.adicionarProduto(produtoFeijao);
sistemaEstoque.realizarMovimentacao(movimentacaoEntrada);
sistemaEstoque.realizarMovimentacao(movimentacaoSaida);

// Exibir informações sobre o estoque
console.log(
  `Valor total em estoque: R${sistemaEstoque.calcularValorTotal().toFixed(2)}`
);
sistemaEstoque.exibirInformacoesProduto(produtoArroz);
sistemaEstoque.exibirInformacoesCategoria(categoriaAlimentos);
sistemaEstoque.exibirHistoricoMovimentacoes();
```

---

## Opção Desafio 5

**Tema do Exercício: Sistema de Gestão de Finanças Pessoais com Programação Orientada a Objetos em JavaScript**

**Requisitos:**

1. Criar um sistema de gestão de finanças pessoais que permita o registro de receitas, despesas e categorias.
2. Cada transação (receita ou despesa) possui uma descrição, valor, categoria e data.
3. O sistema deve permitir a categorização das transações para análise posterior.
4. Implementar métodos para calcular o saldo total, exibir transações de um determinado período e categorias, e gerar relatórios financeiros.
5. O sistema deve oferecer a funcionalidade de criar metas financeiras e acompanhar o progresso em relação a essas metas.

**Classes:**

1. `Transacao`: Representa uma transação financeira. Atributos: `descricao`, `valor`, `categoria`, `data`.
2. `Categoria`: Representa uma categoria para classificação de transações. Atributos: `nome`.
3. `MetaFinanceira`: Representa uma meta financeira. Atributos: `descricao`, `valorMeta`, `progresso`.
4. `GestorFinancas`: Representa o sistema de gestão de finanças. Atributos: `transacoes`, `categorias`, `metas`.

- Métodos: `adicionarTransacao(transacao)`, `adicionarCategoria(categoria)`, `adicionarMeta(meta)`, `calcularSaldo()`, `exibirTransacoes(periodo)`, `exibirCategorias()`, `gerarRelatorioFinanceiro()`, `atualizarProgressoMeta(meta, valor)`.

**Exemplo de Uso:**

```javascript
// Criar instâncias de Transacao, Categoria, MetaFinanceira e GestorFinancas
const transacao1 = new Transacao(
  "Salário",
  3000,
  "Salário",
  new Date("2023-02-01")
);
const transacao2 = new Transacao(
  "Aluguel",
  -800,
  "Moradia",
  new Date("2023-02-05")
);
const transacao3 = new Transacao(
  "Supermercado",
  -150,
  "Alimentação",
  new Date("2023-02-10")
);

const categoriaSalario = new Categoria("Salário");
const categoriaMoradia = new Categoria("Moradia");
const categoriaAlimentacao = new Categoria("Alimentação");

const metaEconomia = new MetaFinanceira("Economia para viagem", 500, 0);

const gestorFinancas = new GestorFinancas();
gestorFinancas.adicionarCategoria(categoriaSalario);
gestorFinancas.adicionarCategoria(categoriaMoradia);
gestorFinancas.adicionarCategoria(categoriaAlimentacao);

gestorFinancas.adicionarTransacao(transacao1);
gestorFinancas.adicionarTransacao(transacao2);
gestorFinancas.adicionarTransacao(transacao3);

gestorFinancas.adicionarMeta(metaEconomia);

// Exibir saldo total
console.log(`Saldo Total: R${gestorFinancas.calcularSaldo().toFixed(2)}`);

// Exibir transações do mês de fevereiro
gestorFinancas.exibirTransacoes({
  inicio: new Date("2023-02-01"),
  fim: new Date("2023-02-28"),
});

// Exibir categorias disponíveis
gestorFinancas.exibirCategorias();

// Atualizar progresso da meta
gestorFinancas.atualizarProgressoMeta(metaEconomia, 200);

// Gerar relatório financeiro
gestorFinancas.gerarRelatorioFinanceiro();
```
