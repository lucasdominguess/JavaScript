
//forEach  
//é como se fosse um for , usado mais em funcao de alta ordem 
const numeros = [2,5,8,9,];

function imprimirElemento(elemento) { 
    console.log(elemento);
}

// numeros.forEach(imprimirElemento);

//forma mais simplificada 

numeros.forEach((elemento) => { 
    console.log(elemento)
});
//modificando um pouco com f-string
numeros.forEach((elemento) => { 
    console.log(`numero ${elemento}`)
});

console.clear();
//recebendo um terceiro parametro 
                //foreeach acessa o valor , indice , e ate o array completo no parametro
numeros.forEach((valor,indice,arraycompleto) =>{
    console.log(indice,valor ,arraycompleto);
});