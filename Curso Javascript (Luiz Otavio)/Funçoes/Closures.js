//Global   //closures é a habilidade de uma função de acessar seu escopo lexico
function retornarFuncao() { 
    const nome = 'Luiz' ; 
    return function ( ){ 
        return nome ; 
    };
}
const funcao = retornarFuncao(); 
console.dir(funcao); 