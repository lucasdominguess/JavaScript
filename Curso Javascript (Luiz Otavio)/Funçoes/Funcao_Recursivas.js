//Funcao recursiva 
//quando ela mesma se chama de volta , parecido com while vc precisa por um limitador /contador 
//para evitar loop infinito



function recursiva(max) { 
    if (max >= 10 ) return;
    max++ ; 
    console.log(max); 
    recursiva(max);
}

recursiva(0)