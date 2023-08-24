class Pessoa { 
    constructor (nome , sobrenome) { 
        this.nome = nome ; 
        this.sobrenome = sobrenome ;
    }

    falar(){ 
        console.log(`${this.nome} Esta falando.`);
    }
}

//Mesmo exemplo usando funcoes construtora 

function Pessoa2(nome,sobrenome) { 
    this.nome = nome ; 
    this.sobrenome = sobrenome ; 
}
Pessoa2.prototype.falar = function() { 
    console.log (`${this.nome} Esta falando `)

}

const ps1 = new Pessoa('Lucas','Domingues') 
const ps2 = new Pessoa2('Jenifer', 'gomes')


ps1.falar()
ps2.falar()