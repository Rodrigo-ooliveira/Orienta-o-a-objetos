//object.preventExtensions  não permite que seja aumentado o numero de artributos
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag:'promocao'
})
console.log('Extensivel', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
produto.preco = 2.99
delete produto.tag
console.log(produto)

//Object.seal       consegue alterar um objeto, mas não consegue adicionar ou remover atributos
const pessoa = { nome:'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes