// Objeto coleção dinamica de pares chaves/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome:'Raul',
        idade:56,
        endereco: {
            logradouro: 'Rua abc',
            numero: 123
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularValorseguro: function() {
        //.....
    }
}

carro.proprietario.endereco.numero = 1000
carro ['proprietario'] ['endereco'] ['logradouro'] = 'Av Gigante'
console.log(carro)

delete carro.calcularValorseguro
delete carro.condutores
delete carro.proprietario.endereco
console.log(carro)
console.log(carro.condutores)
