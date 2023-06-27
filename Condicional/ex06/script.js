let nome = prompt('Olá! Qual seu nome?')

let n1 = parseInt(prompt(nome + " digite o primeiro valor"))
let n2 = parseInt(prompt("Digite o segundo valor"))
let n3 = parseInt(prompt("digite o terceiro valor"))

if (n1 >= n2 && n1 >= n3) {
    if (n3 >= n2) {
        alert(`${n1}, ${n3}, ${n2}`)
    } else {
        alert(`${n1}, ${n2}, ${n3}`)
    }


} else if (n2 >= n1 && n2 >= n3) {
    if (n3 >= n1) {
        alert(`${n2}, ${n3}, ${n1}`)
    } else {
        alert(`${n2}, ${n1}, ${n3}`)
    }
} else {
    if (n1 >= n2) {
        alert(`${n3}, ${n1}, ${n2}`)
    } else {
        alert(`${n3}, ${n2}, ${n1}`)
    }
}