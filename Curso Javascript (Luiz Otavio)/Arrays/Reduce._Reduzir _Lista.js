const numeros =[5,50,80,1,2,3,5,8,7,11,15,22,27]

const total = numeros.reduce(function(acumulador , valor , indice , array ) { 
    if (valor %2 === 0)acumulador.push(valor);
    return acumulador; 
},[]);
console.log(total)

const pessoas = [ 
    {nome:'luiz' , idade : 21},
    {nome:'carlos' , idade : 69},
    {nome:'alexandre' , idade : 45},
    {nome:'maisa' , idade : 59},
    {nome:'juliana' , idade : 21},
    {nome:'fernanda' , idade : 62},
    {nome: 'julia' , idade :36},
    {nome: 'lucas' , idade :36}
    
]
const maisvelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador ; 
    return valor;
}); 
console.log(maisvelha)