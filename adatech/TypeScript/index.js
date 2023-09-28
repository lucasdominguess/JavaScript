//Classe : abstração 
//Definindo a abistração de uma pessoa 
//class serve para reaproveitar molde de codigo .
// podendo criar varios obj a partir das mesmas caracteristicas 
var Pessoa = /** @class */ (function () {
    //metodos : ação (funçoes)
    //Metodo construtor 
    function Pessoa(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    Pessoa.prototype.dormir = function () {
        console.log("Durmindo ...");
    };
    return Pessoa;
}());
//Criando / Instanciando Uma pessoa (individuo/objeto) a partir da definição da classe Pessoa 
var lucas = new Pessoa('Lucas', 30, 1.67);
console.log(lucas);
