// const criarLivro = () => {

// }

// OBJETO
// const pessoa = {
//   nome: "victor",
//   idade: 26,
//   eNegro: true,
//   endereco: {
//     rua: "",
//     numero: 30,
//   },
//   falar() {
//     console.log(this.nome, " falou");
//   },
// };

const criarLivro = function (titulo, autor, anoPublicacao) {
  return {
    titulo,
    autor,
    anoPublicacao,
  };
};

const meuLivro = criarLivro("Javascript", "Fulano de Tal", 2009);

const obterTitulo = (livro) => livro.titulo;
const obterAutor = (livro) => livro.autor;
const obterAnoPublicacao = (livro) => livro.anoPublicacao;

const temTitulo = (livro) => !!livro.titulo;

const imprimirDetalhesLivro = (livro) => {
  console.log(`Titulo: ${obterTitulo(livro)}`);
  console.log(`Autor: ${obterAutor(livro)}`);
  console.log(`Ano: ${obterAnoPublicacao(livro)}`);
};

imprimirDetalhesLivro(meuLivro);
