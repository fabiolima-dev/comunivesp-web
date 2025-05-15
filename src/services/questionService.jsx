let user = "Fabio Henrique";
let questionTitle = "O que é uma RDBMS?";
let interesse = "Banco de Dados";
let detalhePerguntas =
  "Estou estudando Base de dados. Me fale o que é um RBDSM e me dê exemplos?";

const respostas = [
  {
    id: 1,
    user: "João Silva",
    profilePic: "https://thispersondoesnotexist.com/",
    detalhe:
      "RDBMS é um sistema de gerenciamento de banco de dados relacional. Ele é usado para armazenar, gerenciar e recuperar dados em um formato estruturado, utilizando tabelas e relacionamentos entre elas.",
  },
  {
    id: 2,
    user: "Maria Oliveira",
    profilePic: "https://thispersondoesnotexist.com/",
    detalhe:
      "Um exemplo de RDBMS é o MySQL, que é amplamente utilizado para gerenciar bancos de dados relacionais.",
  },
  {
    id: 3,
    user: "Carlos Souza",
    profilePic: "https://thispersondoesnotexist.com/",
    detalhe:
      "Outro exemplo é o PostgreSQL, que é conhecido por sua robustez e suporte a recursos avançados.",
  },
];

const questionService = {
  user: user,
  profilePic: "https://thispersondoesnotexist.com/",
  questionTitle: questionTitle,
  detalhePerguntas: detalhePerguntas,
  interesse: interesse,
  respostas: respostas,
};

export default questionService;
