const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj))

console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3}')) //todo atributo e texto JSON estará entre aspas duplas
console.log(JSON.parse('{ "a": 1.8, "b": "string", "c": "true", "d": {} }')) 