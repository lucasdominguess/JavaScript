//Usado como se fosse um if else ; 
const data = new Date('2023-05-21 00:00:00');
let diasemana =data.getDay();

let diaSemanaTexto ; 

switch (diasemana) { 
case 0 : 
    diaSemanaTexto = 'Domingo'
    break;

case 1 : 
diaSemanaTexto= 'segunda'
    break;

case 2 : 
    diaSemanaTexto = 'Terca'
    break;

}
console.log(diaSemanaTexto)