- **Exercício: Desenvolvimento do Jogo da Velha em JavaScript - POO**

**Objetivo:** Implementar um jogo da velha em JavaScript utilizando Programação Orientada a Objetos (POO). Este exercício visa aprofundar a compreensão dos conceitos de classes.

**Classes:**

1. ** (Jogador):**

- **Atributos:**
- `name` (nome do jogador)
- `symbol` (símbolo do jogador, 'X' ou 'O')

2. ** (Jogada):**

- **Atributos:**
- `row` (linha da jogada)
- `col` (coluna da jogada)
- `playerSymbol` (símbolo do jogador que fez a jogada)

3. ** (Tabuleiro):**

- **Atributos:**
- `grid` (matriz 3x3 representando o estado atual do tabuleiro)
- **Métodos:**
- `makeMove(move: Move): boolean` - Realiza uma jogada no tabuleiro. Retorna `true` se a jogada for válida, `false` caso contrário.
- `isValidMove(move: Move): boolean` - Verifica se uma jogada é válida.
- `display(): void` - Exibe o estado atual do tabuleiro.
- `checkWinner(player: Player): boolean` - Verifica se um jogador é o vencedor.

4. ** (Jogo):**

- **Atributos:**
- `players` (lista de jogadores)
- `currentPlayerIndex` (índice do jogador atual na lista)
- `winner` (vencedor do jogo, se houver)
- `gameOver` (indica se o jogo terminou)
- `board` (instância da classe Board)
- **Métodos:**
- `switchPlayer(): void` - Alterna entre jogadores.
- `play(): void` - Orquestra o jogo, solicita jogadas, verifica vencedores e exibe mensagens.
- `requestMove(player: Player): Move` - Solicita uma jogada ao jogador.
- `checkWinner(player: Player): void` - Verifica se há um vencedor e encerra o jogo se necessário.

**Exercício:**

1. **Implementação de Métodos:**

- Complete a implementação dos métodos nas classes `Move`, `Board`, e `Game` conforme descritos nos comentários.
- Utilize o método `console.log` para exibir informações relevantes durante a execução do jogo.

2. **Desafios Adicionais:**

- Modifique o código para permitir que os jogadores escolham seus próprios símbolos.
- Adicione tratamento de erro para lidar com entradas inválidas dos jogadores.
- Implemente uma funcionalidade de reiniciar o jogo após o término.

3. **Teste e Experimentação:**

- Crie instâncias das classes e inicie o jogo com diferentes configurações de jogadores.
- Teste diferentes cenários, como vitórias, empates e jogadas inválidas.
