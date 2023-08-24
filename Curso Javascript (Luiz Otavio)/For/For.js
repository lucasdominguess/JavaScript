
//for classico -geralmente com iteraveis (arrays ou strings) 
//For in - Retorna o indice pu chave (string , arrays ou objetos)
//For of - Retorna o valor em si (iteraveis , arrays ou string)


// tipo mais simples de for 
for (let i = 0 ; i<= 5 ; i++) { 
    console.log(i)
}

//iterando e exibindo letra por letra de 2 formas 
let timao = 'corinthias'

for (let i = 0 ; i < timao.length ; i++) {
    console.log(timao[i])
}
//ou use in 
for (let i in timao) { 
    console.log(timao[i]);
}


// Como exibir lista com o seu respectivo indice 
let time = ['corinthias ', 'palmeiras' , 'flamengo' , 'santos ', 'sao paulo']

for (let i = 0 ; i < time.length ; i++) {
    console.log(i,time[i])
}

//For in -> le os indices ou chaves do objeto 
//                 0       1       2
const frutas = [ 'Pera', 'Maça', 'Uva'] 
for (let index in frutas) { 
    console.log(frutas[index]);
}
//acessando as chaves do objeto pessoa = Nome /sobrenome / idade  
const pessoa = { 
    nome : 'luiz',
    sobrenome : 'Otavio',
    idade : 17
}
for (let chaves in pessoa) { 
    console.log(chaves)
    console.log(chaves , pessoa[chaves])  // pessoa[chaves] pega o valor da chave = luiz otavio 17
}