//Objetos em js (como se fosse dicionarios em python )

let pessoa = { 
    nome : 'lucas',
    idade : 18 , 
} 

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade) 
console.log(pessoa['nome'])//forma alternativa de acessar indice do objeto 

console.clear()

//adcionar um par chave-valor ? 
pessoa.altura =1.89

console.log (pessoa)

//remover chave de um objeto
console.clear()
delete pessoa.idade 

console.log(pessoa)

console.clear()

//percorendo indice de cada chave do objeto
for (let chave in pessoa) { 
    console.log(chave)
}