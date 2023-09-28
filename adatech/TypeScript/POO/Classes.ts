
//Classe : abstração 
//Definindo a abistração de uma pessoa 

//class serve para reaproveitar molde de codigo .
// podendo criar varios obj a partir das mesmas caracteristicas 

class Pessoa {
// atributos : caracteristicas
nome : string ; 
idade : number; 
altura : number ;

//metodos : ação (funçoes)
//Metodo construtor 
constructor(nome: string , idade: number , altura: number) { //função contrutora
    this.nome = nome ; 
    this.idade = idade ; 
    this.altura = altura; 
}
dormir() { 
    console.log("Durmindo ...")
}

}
//Criando / Instanciando Uma pessoa (individuo/objeto) a partir da definição da classe Pessoa 
const lucas = new Pessoa ('Lucas',30,1.67)

console.log(lucas)
