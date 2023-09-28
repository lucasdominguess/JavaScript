
//criando elementos na pag Html 

//pegar id ou class do elemento expecifico para fazer a modificação
const listaUl = document.querySelector('ul#lista') // ul com id lista selecionada
const listali= document.querySelectorAll('ul > li'); // pegando li dentro do ul 

const novaTagli = document.createElement('li') ; //Criando elemento Li 

novaTagli.textContent = "segundo item"; //Adcionando um texto na tag li 
// listaUl.appendChild(novaTagli) //adcionando conteudo no final 

//adcionar um conteudo num lugar expecifico 
listaUl.insertBefore(novaTagli,listali[1]) //inserir conteudo antes de [1] 
                                            //'Novo item vai ficar na posição 2' 