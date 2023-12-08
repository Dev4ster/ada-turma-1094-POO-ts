**Exercício 1: Sistema de E-Commerce com Herança e Polimorfismo**

Desenvolva um sistema de e-commerce mais complexo com classes como `Produto`, `Cliente`, `Pedido`, `Frete` e `Pagamento`. Utilize herança para diferentes tipos de produtos e polimorfismo para processamento de pagamentos.

- **Classes:**

1. `Produto`: Classe base para produtos com atributos como `id`, `nome`, `preco`.
2. `ProdutoFisico`: Herda de `Produto`, representa produtos físicos com atributos adicionais como `peso` e `dimensoes`.
3. `ProdutoDigital`: Herda de `Produto`, representa produtos digitais com atributos adicionais como `tamanho` e `linkDownload`.
4. `Cliente`: Representa um cliente com atributos como `nome`, `endereco` e `carrinhoDeCompras`.
5. `Pedido`: Representa um pedido com atributos como `cliente`, `itens` e `frete`.
6. `Frete`: Classe base para cálculo de frete, com subclasses como `FretePadrao` e `FreteExpresso`.
7. `Pagamento`: Classe base para processamento de pagamentos, com subclasses como `PagamentoCartao` e `PagamentoBoleto`.

- **Requisitos:**

1. Implementar métodos para adicionar produtos ao carrinho de compras do cliente.
2. Calcular o valor total do pedido considerando diferentes tipos de produtos.
3. Calcular o valor do frete com base no tipo de frete escolhido.
4. Processar pagamentos de diferentes formas (cartão, boleto) de acordo com a escolha do cliente.

**Exercício 2: Sistema de Gerenciamento de Projeto com Encapsulamento**

Desenvolva um sistema de gerenciamento de projetos mais avançado com classes como `Projeto`, `Tarefa`, `Equipe` e `Colaborador`. Utilize encapsulamento para proteger informações sensíveis e fornecer métodos seguros de interação.

- **Classes:**

1. `Projeto`: Representa um projeto com atributos como `nome`, `dataInicio`, `dataFim` e `tarefas`.
2. `Tarefa`: Representa uma tarefa em um projeto com atributos como `descricao`, `responsavel` e `status`.
3. `Equipe`: Representa a equipe de colaboradores com atributos como `membros` e `projetoAtual`.
4. `Colaborador`: Representa um membro da equipe com atributos como `nome`, `habilidades` e `projetosAtribuidos`.

- **Requisitos:**

1. Implementar métodos para adicionar e remover tarefas de um projeto.
2. Garantir que apenas membros da equipe autorizados possam acessar informações sensíveis.
3. Proteger a data de início de um projeto contra alterações após o início.
4. Fornecer métodos seguros para atribuir tarefas a colaboradores.

**Exercício 3: Sistema de Controle Bancário com Interfaces**

Crie um sistema de controle bancário com classes como `Conta`, `Cliente`, `Transacao`, `Transferencia` e `Deposito`. Utilize interfaces para garantir que diferentes tipos de transações se comportem de maneira consistente.

- **Interfaces:**

1. `Transacao`: Define métodos comuns para todas as transações, como `executarTransacao()`.

- **Classes:**

1. `Conta`: Representa uma conta bancária com atributos como `numero`, `cliente` e `saldo`.
2. `Cliente`: Representa um cliente com atributos como `nome` e `contas`.
3. `Transacao`: Classe base para transações comuns, possui métodos como `executarTransacao()` e atributos como `contaOrigem` e `contaDestino`.
4. `Transferencia`: Implementa a interface `Transacao`, representa uma transferência entre contas.
5. `Deposito`: Implementa a interface `Transacao`, representa um depósito em uma conta.

- **Requisitos:**

1. Garantir que todas as transações possuam um método `executarTransacao()` consistente.
2. Implementar métodos para realizar transferências e depósitos.
3. Utilizar interfaces para garantir que as transações possam ser estendidas no futuro.

**Exercício 4: Sistema de Streaming de Música com Enums**

Desenvolva um sistema de streaming de música com classes como `Musica`, `Playlist`, `Usuario` e `BibliotecaMusical`. Utilize enums para representar diferentes gêneros musicais.

- **Enums:**

1. `GeneroMusical`: Enumeração que representa diferentes gêneros musicais como `POP`, `ROCK`, `HIP_HOP`, etc.

- **Classes:**

