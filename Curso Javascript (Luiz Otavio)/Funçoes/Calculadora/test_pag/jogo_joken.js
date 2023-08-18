function Jogo() { 
    this.display = document.querySelector('.display');

    this.inicia = () => { 
        this.cliqueBotoes();
       // this.pressionaEnter();
    };
    this.cliqueBotoes = () => { 
        document.addEventListener('click', event =>  { 
          const el = event.target; 

        if (el.classList.contains('opc1'))this.addopcaoDisplay(el);
        if (el.classList.contains('opc2'))this.addopcaoDisplay(el);
        if (el.classList.contains('opc3'))this.addopcaoDisplay(el);
        if (el.classList.contains('limpar'))this.clear();
        
        
         });
        };

    this.addopcaoDisplay = el => { 
        this.display.value += el.innerText;
        this.display.focus();
    };
    this.clear = () => this.display.value = '';
}

const jogo = new Jogo();
jogo.inicia();










