**Exercício 1: Sistema de Reservas de Hotel**

Desenvolva um sistema de reservas de hotel que inclua classes como `Hotel`, `Quarto`, `Hospede` e `Reserva`. Os quartos podem ser de diferentes tipos (simples, duplo, suíte) e o sistema deve permitir que os hóspedes façam reservas para determinadas datas.

- **Classes:**

1. `Hotel`: Representa um hotel e possui uma lista de quartos.
2. `Quarto`: Representa um quarto no hotel, com atributos como número, tipo (simples, duplo, suíte) e status de disponibilidade.
3. `Hospede`: Representa um hóspede com informações pessoais.
4. `Reserva`: Representa uma reserva feita por um hóspede para um quarto em um determinado período.

- **Requisitos:**

1. Cada quarto deve ter um número único e um tipo específico.
2. O sistema deve permitir que os hóspedes consultem a disponibilidade de quartos para um determinado período.
3. Reservas só podem ser feitas para quartos disponíveis.
4. Implementar métodos para exibir informações detalhadas sobre o hotel, quartos, hóspedes e reservas.

**Exercício 2: Sistema de Gestão de Estoque**

Crie um sistema de gestão de estoque com classes como `Produto`, `Fornecedor`, `Pedido` e `Estoque`. Os produtos têm atributos como nome, preço e quantidade em estoque. O sistema deve permitir o registro de pedidos de reposição de estoque.

- **Classes:**

1. `Produto`: Representa um produto com informações como nome, preço e quantidade em estoque.
2. `Fornecedor`: Representa um fornecedor de produtos.
3. `Pedido`: Representa um pedido de reposição de estoque feito pelo estoque ao fornecedor.
4. `Estoque`: Representa o estoque da empresa e possui uma lista de produtos.

- **Requisitos:**

1. O sistema deve permitir a adição de novos produtos ao estoque.
2. Pedidos de reposição só podem ser feitos se a quantidade em estoque de um produto estiver abaixo de um limite mínimo.
3. Implementar métodos para registrar a chegada de novos produtos após um pedido.

**Exercício 3: Sistema de Locação de Carros**

Desenvolva um sistema de locação de carros com classes como `Carro`, `Cliente`, `Locacao` e `AgenciaLocadora`. Os carros podem ser de diferentes modelos e o sistema deve rastrear as locações.

- **Classes:**

1. `Carro`: Representa um carro com informações como modelo, placa e disponibilidade.
2. `Cliente`: Representa um cliente que pode alugar um carro.
3. `Locacao`: Representa uma locação de um carro por um cliente.
4. `AgenciaLocadora`: Representa a agência de locação e possui uma lista de carros disponíveis.

- **Requisitos:**

1. O sistema deve permitir que os clientes verifiquem a disponibilidade de carros.
2. Locações só podem ser feitas para carros disponíveis.
3. Implementar métodos para calcular o valor da locação com base no modelo do carro e no período.

**Exercício 4: Sistema de Comércio Eletrônico**

Crie um sistema de comércio eletrônico com classes como `Produto`, `CarrinhoDeCompras`, `Cliente` e `Pedido`. Os clientes podem adicionar produtos ao carrinho, realizar pedidos e rastrear o status de entrega.

- **Classes:**

1. `Produto`: Representa um produto disponível para compra.
2. `CarrinhoDeCompras`: Representa o carrinho de compras de um cliente.
3. `Cliente`: Representa um cliente que pode realizar compras.
4. `Pedido`: Representa um pedido feito por um cliente, contendo produtos do carrinho.

- **Requisitos:**

1. O sistema deve permitir que os clientes adicionem produtos ao carrinho.
2. Implementar métodos para calcular o total do pedido.
3. Rastrear o status da entrega do pedido (pendente, em andamento, entregue).

**Exercício 5: Sistema de Gerenciamento de Escola**

Desenvolva um sistema de gerenciamento de escola com classes como `Aluno`, `Professor`, `Disciplina` e `Turma`. Os alunos podem se matricular em disciplinas, os professores podem atribuir notas e o sistema deve calcular médias e status de aprovação.

- **Classes:**

1. `Aluno`: Representa um aluno com informações pessoais.
2. `Professor`: Representa um professor com informações pessoais.
3. `Disciplina`: Representa uma disciplina com um conjunto de alunos matriculados e notas atribuídas.
4. `Turma`: Representa uma turma que inclui várias disciplinas e alunos.

- **Requisitos:**

