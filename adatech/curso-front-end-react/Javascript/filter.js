//filter() cria um novo array com elementos que atendem a uma condição especifica 

const produtos = [
    { nome: 'Produto 1', preco: 19.99, tipo: 'Eletrônicos' },
    { nome: 'Produto 2', preco: 29.99, tipo: 'Moda' },
    { nome: 'Produto 3', preco: 9.99, tipo: 'Alimentos' },
    { nome: 'Produto 4', preco: 49.99, tipo: 'Eletrônicos' },
    { nome: 'Produto 5', preco: 14.99, tipo: 'Moda' },
    { nome: 'Produto 6', preco: 7.99, tipo: 'Alimentos' },
    { nome: 'Produto 7', preco: 39.99, tipo: 'Eletrônicos' }
  ];

const produtotop = produtos.filter((produto) => 
    produto.preco < 50 && produto.tipo === "Eletrônicos"); 

console.log(produtotop)    
