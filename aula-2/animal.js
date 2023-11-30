class Animal {
  constructor(nome, tipo) {
    this.nome = nome;
    this.tipo = tipo;
  }
}

class Mamifero extends Animal {
  amamentar() {
    console.log("Este animal amamenta!");
    console.log("Nome:", this.nome);
  }
}

class Ave extends Animal {
  voar() {
    console.log("Este animal voa!");
  }
}

const girafa = new Mamifero("girafa", "mamifero");
girafa.amamentar();

const criarAnimal = (nome, tipo) => ({ nome, tipo });

const criarMamifero = (nome, tipo) => {
  const animal = criarAnimal(nome, tipo);
  const amamentar = () => {
    console.log("Este animal amamenta!");
  };

  return {
    ...animal,
    amamentar,
  };
};

const girafa1 = criarMamifero("girafa", "mamifero");

girafa1.amamentar();
