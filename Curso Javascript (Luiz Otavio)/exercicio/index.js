//resolvendo exercicio formulario 

function cadastro () { 
    const form = document.querySelector('.form');
    const resultado =document.querySelector('.resultado');
       
    
    function recebeEventoForm(evento) { 
        evento.preventDefault(); 
                                //pegando class dos elementos no html
            const nome = form.querySelector('.nome');
            const sobrenome = form.querySelector('.sobrenome');
            const idade = form.querySelector('.idade');
            const pessoas = []; //arrays vazia para armazenar cadastro
            pessoas.push({ //adcionando dados no array
                nome: nome.value ,
                sobrenome: sobrenome.value, //pegando valor
                idade: idade.value, 
            })
    
    
           // console.log(pessoas);
            
            resultado.innerHTML+= `<p> Nome : ${nome.value} <br> Sobrenome: ${sobrenome.value} <br> Idade:  ${idade.value} </p>` ;   
          
        }
    
       form.addEventListener('submit',recebeEventoForm);
}
    
cadastro()   
