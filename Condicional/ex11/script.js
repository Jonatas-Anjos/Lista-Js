const nota1 = parseFloat(prompt("Digite a 1ª nota: "));
const nota2 = parseFloat(prompt("Digite a 2ª nota: "));
let conceito;

const media = (nota1 + nota2) / 2;

alert("Nota do 1º semestre: " + nota1);
alert("Nota do 2º semestre: " + nota2);
alert("Média " + media)

if (media >= 9) {
    conceito = "A";
} else if (media >= 7.5) {
    conceito = "B";
} else if (media >= 6) {
    conceito = "C";
} else if (media >= 4) {
    conceito = "D";
} else {
    conceito = "E";
}

alert("Conceito " + conceito);

if (conceito === "A" || conceito === "B") {
    alert("Aprovado");
} else {
    alert("Reprovado");
}