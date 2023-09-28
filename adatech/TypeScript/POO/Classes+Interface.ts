
interface Ipessoa { 
    nome : string ; 
    idade : number ; 
  

    // comer:() => void ; 
};


class Pessoa2  implements Ipessoa{ 
    // atributos : caracteristicas
    nome : string ; 
    idade : number; 
    

 private _cpf : string ; //readonly "Apenas ler" /Private (torna privado);
                        //sua alteração nao é possivel fora da classe


    
    //metodos : ação (funçoes)
    //Metodo construtor 
    constructor(nome: string , idade: number , cpf: string) { //função construtora
        this.nome = nome ; 
        this.idade = idade ; 
        this._cpf = cpf ;
    }
    dormir() { 
        console.log("Durmindo ...")
    }
    //Acessor : getter  Usado para pegar/vizualizar o valor de cpf 
    get cpf(): string { 
        return this._cpf
    }
    //acessor : setter 'setar' : usado para alterar o valor de cpf
    set cpf(newCpf:string){
        if (newCpf.length !== 14){ 
            //lancando um erro! 
            throw new Error("CPF length is incorrect!")
        }
        this._cpf = newCpf ; 
    }    
};
    //Criando / Instanciando Uma pessoa (individuo/objeto) a partir da definição da classe Pessoa 
    const rafael = new Pessoa2 ('Lucas',30,"414.558.058-44");
    
    
    