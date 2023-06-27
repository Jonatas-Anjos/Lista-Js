var soma = 0;
for (var i = 1; i <= 5; i++) {
  var numero = parseInt(prompt("Digite o número " + i + ":"));
  soma += numero;
}
var media = soma / 5;

alert("A soma dos números é: " + soma);
alert("A média dos números é: " + media);