

function random(min , max) { 
    const r = Math.random() * (max - min ) + min ; 
    return Math.floor(r);
}
rand = random(0,1000)

//console.log(rand)

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
const chaveId = pessoas.map (valor => { 
    rand = random(100,1000)
    return `ID ${rand} : ` + valor.nome 
})
console.log (chaveId)

console.log(pessoas)