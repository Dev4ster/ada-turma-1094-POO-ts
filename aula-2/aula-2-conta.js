class ContaBancaria2 {
  #saldo;

  depositar(valor) {
    if (valor > 0) {
      this.#atualizarSaldo(valor);
    }
  }

  #atualizarSaldo(valor) {
    this.#saldo = valor;
  }

  sacar(valor) {
    if (valor > 0 && valor <= this.#saldo) {
      this.#atualizarSaldo(this.#saldo - valor);
    }
  }
}

const contaB2 = new ContaBancaria2();
