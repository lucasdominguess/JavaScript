// const pessoa1 = { //exemplo de objeto 
//     nome: 'luiz',
//     sobrenome: 'otavio',
//     idade : '25',
// }

// console.log(pessoa1.idade)

function cadastrar (nome,sobrenome , idade) { 
    return { 
        nome : nome , 
        sobrenome :sobrenome , 
        idade : idade ,   
    }

}
const pessoa = cadastrar('lucas','domingues',30) 
const pessoa2 = cadastrar('jenifer','gomes',23) 



const pessoa1 = { //exemplo de objeto 
         nome: 'luiz',
         sobrenome: 'otavio',
         idade : '25',

         fala()  {                           //this = esse objeto 
            console.log(`A minha idade atual é ${this.idade}.`);
         },
         incrementaIdade() { 
            this.idade++; //adcionando +1 na idade
         }

}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
