class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome ;
        this.ligado = false ;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + ' ja ligado');
            return ;
        }
        this.ligado = true
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + " ja Desligado") ;
            return;
        }
        this.ligado = false ;
    }
}

const d1 =new DispositivoEletronico('Smartfone')
// d1.ligar() //ligando dispositivo
// d1.ligar() //aviso dispositivo ja ligado
// console.log(d1)
// d1.desligar()
// d1.desligar()
// console.log(d1)

///Criando class e herdando atributos

// class Smartfone extends DispositivoEletronico {} //caso queira passar heranca igual a de dispositivos

// const s1 = new Smartfone('Galaxy s10')
// s1.ligar()
// s1.ligar()
// console.log(s1)

//Exemplo caso queira passar os mesmos atributos e mais alguns outros personalizados 

class Smartfone extends DispositivoEletronico { 
    constructor(nome,cor) { 
        super(nome); //Usado para puxar todos os parametros ja existentes na class original
        this.cor = cor 
    }
}

const s1 = new Smartfone('Galaxy s10 plus','Preto')
s1.ligar()
s1.ligar()
console.log(s1)
