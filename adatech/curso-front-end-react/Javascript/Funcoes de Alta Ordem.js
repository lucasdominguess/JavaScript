
//funcition funcao de alta ordem 
//funcao que recebe outra funcao como parametro         

const somar = (num1,num2) => num1 + num2 ; 
const subtrair = (num1,num2) => num1-num2 ; 
const multiplicar = (num1,num2) => num1*num2 ; 
const dividir = (num1,num2) => num1/num2 ; 

//operação funcao que realiza a operação entreo os dois numeros 
// ou seja , ela precisa ser uma função que recebe dois numeros

const calcular =(num1 , num2 ,funcaodaoperação) => funcaodaoperação(num1,num2); 
calcular(10,5,somar);
const resultado = calcular(10,5,somar);
console.log(resultado)