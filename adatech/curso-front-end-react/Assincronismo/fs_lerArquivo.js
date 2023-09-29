const fs = require("fs");  //Modolo para ler arquivo

// 1. Callbacks
//função assincrona (ler arquivo ) 
fs.readFile("arquivo.txt", (erro,conteudoArquivo) => {
    if (erro) { 
        console.log('Ocorreu um erro ao tentar ler o arquivo : ',erro)
    }else {
        console.log(String(conteudoArquivo));
    }
});