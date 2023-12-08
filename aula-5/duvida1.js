class Utils {
  constructor() {}

  static calcularIdade(data) {
    const dataAtual = new Date(); // instancia data de hoje
    const anoAtual = dataAtual.getUTCFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();

    const dataAnterior = new Date(data.replace("-", "/"));
    const anoAniversario = dataAnterior.getUTCFullYear();
    const mesAniversario = dataAnterior.getMonth() + 1;
    const diaAniversario = dataAnterior.getDate();

    let idade = anoAtual - anoAniversario;

    if (
      mesAtual < mesAniversario ||
      (mesAtual == mesAniversario && diaAtual < diaAniversario)
    ) {
      idade--; // idade++
    }

    return idade;
  }
}

class Pessoa {
  constructor(nome, dataNascimento) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.idade = Utils.calcularIdade(this.dataNascimento);
  }
}

const p1 = new Pessoa("João", "1988-05-26");
console.log(p1); // Pessoa { nome: 'João', dataNascimento: '1988-05-26', idade: 33 }
