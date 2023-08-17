const nome ='luiz' // usafalaNome ira executar essa variavel 

function falaNome() {
    //caso exista uma variavel dentro do escopo usafalanome ira achar e executar primeiro
    //const nome = 'lucas' 
    console.log(nome) //procura variavel fora do seu escopo , ira executar var 'luiz'
}

function usaFalaNome() { 
    //const nome = 'Otavio' ; nao importa uq por aqui , ira ignorar e procurar fora do seu escopo
    falaNome(); 
}
usaFalaNome()