//Funcao construtora -> objetos 
//funcao fabrica -> objetos 
//Construtora -> Pessoa (new) //Molde para construção de objeto

function Pessoa(nome , sobrenome) { 
    this.nome = nome; 
    this.sobre = sobrenome ; 
}
const p1 = new Pessoa ('Luiz' , 'Otavio'); 
const p2 = new Pessoa ('Maria' , 'Oliveira'); 

