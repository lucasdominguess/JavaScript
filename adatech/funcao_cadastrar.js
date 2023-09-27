function cadastrar (nome,idade,estado,profisao) { 
    cadastro = `Nome: ${nome} idade: ${idade} estado: ${estado} Profisão: ${profisao}`
    funcionarios = []
    funcionarios.push(cadastro)

    return funcionarios 
    }
// const variavel = cadastrar('paulo',20,'sao paulo','pedreiro')
// console.log(variavel)
cadastrar('paulo',20,'sao paulo','pedreiro')

cadastrar('cesar',20,'sao paulo','pedreiro')
console.log(funcionarios)
console.log(funcionarios[0])