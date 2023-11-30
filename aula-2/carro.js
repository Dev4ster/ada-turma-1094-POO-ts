class Carro {
  #marca;
  #modelo;
  #ano;
  #velocidade;
  acelarCount = 2;

  constructor(marca, modelo, ano) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#ano = ano;
  }

  #teste() {
    console.log("teste");
  }

  getVelocidade() {
    this.#teste();
    return this.#velocidade;
  }

  getInfo() {
    return `${this.#ano} - ${this.#marca}`;
  }

  acelerar() {
    this.#velocidade += this.acelarCount;
  }
}

class CarroEsportivo extends Carro {
  #tipoEsporte;
  constructor(marca, modelo, ano, tipoEsporte) {
    super(marca, modelo, ano); // new Carro(marca, modelo, ano)

    this.#tipoEsporte = tipoEsporte;
    this.acelarCount = 10;
  }
}

const carroComum = new Carro("Pegeout", "E", 2008);
carroComum.acelerar();
console.log("carroComum", carroComum.getVelocidade());

const carroEsportivo = new CarroEsportivo("Ferrari", "E", 2023, "corrida");

class CarroView {
  static print(carros = []) {
    carros.forEach((carro) => {
      if (carro instanceof Carro) {
        console.log(carro.getInfo());
      }
    });
  }
}

CarroView.print([carroComum, carroEsportivo]);
