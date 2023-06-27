const letra = prompt('Informe a Letra: ')

const vogal = ["a", "e", "i", "o", "u"]

if (letra.match(/[^\w\s]/gi) || letra.match(/[0-9]/gi)) {
    alert("Digite apenas letras, sem caracteres especiais ou números.");
} else if (vogal.includes(letra.toLowerCase())) {
    document.write("A letra digitada é uma vogal.")
} else {
    document.write("A letra digitada é uma consoante.")
}  