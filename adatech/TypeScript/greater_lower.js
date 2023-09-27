"use strict";
function escolhaNum(num1, num2, criterio //3° criterio opcional 
//                                   aceita somente esses 2 valores  
) {
    switch (criterio) {
        case "greater":
            return num1 > num2 ? num1 : num2; //se for maior 
        // retorne num1 do contrario retorne num2
        case "lower":
            return num1 < num2 ? num1 : num2;
        default:
            const numaleatorio = Math.random();
            if (numaleatorio >= 0.5)
                return num1;
            return num2;
    }
}
const numeroEscolhido = escolhaNum(10, 20, "lower");
console.log(numeroEscolhido);
