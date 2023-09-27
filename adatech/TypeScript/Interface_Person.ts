interface person { 
    nome : string , 
    idade : number , 
    profissao? : string ,  //usando o ? a opção profisao nao é obrigatoria
    altura : number ,
}

const pessoa : person = { 
    nome: 'lucas' , 
    idade : 30 , 
    profissao : 'desenvolvedor' , 
    altura : 1.67
}
console.log()

type person2 ={  // outro modo de criar modulagem .
    nome : string , 
    idade : number , 
    profissao? : string ,  //usando o ? a opção profisao nao é obrigatoria
    altura : number ,
}