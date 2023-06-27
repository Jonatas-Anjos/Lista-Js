const qtdMorango = parseFloat(prompt("Digite a quantidade de morangos em Kg:"));
const qtdMaca = parseFloat(prompt("Digite a quantidade de maçãs em Kg:"));

const precoMorango = qtdMorango <= 5 ? 2.5 : 2.2;
const precoMaca = qtdMaca <= 5 ? 1.8 : 1.5;

let precoTotal = qtdMorango * precoMorango + qtdMaca * precoMaca;

if (qtdMorango + qtdMaca > 8 || precoTotal > 25) {
  precoTotal *= 0.9;
}

alert(`O valor total da compra é R$ ${precoTotal.toFixed(2)}`);