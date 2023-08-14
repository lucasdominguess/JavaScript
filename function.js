function valorAcordo (valorInicial) {
    let part_adv = valorInicial*30/100 ; 
    let valor_final = valorInicial-part_adv ; 
    let mostralinha = 10 * ('---')
    return console.log(`${mostralinha} 
    o valor do acordo R$${valorInicial} o valor do advogado R$${part_adv} O valor final sera de R$${valor_final}`)

}






valorAcordo(25000)