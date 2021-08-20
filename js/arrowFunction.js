function soma(x, y) {
    return x + y
}

console.log(soma(3, 4))

const multiplicacao = function(x, y) {
    return x * y
}

console.log(multiplicacao(5,5))

const dividir = (x, y) => {
    return x / y
}

console.log(dividir(10, 2))

const objeto = () => ({ nome: 'JC', sobrenome: 'Bombardelli' })

let resultadofinal = objeto()

console.log(`Meu nome é ${resultadofinal.nome} ${resultadofinal.sobrenome}`)