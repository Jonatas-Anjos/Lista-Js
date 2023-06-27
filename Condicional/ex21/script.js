function fazerPerguntas() {
    var respostasPositivas = 0;

    let nome = prompt('Olá, qual o nome do senhor(a)?');

    var p1 = prompt('Certo ' + nome + ', meu nome é Hitalo e sou investigador criminal do instituto Proa.\nPeço que fique tranquilo e me fale somente o que aconteceu ok?\nVocê telefonou para a vitima?\n(Sim ou Não)').toLowerCase();
    if (p1 === "sim") {
    respostasPositivas++;
    }

    let p2 = prompt('Interessante...\nNo dia do ocorrido o senhor(a) esteve no local do crime?\n(Sim ou Não)').toLowerCase();
    if (p2 === "sim") {
    respostasPositivas++;
    }

    let p3 = prompt('Uhum e ' + nome + ' você reside próximo ao centro de Osasco?\n(Sim ou Não)').toLowerCase();
    if (p3 === "sim") {
    respostasPositivas++;
    }

    let p4 = prompt('E você tinha alguma pendencia com a vitima? Talvez alguma divida ou alguma complicação parecida.\n(Sim ou Não)').toLowerCase();
    if (p4 === "sim") {
    respostasPositivas++;
    }

    let p5 = prompt('Ok...\nVi aqui que você trabalha no banco pan, essa informação é correta?\nPor favor sr '+ nome +' responda sinceramente.\n(Sim ou Não)').toLowerCase()
    if (p5 === "sim") {
    respostasPositivas++;
    }

    return respostasPositivas;
}
  
  var totalRespostasPositivas = fazerPerguntas();
  
  if (totalRespostasPositivas === 5) {
    alert("Classificação: Assassino");
  } else if (totalRespostasPositivas >= 3 && totalRespostasPositivas <= 4) {
    alert("Classificação: Cúmplice");
  } else if (totalRespostasPositivas === 2) {
    alert("Classificação: Suspeita");
  } else {
    alert("Classificação: Inocente");
  }
  