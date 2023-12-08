class Quadrado {
  #cor;
  #base;
  #altura;

  get cor() {
    return this.#cor;
  }

  set cor(cor) {
    if (cor !== "red" && cor !== "green" && cor !== "blue") {
      console.log(
        'O valor da propriedade cor deve ser "red", "green" ou "blue"'
      );
    }
    this.#cor = cor;
  }

  get base() {
    return this.#base;
  }

  set base(base) {
    if (isNaN(base)) throw "base precisa ser um número";
    this.#base = base;
  }

  get altura() {
    return this.#altura;
  }

  set altura(altura) {
    if (isNaN(altura)) throw "altura precisa ser número";
    this.#altura = altura;
  }
}


const quadrado = new Quadrado()
quadrado.base = 2
quadrado.altura = 2

console.log(quadrado.altura)