// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

// String
const nome: string = 'Suelen';

// Array
const idades: number[] = [23, 28, 45];
const idades2: Array<number> = [243, 345]

// Tuple - diz as posições e o tipo de cada posição
let jogadores: [string, string, string];
jogadores = ['Sue', 'Su', 'Elen']

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusFinalAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any - usar quando não sabe qual o retorno
const retornoDaAPI = [123, 'Sue', true]
const retornoDaAPI2: any = {
    // .....
};

// Void
function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined
const n: null = null

// Object - string dá erro
function criar(objeto: object) {
    //...
}
criar({
    propriedade: 1,
})

// Never - pode ser usada para erro, a ideia é que a função não finaliza
function loopInfnito(): never {
    while(true) { }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha(): never {
    return erro('Algo falhou')
}

//Union Types
const nota: string | number = 5
function exibirNota(nota: number | string) {
    console.log('A nota é' + nota);
}

exibirNota('10');
exibirNota(10)

// Alias - você pode 'criar' tipos
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

type Funcionarios  = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
    nome: 'Vitor',
    sobrenome: 'Farias',
    dataNascimento: new Date()
}, {
    nome: 'Fulano',
    sobrenome: 'Farias',
    dataNascimento: new Date()
}];
function tratarFuncionarios(funcionarios: Funcionario[]) {
    for(let funcionario of funcionarios) {
        console.log('Nome do funcionário:', funcionario, nome)
    }
}

// ? - ao invés de declarar o null vc pode por ? na propriedade para mostrar que ela é opcional(undefined)
type Contato = {
    nome: string;
    telefone: string;
    celular?: string;
}
const contato: Contato = {
    nome: 'Vitor',
    telefone: '1234',
}

// Type Assertion - ele vai considerar o tipo a partir daquele ponto - pode usar as ou <>
const minhaIdade: any = 23;
(minhaIdade as number).toString();

const input = <HTMLInputElement>document.getElementById("numero1");
console.log(input.value);