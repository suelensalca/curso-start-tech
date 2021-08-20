class Matematica {

    soma(valorA, valorB) {
        return valorA + valorB
    }
    subtracao(valorA, valorB) {
        return valorA - valorB
    }
}

var resultado = new Matematica().soma(4,7)

console.log(resultado)

// var instanciaMatematica = new Matematica()

// var resultado = instanciaMatematica.soma(4, 7)

// console.log(resultado)