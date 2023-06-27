const salario = parseFloat(prompt('Digite o salário do funcionário: '));

let novoSalario;

if (salario <= 280) {
    novoSalario = salario + (salario * 0.2);
} else if (salario > 280 && salario <= 700) {
    novoSalario = salario + (salario * 0.15);
} else if (salario > 700 && salario <= 1500) {
    novoSalario = salario + (salario * 0.1);
} else {
    novoSalario = salario + (salario * 0.05);
}

const reajuste = novoSalario - salario;

document.write(`Salário antes do reajuste: R$ ${salario.toFixed(2)}<br>`);
document.write(`Percentual de aumento aplicado: ${(((novoSalario / salario) - 1) * 100).toFixed(2)}%<br>`);
document.write(`Valor do aumento: R$ ${reajuste.toFixed(2)}<br>`);
document.write(`Novo salário: R$ ${novoSalario.toFixed(2)}`);