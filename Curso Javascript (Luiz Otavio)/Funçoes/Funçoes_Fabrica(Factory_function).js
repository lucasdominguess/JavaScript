//Exemplo simples de funçoes 
// function criaPessoa (nome,sobrenome) { 
//     return{ 
//         nome , sobrenome
//     };
// }
// const ps1 = criaPessoa('lucas','domingues') 
// console.log(ps1)


//exemplo : fabrica de funçoes //factory function 
function criaPessoa (nome,sobrenome,idade ,altura,peso) { 
    return{ 
        nome , //this se refere a quem chama ps1 ou ps2 no exemplo abaixo
        sobrenome , 
        idade ,
        altura ,
        peso ,
        fala : function(assunto) {    // this usado para acessar algo do escopo quando ele nao é mencionado 
            return `${this.nome} ${sobrenome} tem ${idade} e esta ${assunto}`
        },
        // usar get = Getter para usar funcao como um metodo ex: ps1.imc "sem a necessidade de ()"
        imc(){
            const indice = this.peso / (this.altura ** 2) ;
            return indice.toFixed(2);
        }
    };
} 
const ps1 = criaPessoa('lucas','domingues',20,1.8,80) ;
console.log(ps1.fala('Falando de JavaScript'))
const ps2 = criaPessoa('Jenifer','domingues',23,1.8,70) 
console.log(ps2.fala('Falando de Python'))
console.log(ps1.imc());
console.log(ps2.imc());