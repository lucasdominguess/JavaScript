//definiçaoes de função 

function saldação() { 
    console.log ("Ola seja bem vindo ")
}

saldação()
//Como enviar parametros para as funçoes? 
    function bemvindo(nome) { 
        console.log(`ola,${nome} seja bem vindo`)
    }


//segundo parametro para funcao (caso nao seja passado vc pode forçar uma pre seleçao )

function bemvindo2(nome,curso='javaScript') { 
    console.log(`ola,${nome} seja bem vindo ao curso de ${curso}`)
}

console.clear()// limpar conteudo do terminal
bemvindo2('lucas',"python")

//retorno da função 
        function soma (numero1,numero2) { 
            return numero1 + numero2 //processamento do resultado 
}           //apos o uso return ela encerra a função , td que vem dpois e ignorado 

const resultado = soma(10,20) // variavel recebe o processamento da função
console.log(resultado) //imprime resultado


function cadastrar (nome,idade,estado,profisao) { 
            cadastro = [
            'nome :'== nome ,
            'idade:'== idade ,
            'Estado:'== estado ,
            'profisão'== profisao ,]
            return cadastro

            }



cadastrar ('paulo',20,'sao paulo','pedreiro')
