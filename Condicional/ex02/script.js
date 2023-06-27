const nota1 = parseFloat(prompt('Informe a primeira nota: '))
const nota2 = parseFloat(prompt('Informe a segunda nota: '))

const media = (nota1 + nota2) / 2

document.write("A média final é: " + media);
document.write("<br>");

if(media ==10){
    document.write("Você foi aprovado com distinção")
} else if(media >=7){
    document.write("Parabéns! Você foi aprovado. :D")
} else{
    document.write("Infelizmente você foi reprovado. :(")
}