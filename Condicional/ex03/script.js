const nome = prompt('Olá! Qual seu nome?')

const n1 = parseInt(prompt(nome + " digite o primeiro valor"))
const n2 = parseInt(prompt("Digite o segundo valor"))
const n3 = parseInt(prompt("digite o terceiro valor"))

if(n1 >n2 && n3){
    document.write(nome + " o primeiro valor: " + valor1 +" é o maior entre os três digitados.")
}else if(n2 >n3 && n1){
    document.write(nome + " o segundo valor: " + n2 +" é o maior entre os três digitados.")
}else{
    document.write(nome + " o terceiro valor: " + n3 +" é o maior entre os três digitados.")
}