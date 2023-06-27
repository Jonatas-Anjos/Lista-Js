const precoGasolina = 2.5;
const precoAlcool = 1.9;

const tipoCombustivel = prompt(
    "Digite o tipo de combustível\nAlcool R$1,84 o litro\nGasolina R$2,40 o Litro\n(A-álcool, G-gasolina): "
).toUpperCase();
const qtdLitros = Number(prompt("Digite a quantidade de litros vendidos: "));

let valorTotal = 0;

if (tipoCombustivel == "A") {
    if (qtdLitros <= 20) {
        valorTotal = qtdLitros * precoAlcool * 0.97;
    } else {
        valorTotal = qtdLitros * precoAlcool * 0.95;
    }
} else if (tipoCombustivel == "G") {
    if (qtdLitros <= 20) {
        valorTotal = qtdLitros * precoGasolina * 0.96;
    } else {
        valorTotal = qtdLitros * precoGasolina * 0.94;
    }
} else {
    alert("Tipo de combustível inválido!");
}

alert(`Valor total a pagar: R$ ${valorTotal.toFixed(2)}`);