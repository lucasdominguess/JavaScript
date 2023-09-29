//promises (promessa)  
//3 estagios de uma promise
//pending :promese foi iniciada mas esta pendente 
//fullfilled : a promise foi realizada com sucesso . 
//rejected : a promisse foi rejeitada , porque houve um erro.

//criando uma promise
const fs = require("fs");  //Modolo para ler arquivo
console.log('Antes da promise ser executada')


const promessa = new Promise((resolve,reject)=>{
    fs.readFile("arquivo.txt", (erro,conteudoArquivo) => {
        if (erro) { 
            reject('Ocorreu um erro ao tentar ler o arquivo : ',erro)
        }else {
            resolve(String(conteudoArquivo));
        }
    });
}); 

//Lidando com a promise | Focar aqui 
//then recebe o retorno do resolve da promise [promise concluida|fullfilled]
//catch recebe o retorno de reject /erro da promise [promise rejected]
//finaly recebe a conclusao da promisse independente do resultado reject|resolve
promessa.then((retornoDoresolveDaPromise) => { 
    console.log('Deu certo:',retornoDoresolveDaPromise)
}).catch((erro) => {
    console.log('nao deu certo :',erro)
}).finally(()=>{
    console.log('Promisse concluida! finally executado')
});

console.log(promessa)