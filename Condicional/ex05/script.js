let nome = prompt('Olá! Qual seu nome?')

let n1 = parseInt(prompt(nome + " digite o primeiro valor"))
let n2 = parseInt(prompt("Digite o segundo valor"))
let n3 = parseInt(prompt("digite o terceiro valor"))

let maior = n1
let menor = n2

if(n2 > maior){
    maior = n2
}else if(n2 < menor){
    menor = n2
}

if(n3 > maior){
    maior = n3
}else if(n3 < menor){
    menor = n3
}

alert("O maior número digitado foi: " + maior + "\nE o menor foi: " + menor);