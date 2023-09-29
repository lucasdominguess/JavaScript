const fs = require("fs");  //Modolo para ler arquivo


function lerArquivoPromise() {
  return promessa = new Promise((resolve,reject)=>{
    fs.readFile("arqu ivo.txt", (erro,conteudoArquivo) => {
        if (erro) { 
            reject('Ocorreu um erro ao tentar ler o arquivo : ',erro)
        }else {
            resolve(String(conteudoArquivo));
        }
    });
}); 
}

async function leituraDeDados() { 
    console.log('executando antes da promise ser resolvida'); 
    try { //tente executar 
    const returnPromise = await lerArquivoPromise();
    console.log(returnPromise)
    console.log('executando DEPOIS da promise ser resolvida'); 
    } catch (erro){
        console.log(erro)
        console.log('Isso é executado apos a promisse (com erro)')
    }finally{
        console.log('finally executado')
    }
     
}
leituraDeDados();
