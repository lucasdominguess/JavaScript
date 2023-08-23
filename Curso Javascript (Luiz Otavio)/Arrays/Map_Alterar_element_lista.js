//Usando map para dobrar numeros 
const numeros =[5,50,80,1,2,3,5,8,7,11,15,22,27] 
const numEmDobro = numeros.map( valor => valor*2)

//console.log(numEmDobro)

// exemplo em objetos 

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
//Retornando apenas Os valores da chave nome
const nomes = pessoas.map (valor =>  {
    return valor.nome }) //com return
//console.log (nomes)

//Retornando apenas Os valores da chave nome || Mesmo exemplo Mas sem 'Return'
const nomes1 = pessoas.map (valor =>  valor.nome ) //com return

//console.log (nomes1)

//Retornando a chave 'Idade' e tbm seus valores 
const idades = pessoas.map (valor =>  ({idade:  valor.idade })); //nao necessario return

//console.log (idades)

const chaveId = pessoas.map (valor => { 
    return 'Idchaves: ' + valor.nome 
})
console.log (chaveId)