1. O sistema deve permitir que os alunos se matriculem em disciplinas.
2. Professores podem atribuir notas aos alunos em suas disciplinas.
3. Implementar métodos para calcular a média do aluno em uma disciplina e verificar o status de aprovação.

**Exercício 6: Sistema de Reservas para Espetáculos**

Desenvolva um sistema de reservas para espetáculos teatrais ou eventos com classes como `Espetaculo`, `Cliente`, `Reserva` e `Teatro`. Os clientes podem fazer reservas para diferentes espetáculos, e o sistema deve controlar a disponibilidade de assentos.

- **Classes:**

1. `Espetaculo`: Representa um espetáculo com informações como título, data, horário e assentos disponíveis.
2. `Cliente`: Representa um cliente que pode fazer reservas para espetáculos.
3. `Reserva`: Representa uma reserva feita por um cliente para um espetáculo específico.
4. `Teatro`: Representa o local do espetáculo e possui uma lista de espetáculos agendados.

- **Requisitos:**

1. O sistema deve permitir que os clientes vejam a disponibilidade de assentos para um espetáculo.
2. Reservas só podem ser feitas para assentos disponíveis.
3. Implementar métodos para exibir informações detalhadas sobre os espetáculos, clientes e reservas.

**Exercício 7: Sistema de Pedidos de Comida Online**

Crie um sistema de pedidos de comida online com classes como `Restaurante`, `Cliente`, `Pedido` e `ItemMenu`. Os clientes podem fazer pedidos em diferentes restaurantes, e o sistema deve calcular o valor total do pedido.

- **Classes:**

1. `Restaurante`: Representa um restaurante com um menu de itens.
2. `Cliente`: Representa um cliente que pode fazer pedidos em diferentes restaurantes.
3. `Pedido`: Representa um pedido feito por um cliente em um restaurante.
4. `ItemMenu`: Representa um item do menu com informações como nome e preço.

- **Requisitos:**

1. Implementar métodos para adicionar itens ao pedido.
2. Calcular o valor total do pedido.
3. Rastrear o status do pedido (pendente, em andamento, entregue).

**Exercício 8: Sistema de Gerenciamento de Projetos**

Desenvolva um sistema de gerenciamento de projetos com classes como `Projeto`, `Tarefa`, `Equipe` e `Colaborador`. Os projetos possuem tarefas, e os colaboradores podem ser atribuídos a diferentes tarefas.

- **Classes:**

1. `Projeto`: Representa um projeto com uma lista de tarefas.
2. `Tarefa`: Representa uma tarefa em um projeto.
3. `Equipe`: Representa a equipe de colaboradores disponíveis.
4. `Colaborador`: Representa um membro da equipe com informações como nome e habilidades.

- **Requisitos:**

1. Atribuir colaboradores a tarefas específicas.
2. Rastrear o progresso das tarefas.
3. Implementar métodos para exibir informações detalhadas sobre projetos, tarefas e colaboradores.

**Exercício 9: Sistema de Controle de Estoque para Supermercado**

Crie um sistema de controle de estoque para um supermercado com classes como `Produto`, `Estoque`, `CarrinhoDeCompras` e `Cliente`. Os clientes podem adicionar produtos ao carrinho, realizar compras e o sistema deve atualizar o estoque.

- **Classes:**

1. `Produto`: Representa um produto disponível no supermercado.
2. `Estoque`: Representa o estoque do supermercado com uma lista de produtos.
3. `CarrinhoDeCompras`: Representa o carrinho de compras de um cliente.
4. `Cliente`: Representa um cliente que pode realizar compras.

- **Requisitos:**

1. O sistema deve permitir que os clientes adicionem produtos ao carrinho.
2. Atualizar o estoque após a conclusão da compra.
3. Implementar métodos para calcular o valor total da compra.

**Exercício 10: Sistema de Monitoramento de Saúde**

Desenvolva um sistema de monitoramento de saúde com classes como `Paciente`, `Medico`, `Consulta` e `HistoricoMedico`. Os pacientes podem agendar consultas, os médicos podem registrar informações e o sistema deve manter um histórico médico.

- **Classes:**

1. `Paciente`: Representa um paciente com informações pessoais.
2. `Medico`: Representa um médico com informações pessoais.
3. `Consulta`: Representa uma consulta médica com informações como data, hora e diagnóstico.
4. `HistoricoMedico`: Representa o histórico médico de um paciente, contendo uma lista de consultas.

- **Requisitos:**

