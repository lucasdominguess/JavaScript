///Soma de todos os numeros pares

const numeros =[5,50,80,1,2,3,5,8,7,11,15,22,27] 

const numpares = numeros.filter(function(valor) { 
    return valor % 2===0 ; 
}).map(function(valor) { 
    return valor*2 ; 

}).reduce(function(ac,valor) {
    return ac + valor ;
});
console.log(numpares)


// a mesma operaçao com a opçao 
//Arrow function 

const numeros2 =[5,50,80,1,2,3,5,8,7,11,15,22,27] 

const numpares2 = numeros2
.filter(valor=> valor % 2===0 ) //somente pares
.map(valor => valor*2)  //dobrando o valor 
.reduce((ac,valor) => ac + valor); //somando valores
console.log(numpares2)