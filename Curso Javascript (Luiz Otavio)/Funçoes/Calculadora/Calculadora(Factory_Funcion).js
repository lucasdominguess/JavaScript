function criaCalculadora() { 
    return {
    display: document.querySelector('.display'),
    //btnClear: document.querySelector('.btn-clear'),    
    
    inicia() { //Inicia o click botoes
            this.cliqueBotoes();
            this.pressionaEnter();  
    },
    pressionaEnter() { //nao esta funcionando
        this.display.addEventListener('keyup', e => { 
            if (e.keyCode === 13) {
              this.realizaConta();
        }

        });
    },

    realizaConta() { 
        let conta = this.display.value ; 
        try { 
            conta =eval(conta) ; 
            if (!conta) { 
                alert('Conta Inválida') ; 
                return ; 
            }
            this.display.value = conta ; 
        } catch(e) { 
            alert('Conta Inválida') ; 
            return ; 
        }
    },

    clearDisplay()  { //Resposavel de limpar o display 
        this.display.value = ' '; //dando o valor ao display 
    },
    btnDeletar_um() {  //deletar apenas um 
        this.display.value = this.display.value.slice(0, -1);
    },

    //função principal
    cliqueBotoes(){   //Função Responsavel por pegar o evento click
        document.addEventListener('click' , e => { // pegando evento click no documento | e=evento
            const el = e.target ; //target = possição na pagina onde foi feito o click 

        if(el.classList.contains('btn-num')) { //verificando se a var el contem o valor "btc-num"(valor do botao)
            this.btnNumDisplay(el.innerText); //pegando valor do Numero/item la no doc html mandando para func display
        }
        if(el.classList.contains('btn-clear')) {  //verifica se el tem o valor do botao clear
            this.clearDisplay();
        }
        if(el.classList.contains('btn-del'))
        this.btnDeletar_um();

        if(el.classList.contains('btn-eq'))
            this.realizaConta();

        }); //.bind(this)); //resolvendo problema do this document 
        
      

    },
    btnNumDisplay(valor) { //Função responsavel por pegar valor do botao e mandar para o display
        this.display.value += valor ; //concatenando valores digitados ao display 
        this.display.focus();
    }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia()