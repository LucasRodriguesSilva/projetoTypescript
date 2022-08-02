// Como podemos melhorar o esse código usando TS? 

enum Profissao {
  Atriz,
  Padeiro,
}

interface IPessoa {
  nome: string;
  idade: number;
  profissao?: Profissao;
}


let pessoa1: IPessoa = {
  nome: "Maria",
  idade: 29,
  profissao: Profissao.Atriz
};


let pessoa2: IPessoa = {
  nome: "Roberto",
  idade: 19,
  profissao: Profissao.Padeiro
};

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: Profissao.Atriz
};

let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};