1. Agendar consultas para pacientes.
2. Registrar informações diagnósticas durante a consulta.
3. Implementar métodos para consultar o histórico médico de um paciente.

- **Exercício 11: Sistema de Reservas para Salas de Conferência**

Desenvolva um sistema de reservas para salas de conferência em uma empresa com classes como `SalaConferencia`, `Reserva`, `Usuario` e `Calendario`. Os usuários podem reservar salas para reuniões e o sistema deve garantir que não haja conflitos de horários.

- **Classes:**

1. `SalaConferencia`: Representa uma sala de conferência com informações como capacidade e disponibilidade.
2. `Reserva`: Representa uma reserva feita por um usuário para uma sala de conferência.
3. `Usuario`: Representa um usuário que pode fazer reservas.
4. `Calendario`: Representa o calendário da empresa, com uma lista de reservas.

- **Requisitos:**

1. Garantir que não haja sobreposição de reservas para a mesma sala.
2. Implementar métodos para consultar a disponibilidade das salas.
3. Permitir que usuários cancelem suas reservas.

**Exercício 12: Sistema de Gerenciamento de Tarefas Pessoais**

Crie um sistema de gerenciamento de tarefas pessoais com classes como `Tarefa`, `ListaTarefas`, `Categoria` e `Usuario`. Os usuários podem organizar suas tarefas em listas e categorias.

- **Classes:**

1. `Tarefa`: Representa uma tarefa com informações como descrição, data de vencimento e status.
2. `ListaTarefas`: Representa uma lista de tarefas que pertence a um usuário.
3. `Categoria`: Representa uma categoria para organizar as tarefas.
4. `Usuario`: Representa um usuário que possui listas de tarefas.

- **Requisitos:**

1. Permitir a criação de tarefas, listas e categorias.
2. Implementar métodos para marcar tarefas como concluídas.
3. Organizar tarefas em diferentes listas e categorias.

**Exercício 13: Sistema de Avaliação de Desempenho em Escola**

Desenvolva um sistema de avaliação de desempenho escolar com classes como `Aluno`, `Disciplina`, `Nota` e `Boletim`. Os alunos têm notas em diferentes disciplinas, e o sistema deve calcular médias e fornecer boletins.

- **Classes:**

1. `Aluno`: Representa um aluno com informações pessoais.
2. `Disciplina`: Representa uma disciplina com uma lista de notas de alunos.
3. `Nota`: Representa a nota de um aluno em uma disciplina.
4. `Boletim`: Representa o boletim de um aluno, contendo notas em diferentes disciplinas.

- **Requisitos:**

1. Calcular a média do aluno em cada disciplina.
2. Gerar um boletim com as notas de todas as disciplinas.
3. Implementar métodos para consultar o desempenho de um aluno.

**Exercício 14: Sistema de Controle de Gastos Pessoais**

Crie um sistema de controle de gastos pessoais com classes como `Despesa`, `Receita`, `Categoria` e `Orçamento`. Os usuários podem registrar suas despesas e receitas e visualizar um resumo financeiro.

- **Classes:**

1. `Despesa`: Representa uma despesa com informações como valor, data e categoria.
2. `Receita`: Representa uma receita com informações como valor, data e fonte.
3. `Categoria`: Representa uma categoria para classificar despesas e receitas.
4. `Orçamento`: Representa o orçamento do usuário, contendo despesas e receitas.

- **Requisitos:**

1. Registrar despesas e receitas em diferentes categorias.
2. Calcular o saldo total (receitas - despesas).
3. Implementar métodos para gerar relatórios financeiros.

**Exercício 15: Sistema de Gerenciamento de Músicas e Playlists**

Desenvolva um sistema de gerenciamento de músicas e playlists com classes como `Musica`, `Playlist`, `Usuario` e `BibliotecaMusical`. Os usuários podem criar playlists, adicionar músicas e organizar suas bibliotecas musicais.

- **Classes:**

1. `Musica`: Representa uma música com informações como título, artista e duração.
2. `Playlist`: Representa uma lista de reprodução com um conjunto de músicas.
3. `Usuario`: Representa um usuário que possui uma biblioteca musical e playlists.
4. `BibliotecaMusical`: Representa a biblioteca musical de um usuário, contendo todas as músicas.

- **Requisitos:**

1. Adicionar músicas à biblioteca musical.
2. Criar playlists e adicionar músicas a elas.
3. Implementar métodos para reproduzir músicas e playlists.
