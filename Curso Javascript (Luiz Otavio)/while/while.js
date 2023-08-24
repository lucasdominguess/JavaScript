//While . laço de repetição simples

let i = 0 

while ( i <= 10 ) { 
    console.log(i)
    i++ ; 
}
console.log ('Fim do laço while Simples')

//exemplo em string
const nome = 'lucas joaquim domingues'
let I = 0 ; //variavel de controle . 

while (I < nome.length) { 
    console.log(nome[I]); //exibi letra por letra ate o fim da string 
    I++; //acrecentando +1 no valor de I . para evitar loop infinito
}

//exemplo de como exibir o indice de cada letra 
const nome2 = 'lucas joaquim domingues'
let I2 = 0 ; //variavel de controle . 

while (I2 < nome2.length) { 
    console.log(nome2[I2],I2); //exibi letra por letra , e dps o indice por indice 
    I2++; //acrecentando +1 no valor de I . para evitar loop infinito
}

function random(min-max) { 
    const r = Math.random() * (max - min ) + min ; 
    return Math.floor(r);
}
console.log(r)