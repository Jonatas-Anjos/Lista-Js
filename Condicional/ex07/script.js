let nome = prompt('Olá! Qual seu nome?')

let turno = prompt('Olá ' + nome + ', em qual turno você estuda?\nDigite: M para Matutino;\nV para Vespertino;\nou N para Noturno:')

if (turno.toUpperCase() === 'M') {
    alert('Bom dia ' + nome + ', boa aula')
} else if (turno.toUpperCase() === 'V') {
    alert('Boa tarde ' + nome + ', boa aula')
} else if (turno.toUpperCase() === 'N') {
    alert('Boa noite ' + nome + ', boa aula')
} else {
    alert('Valor inválido!')
}