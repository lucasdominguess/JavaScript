//Herança "extends" herdando atributos de uma classe ja existente 

class Professor extends Pessoa2 {  
  codigo :number //codigo da escola . atributo proprio da class professor

  constructor (nome:string,idade:number,cpf:string ,codigo:number){ 
    super(nome,idade,cpf);  //super usado para herdar atributos da class pai
    this.codigo = codigo ; 
  }
}


//polimorfismo 
lucas instanceof Pessoa ; // true 
lucas instanceof Professor; //False 
rafael instanceof Pessoa //true 
rafael instanceof Professor //true 