//                -5       -4      -3        -3       -1 
//                 0        1       2         3        4 
const nomes = ['Maria' , 'Joao','Eduardo','Gabriel','Julia']

        //                          Adc elementos
//splice (Indice atual , delete , elem1 , elem3 , elem3) 

nomes.splice(1,0,'lucas') //adc no indice 1 , deletando 0 , adc lucas 

// console.log(nomes)

nomes.splice(0,1) // selecionando indice 'maria' , deletando somente 1
console.log(nomes)