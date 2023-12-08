const promptSync = require('prompt-sync')

const prompt2 = promptSync({sigint: true});

type MySymbol = 'O' | 'X'
class Player {
    constructor(readonly name: string, readonly symbol: MySymbol) {
    }
}

class Move {
    constructor(
        readonly row: number, 
        readonly col: number, 
        readonly playerSymbol: MySymbol){}
}

class Board {
    grid: Array<Array<MySymbol | null>>
    constructor() {
        this.grid = Array.from(Array(3), () => new Array(3).fill(null));
    }
    makeMove(move: Move) {
        if(!this.isValidMove(move)) {
            return false;
        }
        this.grid[move.row][move.col] = move.playerSymbol;
        return true;
    }
    isValidMove(move: Move) {
        return this.grid[move.row][move.col] == null;
    }
    display() {
        console.log('\nTabuleiro atual:');
        this.grid.forEach((row) => {
            // [null, null, null] =>  null | null | null
            console.log(row.join(' | '));
        })
        console.log('');
    }
    checkWinner(player: Player) {
      // * verificando linhas
        for (const row of this.grid) {
          // row = [0, x, 0]
            if(row.every((symbol) => symbol == player.symbol)) {
                return true;
            }
        }
        // * verificando colunas

        // [
          //   ['linha 1 - coluna 1', 'linha 1 - coluna 2', 'linha 1 - coluna 3']
          //   ['linha 2 - coluna 1', 'linha 2 - coluna 2', 'linha 2 - coluna 3']
          //   ['linha 3 - coluna 1', 'linha 3 - coluna 2', 'linha 3 - coluna 3']
          // ]
        for(let col = 0; col < 3; col++) {
          // col = 0 -> 1 -> 2
            if(this.grid.every((row) => row[col] == player.symbol)) {
                return true;
            }
        }
        // * verificando diagonais
        if((this.grid[0][0] == player.symbol && this.grid[1][1] == player.symbol && this.grid[2][2] == player.symbol)) {
            return true;
        }else if((this.grid[0][2] == player.symbol && this.grid[1][1] == player.symbol && this.grid[2][0] == player.symbol)) {
            return true;
        }
        return false;
    }
}

class Game {
    players: Player[] // Array<Player>
    currentPlayerIndex: number
    winner: string | null
    gameOver: boolean
    board: Board

    constructor(player1: Player, player2: Player) {
        this.players = [player1, player2];
        this.currentPlayerIndex = 0;
        this.winner = null;
        this.gameOver = false;
        this.board = new Board();
    }
    switchPlayer(){
        this.currentPlayerIndex = this.currentPlayerIndex ? 0 : 1; 
    }
    play() {
        this.board.display();
        while(!this.gameOver) {
            const currentPlayer = this.players[this.currentPlayerIndex];
            const move = this.requestMove(currentPlayer);
            if(this.board.makeMove(move)) {
                this.board.display();
                this.checkDraw();
                this.switchPlayer();
            } else {
                console.log('Jogada inválida');
            }
        }
        if(this.winner) {
            console.log(`Parabéns ${this.winner}!`);
        } else {
            console.log('O jogo empatou!');
        }
    }
    requestMove(player: Player) {
        const row = Number(prompt2(`${player.name}, escolha a linha (0-2)`))
        const col = Number(prompt2(`${player.name}, escolha a coluna (0-2)`))
        return new Move(row, col, player.symbol);
    }
    checkWinner(player: Player) {
        if(this.board.checkWinner(player)) {
            this.winner = player.name;
            this.gameOver = true;
            return true;
        }
        return false;
    }
    checkDraw() {
        if(!this.checkWinner(this.players[0]) && !this.checkWinner(this.players[1])) {
            if(!this.board.grid.flat().includes(null)) {
                this.gameOver = true;
            }
        }
    }
}

const player1 = new Player('João', 'X');
const player2 = new Player('Maria', 'O');

const game = new Game(player1, player2);
game.play();