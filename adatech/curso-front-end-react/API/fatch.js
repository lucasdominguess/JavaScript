//fetch Api  //ultilizando api buscador de cep 

//ultilizando then/catch
fetch('https://viacep.com.br/ws/01001000/json/').then((resposta)=>{
   endereco = resposta.json().then((dados)=> console.log(dados))


}).catch((erro) => { 
    console.log('deu erro',erro);
});

//ultilizando async/await 

async function obterCep() { 
    const resposta = await fetch('https://viacep.com.br/ws/04895800/json/');
    const dados = await resposta.json();

    console.log(dados);
}; 

obterCep();