1. `Musica`: Representa uma música com atributos como `titulo`, `artista` e `genero`.
2. `Playlist`: Representa uma lista de reprodução com atributos como `nome`, `musicas` e `genero`.
3. `Usuario`: Representa um usuário com atributos como `nome` e `biblioteca`.
4. `BibliotecaMusical`: Representa a biblioteca musical de um usuário, contendo todas as músicas.

- **Requisitos:**

1. Implementar métodos para adicionar músicas à biblioteca musical do usuário.
2. Criar playlists automaticamente com base no gênero musical das músicas adicionadas.
3. Utilizar enums para representar os diferentes gêneros musicais.

**Exercício 5: Sistema de Gestão de Escola com Herança e Composição**

Desenvolva um sistema de gestão de escola com classes como `Pessoa`, `Aluno`, `Professor`, `Disciplina`, `Turma` e `Escola`. Utilize herança para representar diferentes tipos de pessoas e composição para organizar turmas e disciplinas.

- **Classes:**

1. `Pessoa`: Classe base que representa uma pessoa com atributos como `nome` e `idade`.
2. `Aluno`: Herda de `Pessoa`, representa um aluno com atributos adicionais como `matricula` e `notas`.
3. `Professor`: Herda de `Pessoa`, representa um professor com atributos adicionais como `disciplinasLecionadas` e `horarioAtendimento`.
4. `Disciplina`: Representa uma disciplina com atributos como `nome` e `professor`.
5. `Turma`: Representa uma turma com atributos como `disciplina`, `alunos` e `professor`.
6. `Escola`: Representa a escola com atributos como `turmas` e `professores`.

- **Requisitos:**

1. Permitir a adição de alunos, professores e disciplinas à escola.
2. Organizar alunos em turmas e turmas em disciplinas.
3. Calcular a média de notas de um aluno em uma disciplina.
4. Garantir que um aluno só pode estar matriculado em disciplinas da sua turma.

**Exercício 6: Sistema de Reservas de Cinema com Interfaces e Polimorfismo**

Crie um sistema de reservas de cinema com classes como `Sessao`, `Cliente`, `Ingresso`, `Assento` e `Cinema`. Utilize interfaces para representar diferentes tipos de ingressos e polimorfismo para processar reservas.

- **Interfaces:**

1. `Ingresso`: Define métodos comuns para todos os tipos de ingressos, como `calcularPreco()`.

- **Classes:**

1. `Sessao`: Representa uma sessão de cinema com atributos como `filme`, `horario` e `ingressosDisponiveis`.
2. `Cliente`: Representa um cliente com atributos como `nome`, `idade` e `reservas`.
3. `Ingresso`: Classe base para ingressos comuns, implementa a interface `Ingresso`, possui atributos como `sessao` e `assento`.
4. `IngressoVIP`: Implementa a interface `Ingresso`, representa um ingresso VIP com atributos adicionais como `comidaInclusa`.
5. `Assento`: Representa um assento na sala de cinema com atributos como `numero` e `ocupado`.
6. `Cinema`: Representa o cinema com atributos como `sessoes` e `assentos`.

- **Requisitos:**

1. Implementar métodos para reservar ingressos para uma sessão.
2. Calcular o preço total de uma reserva considerando diferentes tipos de ingressos.
3. Garantir que um assento só pode ser ocupado por um cliente em uma sessão.

**Exercício 7: Sistema de Logística de Entrega com Herança e Enum**

Desenvolva um sistema de logística de entrega com classes como `Entrega`, `EntregaExpressa`, `EntregaNormal`, `Pacote`, `Veiculo` e `EmpresaLogistica`. Utilize herança para representar diferentes tipos de entregas e um enum para categorias de pacotes.

- **Enums:**

1. `CategoriaPacote`: Enumeração que representa diferentes categorias de pacotes como `NORMAL`, `FRAGIL`, `PERECIVEL`, etc.

- **Classes:**

1. `Entrega`: Classe base para entregas com atributos como `destinatario`, `dataPrevista` e `pacotes`.
2. `EntregaExpressa`: Herda de `Entrega`, representa uma entrega expressa com atributos adicionais como `taxaExpressa`.
3. `EntregaNormal`: Herda de `Entrega`, representa uma entrega normal.
4. `Pacote`: Representa um pacote com atributos como `id`, `categoria` e `conteudo`.
5. `Veiculo`: Representa um veículo de entrega com atributos como `placa`, `capacidade` e `tipo`.
6. `EmpresaLogistica`: Representa a empresa de logística com atributos como `veiculos`, `entregas` e `estoque`.

