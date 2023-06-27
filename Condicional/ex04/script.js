let n1 = parseInt(prompt("Digite o primeiro valor"))
let n2 = parseInt(prompt("Digite o segundo valor"))

alert("Antes da troca: \nPrimeiro valor: " + n1 + "\nSegundo valor: " + n2);

let aux = n1;
n1 = n2;
n2 = aux;

alert("Depois da troca: \nPrimeiro valor: " + n1 + "\nSegundo valor: " + n2);