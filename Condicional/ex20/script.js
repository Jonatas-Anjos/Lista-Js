const num1 = parseFloat(prompt("Digite o primeiro número:"));
const num2 = parseFloat(prompt("Digite o segundo número:"));

const operacao = prompt(
  "Qual operação você deseja realizar?\n1. Soma\n2. Subtração\n3. Multiplicação\n4. Divisão"
);

let resultado;
let descricaoResultado = "";

switch (operacao) {
  case "1":
    resultado = num1 + num2;
    break;
  case "2":
    resultado = num1 - num2;
    break;
  case "3":
    resultado = num1 * num2;
    break;
  case "4":
    resultado = num1 / num2;
    break;
  default:
    alert("Operação inválida. Por favor, escolha uma das opções válidas.");
}

if (resultado % 2 === 0) {
  descricaoResultado += "par, ";
} else {
  descricaoResultado += "ímpar, ";
}

if (resultado >= 0) {
  descricaoResultado += "positivo, ";
} else {
  descricaoResultado += "negativo, ";
}

if (resultado === Math.round(resultado)) {
  descricaoResultado += "inteiro.";
} else {
  descricaoResultado += "decimal.";
}

alert(
  "O resultado da operação escolhida é " +
    resultado +
    " e ele é " +
    descricaoResultado
);