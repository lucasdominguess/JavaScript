class ControleRemoto { 
    constructor (tv) { 
        this.tv = tv ; 
        this.volume = 0 ; 
    }
    //Metodo de Instancia
    aumentarVolume() { 
        this.volume+= 2 ; 
    }
    diminuirVolume(){ 
        this.volume-= 2; 
    }
    //Metodo Estatico  //quando o metodo pertence a classe original
    static trocaPilha() { 
        console.log('Pilha trocada')

    }

}
const controle1 = new ControleRemoto('lg')
controle1.aumentarVolume(); 
controle1.aumentarVolume(); 
controle1.aumentarVolume();
console.log(controle1) 
ControleRemoto.trocaPilha();
