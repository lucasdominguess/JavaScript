//parametros de uma função : 
//caso a funcao nao tenha parametros predefinidos , o js ultiliza uma variavel oculta: 
//chamada de arguments para salva-las e poder ser acessada depois 
//só funciona nesse modelo de funcao
function funcao () { 
    console.log(arguments[0]); //pegando primeiro indice oculto 
}
funcao('primeiro valor',1,2,23,36)

//Adcionando valor padrao para parametro , para caso ele nao seja passado 
function funcao1(a=4,b =2) { 
    console.log(a+b); 
}
funcao1(5) //use undefined como parametro para forçar a funcao a usar padrao predefinido como argumento 