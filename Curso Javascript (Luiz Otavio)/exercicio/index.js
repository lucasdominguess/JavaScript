//resolvendo exercicio formulario 

function meuEscopo () { 
    const form = document.querySelector('.form');
    const resultado =document.querySelector('.resultado');
       
    
    function recebeEventoForm(evento) { 
        evento.preventDefault(); 
      
            const nome = form.querySelector('.nome');
            const sobrenome = form.querySelector('.sobrenome');
            const idade = form.querySelector('.idade');
            const pessoas = [];
            pessoas.push({
                nome: nome.value ,
                sobrenome: sobrenome.value,
                idade: idade.value, 
            })
    
    
            console.log(pessoas);
    
            resultado.innerHTML+= `<p> Nome : ${nome.value} <br> Sobrenome: ${sobrenome.value} <br> Idade:  ${idade.value} </p>` ;   
          
        }
    
       form.addEventListener('submit',recebeEventoForm);
}
    
meuEscopo()   




// function cadastrarFuncionario (nome,sobrenome,idade) {
//     return  {
//         nome ,  sobrenome ,idade , 
       
        
//      }

// }


// let nome1 = document.getElementById('nome')
// let sobrenome1 = document.getElementById('sobrenome')
// let idade1 = document.getElementById('idade')

// cadastro1 = cadastrarFuncionario (nome1,sobrenome1,idade1)

// console.log(cadastro1)