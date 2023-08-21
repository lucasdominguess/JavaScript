//Operação ternaria 
// (condicao ) ? 'Valor para verdadeiro' : 'Valor para falso' ; 

const pontuacaoUsuario = 1500 ; 
const nivelUsuario = pontuacaoUsuario>= 1000 ? 'Usuario VIP ' : 'Usuario normal';
console.log(nivelUsuario);

//subistituido com uma linha o if else 

if (pontuacaoUsuario >= 1000) { 
    console.log ('Usuario VIP'); 
} else { 
    console.log("Usuario normal")
}