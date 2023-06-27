let nome = prompt("Digite seu nome: ");
let idade = parseInt(prompt("Digite sua idade: "));
let salario = parseFloat(prompt("Digite seu salário: "));
let sexo = prompt("Digite seu sexo:\n('F' ou 'M')").toUpperCase;
let estadoCivil = prompt("Digite seu estado civil:\n('S' para solteiro\n'C' para casado\n'V' para viúvo\nou 'D' para divorciado)").toUpperCase;

while (nome.length < 3) {
  alert("Nome deve conter mais de 3 caracteres!");
  nome = prompt("Digite seu nome: ");
}

while (idade < 0 || idade > 150) {
  alert("Idade deve ser entre 0 e 150!");
  idade = parseInt(prompt("Digite sua idade: "));
}

while (salario < 0) {
  alert("Salário deve ser maior que 0!");
  salario = parseFloat(prompt("Digite seu salário: "));
}

while (sexo !== "F" && sexo !== "M") {
  alert("Sexo deve ser 'F' ou 'M'!");
  sexo = prompt("Digite seu sexo:\n('F' ou 'M')").toUpperCase;
}

while (
  estadoCivil !== "s" &&
  estadoCivil !== "c" &&
  estadoCivil !== "v" &&
  estadoCivil !== "d"
) {
  alert("Estado civil deve ser 's', 'c', 'v' ou 'd'!");
  estadoCivil = prompt("Digite seu estado civil:\n('S' para solteiro\n'C' para casado\n'V' para viúvo\nou 'D' para divorciado)").toUpperCase;
}

alert("Cadastro realizado com sucesso!");