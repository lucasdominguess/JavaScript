//Atribuição via desestruturação em arrays

//adcionando primeiros numeros e o restante do array em resto
const numeros = [ 1000 , 2000 , 3000 , 4000,5000 ,6000 ,7000 ,8000 , 9000]; 
const [primeiroNumero , segundoNumero , ...resto ] = numeros 


console.log (primeiroNumero,segundoNumero ,resto ) 
