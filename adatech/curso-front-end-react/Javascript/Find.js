//Encontrando um elemento dentro de um array | somente arrays 

//array.prototype.find() 

const numeros = [2,5,8,9,11,13,5,10,8,7,1];

const encontrado = numeros.find((numero)=>{    //por padrao find retorna o valor 
                                             //quando a condi~ção é true 
    return numero > 10; 
}); 
console.log(encontrado)
console.clear(); 

const pessoas = [
    {
        nome :'pessoa 1',
        idade: 30
    },
    {
        nome: 'pessoa 2 ',
        idade: 32

    },
    {
        nome: 'pessoa 3',
        idade : 35 
    }
]

const pessoaencontrada = pessoas.find((pessoa) => pessoa.idade >34 )
console.log(pessoaencontrada)
