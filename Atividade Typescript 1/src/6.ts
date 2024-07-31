/* 
    6. Usando o contexto do exercício 6, crie um tipo de usuário que
    representa funcionários da diretoria da empresa. O tipo Diretor deve
    conter as propriedades: nome, idade, salário (opcional) e nível de
    comissionamento (numérico). Crie uma função que receba um
    Diretor e mostre suas informações. Exemplos:
    
    a. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário R$ 1000”
    b. “Diretor(a) Daphne, 23 anos, comissão nível 5, salário N/A”
*/

import { Diretor } from "./types/Types";

export function mostrarDiretor(diretor: Diretor): string {
  const infoDiretor = {
    nome: diretor.nome,
    idade: diretor.idade,
    comissao: diretor.comissao,
  };

  const salario =
    diretor.salario !== undefined ? `R$ ${diretor.salario.toFixed(2)}` : "N/A";

  return `Diretor(a) ${infoDiretor.nome}, ${infoDiretor.idade} anos, comissão nível ${infoDiretor.comissao}, salário ${salario}`;
}

const daphine: Diretor = {
  nome: "Daphine",
  idade: 23,
  comissao: 5,
  salario: 1000,
};

console.log(mostrarDiretor(daphine));
