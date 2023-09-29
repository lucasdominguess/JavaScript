//reduce() acumula valores de um array em um unico resultado

const numeros = [1,2,3,4,5]; 
const soma = numeros.reduce((somatodos , elemento,index,arrayCompleto) => { 
    return elemento + somatodos ; 
},0); //valor do acumulador somatodos

console.log(soma)

//somando somente pares 
const somapares = numeros.reduce((somatodos , elemento ) => {
    if (elemento % 2 === 0){ 
      return  elemento + somatodos ;
    }else { 
        return somatodos
    }
    
},0);
console.clear();
console.log (somapares);

// total a apgar 

const produtos = [
    { nome: 'Produto 1', preco: 19.99, tipo: 'Eletrônicos' },
    { nome: 'Produto 2', preco: 29.99, tipo: 'Moda' },
    { nome: 'Produto 3', preco: 9.99, tipo: 'Alimentos' },
    { nome: 'Produto 4', preco: 49.99, tipo: 'Eletrônicos' },
    { nome: 'Produto 5', preco: 14.99, tipo: 'Moda' },
    { nome: 'Produto 6', preco: 7.99, tipo: 'Alimentos' },
    { nome: 'Produto 7', preco: 39.99, tipo: 'Eletrônicos' }
  ];


const total = produtos.reduce((valortotal,valor) => { 
    return valor.preco + valortotal },0); 

console.log(total)