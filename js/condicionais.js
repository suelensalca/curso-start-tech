var nome = 'JC'

if (nome === 'JC') {
    console.log('Legal! Seu nome é este mesmo')
} else if (nome === 'Bombardelli') {
    console.log('Tudo bem! Você também serve')
} else {
    console.log("Que pena! Seu nome não é JC")
}

var primeiroNome = 'JC'

switch (primeiroNome) {
    case 'JC':
        console.log('Legal! Seu nome é este mesmo')
        break
    case 'Bombardelli':
        console.log('Ah! Você também serve')
        break
    default:
        console.log('Que pena! Você não é qem eu estou procurando')
        break
}