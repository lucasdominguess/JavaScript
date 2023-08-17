//Declaração de função (function hoisting) 
//Isso significa que nesse tipo de declaração vc pode chamar função primeiro , antes no codigo 
//e so depois criar o escopo da função 

falaOi(); //chamando função primeiro

function falaOi() { //função criada depois
    console.log('Oii')
}
//First-class obeject (objetos de primeira classe) 
//function expression // const/variavel que recebe uma função
const souUmDado = function() { 
    console.log ('Sou um dado'); 
}

function executaFuncao(funcao) { //funcao que recebe por parametro outra funcao para executar
    console.log('executando funcao abaixo: ') 
    funcao(); 
}
executaFuncao(souUmDado)

//Arrow function 
const funcaoArrow = () => { 
    console.log('Sou uma arrow function')
}
funcaoArrow()

//funcao dentro de um objeto 
const obj = { 
    falar() { 
        console.log ('Estou falando ...')
    }
}
obj.falar();