- **Requisitos:**

1. Permitir a adição de entregas expressas e normais à empresa.
2. Organizar pacotes em entregas.
3. Calcular o custo total de uma entrega considerando diferentes taxas.
4. Utilizar enums para representar categorias de pacotes.

**Exercício 8: Sistema de Redes Sociais com Recomendações e Publicações**

Crie um sistema de redes sociais mais complexo com classes como `Usuario`, `Amizade`, `Publicacao`, `Comentario` e `RedeSocial`. Utilize composição para representar diferentes interações entre usuários e adicione funcionalidades como recomendações de amizade e publicações.

- **Classes:**

1. `Usuario`: Representa um usuário com atributos como `nome`, `amigos` e `publicacoes`.
2. `Amizade`: Representa uma amizade entre dois usuários.
3. `Publicacao`: Representa uma publicação feita por um usuário com atributos como `texto`, `data` e `comentarios`.
4. `Comentario`: Representa um comentário feito em uma publicação com atributos como `texto` e `autor`.
5. `RedeSocial`: Representa a rede social com atributos como `usuarios`, `amizades` e `publicacoes`.

- **Requisitos:**

1. Implementar métodos para adicionar amigos, fazer publicações e comentar.
2. Permitir a recomendação de amizades com base em interesses comuns.
3. Calcular a popularidade de uma publicação com base no número de comentários e curtidas.
4. Utilizar composição para representar as relações entre usuários, amizades e publicações.

**Exercício 9: Sistema de Compras Online com Pagamento em Parcelas**

Desenvolva um sistema de compras online com classes como `Produto`, `Cliente`, `Pedido`, `PagamentoParcelado` e `LojaVirtual`. Utilize interfaces para representar diferentes métodos de pagamento e permita o pagamento em parcelas.

- **Interfaces:**

1. `Pagamento`: Define métodos comuns para todos os métodos de pagamento, como `processarPagamento()`.

- **Classes:**

1. `Produto`: Representa um produto disponível para compra com atributos como `nome`, `preco` e `quantidadeEstoque`.
2. `Cliente`: Representa um cliente com atributos como `nome`, `carrinhoDeCompras` e `pedidos`.
3. `Pedido`: Representa um pedido feito por um cliente com atributos como `itens`, `valorTotal` e `pagamento`.
4. `PagamentoParcelado`: Implementa a interface `Pagamento`, representa um pagamento parcelado com atributos como `numeroParcelas` e `taxaJuros`.
5. `LojaVirtual`: Representa a loja virtual com atributos como `produtos`, `clientes` e `pedidos`.

- **Requisitos:**

1. Implementar métodos para adicionar produtos ao carrinho de compras do cliente.
2. Calcular o valor total do pedido considerando diferentes produtos.
3. Permitir o pagamento em parcelas com base no método de pagamento escolhido.
4. Fornecer métodos seguros para processar pagamentos, considerando diferentes métodos e taxas de juros.

**Exercício 10: Sistema de Gerenciamento de Eventos com Inscrições e Palestras**

Desenvolva um sistema de gerenciamento de eventos com classes como `Evento`, `Palestra`, `Participante`, `Inscricao` e `Organizador`. Utilize composição para representar diferentes entidades envolvidas nos eventos e adicione funcionalidades como controle de inscrições e organização de palestras.

- **Classes:**

1. `Evento`: Representa um evento com atributos como `nome`, `data`, `local` e `palestras`.
2. `Palestra`: Representa uma palestra em um evento com atributos como `titulo`, `palestrante` e `horario`.
3. `Participante`: Representa um participante do evento com atributos como `nome`, `email` e `inscricoes`.
4. `Inscricao`: Representa a inscrição de um participante em uma palestra com atributos como `participante`, `palestra` e `confirmada`.
5. `Organizador`: Representa o organizador do evento com atributos como `nome` e `eventosOrganizados`.

- **Requisitos:**

1. Implementar métodos para adicionar palestras a um evento.
2. Permitir a inscrição de participantes em palestras, considerando a capacidade de cada palestra.
3. Permitir que os organizadores visualizem a lista de inscritos e confirmem as inscrições.
4. Calcular a taxa de ocupação de cada palestra.
