let lado1 = Number(prompt("Informe o primeiro lado do triângulo:"));
let lado2 = Number(prompt("Informe o segundo lado do triângulo:"));
let lado3 = Number(prompt("Informe o terceiro lado do triângulo:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
  if (lado1 === lado2 && lado1 === lado3) {
    alert("Triângulo equilátero");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    alert("Triângulo isósceles");
  } else {
    alert("Triângulo escaleno");
  }
} else {
  alert("Não é possível formar um triângulo com esses valores.");
}