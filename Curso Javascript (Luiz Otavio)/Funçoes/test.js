// function cadastro(Nome , idade , cidade ){ 
//     let cadastrados = [] 

//     cadastrados.push({Nome , idade , cidade} )
//    return cadastrados
   
// }
// cadastro('lucas',18,'santos')
// console.log(cadastrados)

// // let cadastrados = [] 

// // cadastrados.push(cadastro('lucas',18,'santos') )
// // cadastrados.push(cadastro('rafael',19,'santos') )
// // cadastrados.push(cadastro('flavio',20,'santos') )
// // cadastrados.push(cadastro('nick',21,'santos') )
// console.log(cadastrados)

function cadastro(nome, idade, cidade) {
   
     return {nome,idade ,cidade}
}
let pessoa = cadastro('lucas',18,'santos')
let pessoa2 = cadastro('lucas2',18,'santos')
let pessoa3 = cadastro('lucas3',18,'santos')
let pessoa4 = cadastro('lucas4',18,'santos')
console.log(pessoa,pessoa2,pessoa3,pessoa4)
