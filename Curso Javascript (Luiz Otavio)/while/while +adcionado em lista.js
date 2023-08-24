
function random(min , max) { 
    const r = Math.random() * (max - min ) + min ; 
    return Math.floor(r);
}
let lista = []
const min = 1 
const max = 30
let rand = random(min , max)

while (rand !== 10 ) { 
    rand = random(min, max) 
    lista.push(rand) //adcionando valores de tentativas na lista
   
    console.log(rand)

    
   
}

console.log(`Numeros Digitados : ${lista}`)
console.log(`A quantidade de tentativas : ${lista.length}`)

//Numeros maiores ou igual que 20
const numeroMaior = lista.filter(num => num >= 20); 
console.log (`Numeros maiores que 20 ${numeroMaior}`)

// Verifica se o Numero 15 foi digitado e qts vezes ele aparece
const numeroIgual15 =lista.filter(num => num === 15 )
console.log(numeroIgual15)
console.log(numeroIgual15.length)
