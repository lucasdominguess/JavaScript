//Filter , map , reduce

//Retorne os numeros maiores que 10 
const numeros =[5,50,80,1,2,3,5,8,7,11,15,22,27] 

function callbackFilter(valor,indice,array) {
    if (valor > 10 ) { 
        return true   //de forma mais simplificada apague todo if e 
                      //no return use direto 'return valor >10'  
    }else { 
        return false 
    }
}
const numerosfiltrados = numeros.filter(callbackFilter);
 

console.log(numerosfiltrados)

// Retorne as pessoas cujo nome termina com tantas letras 
const pessoas = [ 
    {nome:'luiz' , idade : 21},
    {nome:'carlos' , idade : 55},
    {nome:'alexandre' , idade : 45},
    {nome:'maisa' , idade : 59},
    {nome:'juliana' , idade : 21},
    {nome:'fernanda' , idade : 62},
    {nome: 'julia' , idade :36},
    {nome: 'lucas' , idade :36}
    
]

//Modo mais antigo passando Funcion 
const pessoacomNomeGrande2 = pessoas.filter(function(obj) { 
    return obj.nome.length>=6 ; 
});
//Mesmo exemplo mas agora ultilizando Arrow function (modo mais atual )
const pessoacomNomeGrande = pessoas.filter(obj => obj.nome.length>=6 );
console.log(pessoacomNomeGrande)

const pessoamaiorde50 = pessoas.filter(obj => obj.idade >= 50 );
console.log (pessoamaiorde50)

//verificando se na lista pessoa contem nomes que terminam com 'a'
const pessoaTermina_A = pessoas.filter(obj => obj.nome.slice(-1) === 'a'); //Funciona 
const pessoaTermina_A2 = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a')); //Recomendado Usar assim 

console.log(pessoaTermina_A)
console.log(pessoaTermina_A2)

//////////////////////////////////////////////////////////////////////////////////////

//Usando filter em lista de numeros 
lista =[15,27,23,19,1,1,20,4,5,12,25,20,27,9,27,9,7,22,4,15,20,7,7,3,14,26,6,29,24,28,25,23,28,19,14,1,20,19,19,11,8,12,13,17,13,2,2,29,14,11,4,28,16,21,3,4,29,15]

//Numeros maiores ou igual que 20
const numeroMaior = lista.filter(num => num >= 20); 
console.log (`Numeros maiores que 20 :  ${numeroMaior}`)

// Verifica se o Numero 15 foi digitado e qts vezes ele aparece
const numeroIgual15 =lista.filter(num => num === 15 )
console.log(numeroIgual15)
console.log(numeroIgual15.length)
