const numero = parseFloat(prompt("Digite um número:"));

if (isNaN(numero)) {
  alert("Valor inválido. Por favor, digite um número.");
} else {
  const arredondado = Math.round(numero);

  if (numero === arredondado) {
    alert("O número " + numero + " é inteiro.");
  } else {
    alert("O número " + numero + " é decimal.");
  }
}