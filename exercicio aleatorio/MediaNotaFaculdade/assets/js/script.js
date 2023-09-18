
function notaFaculdade() { 
    document.getElementById('btn-enviar').addEventListener('click' , (e) => {
        e.preventDefault(); 

        const nt1 = parseFloat (document.getElementById('nota1').value);
        const nt2 = parseFloat (document.getElementById('nota2').value);
        const nt3 = parseFloat (document.getElementById('nota3').value);
        const nt4 = parseFloat (document.getElementById('nota4').value);
        const nt5 = parseFloat (document.getElementById('nota5').value);
       
        nts_ativ = nt1+nt2+nt3+nt4 ;
        convert_nt = nts_ativ / 4 *0.4
        convert_n1 = nt5*0.6
        nota_final = convert_nt+convert_n1

        //modificando resultados
        document.getElementById('resultadoSomaA1').innerHTML= nts_ativ ;
        document.getElementById('resultado-convertA1').innerHTML= `${convert_nt.toFixed(2)}` ;
        document.getElementById('resultado-convertN1').innerHTML= `${convert_n1.toFixed(2)}`;
        document.getElementById('resultado-final').innerHTML=`${nota_final.toFixed(2)}`;
        document.getElementById('resultado-n1').innerHTML=`${nt5.toFixed(2)}`;

        const situacao = document.getElementById('situacao');
        if (nota_final >= 6) {
          situacao.innerHTML = 'Aprovado';
          situacao.classList.remove('texto-vermelho');
        } else {
          situacao.innerHTML = 'Reprovado';
          situacao.classList.add('texto-vermelho');
        }
    //Sessao Exibir/Ocultar sessoes resultados e detalhes 
    const btn_detalhes = document.getElementById('btn-detalhes');
    const resultado  = document.getElementById('sessao-resultado');
    
    btn_detalhes.classList.add('ativo');
    btn_detalhes.classList.remove('desativado') ;
    resultado.classList.add('ativo');
    resultado.classList.remove('desativado');


    //evento clicar no botao mostrar detalhes 
    btn_detalhes.addEventListener('click', () => {
    const detalhes = document.getElementById('sessao-detalhes'); 
       

    if (detalhes.classList.contains('ativo')){
        detalhes.classList.add('desativado');
        detalhes.classList.remove('ativo');
        btn_detalhes.textContent= 'Mostrar detalhes';
    
    } else {   
       
        detalhes.classList.remove('desativado')
        detalhes.classList.add('ativo')
        btn_detalhes.textContent= ' Ocultar detalhes';
    }
});

//sessao limpar campos 
const limpar_detalhes = document.getElementById('reset').addEventListener('click', () => { 
    
    //modificando resultados
    document.getElementById('resultado').innerHTML= 0;
    document.getElementById('resultado-convert').innerHTML= 0 ;
    document.getElementById('resultado-convertn1').innerHTML= 0;
    document.getElementById('resultado-final').innerHTML=0;

    //ocultando sessoes botao | resultado | detalhes 

    const detalhes = document.getElementById('detalhes'); // Selecione o elemento detalhes dentro deste escopo
    const btn_detalhes = document.getElementById('btn-detalhes');
    
    detalhes.classList.remove('ativo');
    detalhes.classList.add('desativado');
     

    resultado.classList.remove('ativo');
    resultado.classList.add('desativado');
    
    btn_detalhes.classList.remove('ativo') ;
    btn_detalhes.classList.add('desativado');
    btn_detalhes.textContent= ' Exibir detalhes';

    
});

});
}
notaFaculdade();