
// const fs =require('fs') ; 

// fs.readFile('package.json', (erro,dados) => { 
//     if (erro) { 
//         console.log('Deu erro',erro)
//     }else {
//         console.log(JSON.parse(dados)); //lendo arquivo no formato json
//         console.log(typeof dados)

//     }
// });

//convertendo JSON em formatode string , para um objeto. 

const jsonstring = '{"nome": "Tony Stark"}' 
console.log (JSON.parse(jsonstring)); 

//convertendo um objeto do js , em um JSon (string)

const pessoa = { nome : "tony stark" ,
                personagem: "homem de ferro"};

console.log(pessoa)
console.log(JSON.stringify(pessoa));
                
