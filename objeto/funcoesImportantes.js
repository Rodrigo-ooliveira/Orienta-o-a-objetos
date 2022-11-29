const pessoa = {
    nome: 'Rodrigo',
    idade: 43,
    peso: 13
}

console.log(Object.keys(pessoa))// chama as chaves
console.log(Object.values(pessoa))// chama os atributos
console.log(Object.entries(pessoa))// chama um array, com todos os subarrays com as chaves e atributos

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'DataNascimento', {
    enumerable: true,
    writable: false,
    value: '15/10/1979'
})

pessoa.dataNascimento = '01/02/2019'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//objec.assing (ECMAScript 20015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) //concatena varios objetos em um só

Object.freeze(obj)
obj.c = 1234
console.log(obj)