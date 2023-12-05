class Funcionario {
  #nome;
  #salarioBase;
  #beneficios = [];

  constructor(nome, salarioBase) {
    this.#nome = nome;
    this.#salarioBase = salarioBase;
  }

  getNome() {
    return this.#nome;
  }

  #calcularTotalSalario() {
    // const totalBeneficios = this.#beneficios.reduce((total, beneficio) => total + beneficio.valor, 0);
    let totalBeneficios = 0;
    this.#beneficios.forEach((beneficio) => {
      totalBeneficios += beneficio.valor;
    });
    return this.#salarioBase + totalBeneficios;
  }

  adicionarBeneficio(beneficio) {
    this.#beneficios.push(beneficio);
    console.log(
      `${beneficio.nome} adicionado aos benefícios de ${this.#nome}.`
    );
  }

  exibirDetalhesSalario() {
    const salarioTotal = this.#calcularTotalSalario();
    console.log(
      `${this.#nome} - Salário Base: ${
        this.#salarioBase
      }, Salário Total: ${salarioTotal} \n`
    );
  }
}

class Beneficio {
  constructor(nome, valor) {
    this.nome = nome;
    this.valor = valor;
  }
}

class BeneficioUnico extends Beneficio {
  constructor(nome, valor) {
    super(nome, valor * 0.3);
  }
}

class Empresa {
  #funcionarios = [];

  contratarFuncionario(funcionario) {
    this.#funcionarios.push(funcionario);
    console.log(`${funcionario.getNome()} contratado pela empresa. \n`);
  }

  exibirDetalhesSalarios() {
    this.#funcionarios.forEach(function (functionario) {
      functionario.exibirDetalhesSalario();
    });
  }
}

const empresaXYZ = new Empresa();

const funcionario1 = new Funcionario("Alice", 5000);
funcionario1.adicionarBeneficio(new Beneficio("Plano de Saúde", 1000));
funcionario1.adicionarBeneficio(new Beneficio("Vale Refeição", 500));
funcionario1.adicionarBeneficio(new BeneficioUnico("PPR", 5000));

const funcionario2 = new Funcionario("Bob", 60000);
funcionario2.adicionarBeneficio(new Beneficio("Plano Dental", 800));

empresaXYZ.contratarFuncionario(funcionario1);
empresaXYZ.contratarFuncionario(funcionario2);

empresaXYZ.exibirDetalhesSalarios();
