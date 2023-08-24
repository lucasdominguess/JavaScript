class ValidaFormulario {
  constructor() {
    // Obtém o elemento do formulário com a classe "formulario"
    this.formulario = document.querySelector('.formulario');
    // Chama o método para configurar os eventos do formulário
    this.eventos();
  }

  eventos() {
    // Adiciona um ouvinte de evento para o evento de envio do formulário
    this.formulario.addEventListener('submit', e => {
      // Quando o formulário é enviado, chama o método handleSubmit
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) { // Impede o envio padrão do formulário
    e.preventDefault(); // Impede o envio padrão do formulário

    // Verifica se os campos do formulário são válidos
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    // Se todos os campos forem válidos, exibe um alerta e envia o formulário
    if (camposValidos && senhasValidas) {
      alert('Formulário enviado.');
      this.formulario.submit();
    }
  }

  senhasSaoValidas() {
    // Inicializa a validação como verdadeira
    let valid = true;

    // Obtém os campos de senha e repetir senha do formulário
    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    // Verifica se as senhas coincidem
    if (senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.');
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.');
    }

    // Verifica o comprimento da senha
    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.');
    }

    return valid;
  }

  camposSaoValidos() {
    // Inicializa a validação como verdadeira
    let valid = true;

    // Remove mensagens de erro existentes
    for (let errorText of this.formulario.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    // Itera sobre os campos a serem validados
    for (let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerText;

      // Verifica se o campo está vazio
      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      // Verifica campos especiais como CPF e usuário
      if (campo.classList.contains('cpf')) {
        if (!this.validaCPF(campo)) valid = false;
      }

      if (campo.classList.contains('usuario')) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    }

    return valid;
  }

  validaUsuario(campo) {
    // Obtém o valor do campo de usuário
    const usuario = campo.value;
    let valid = true;

    // Verifica o comprimento do nome de usuário
    if (usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
      valid = false;
    }

    // Verifica se o nome de usuário contém apenas letras e números
    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números.');
      valid = false;
    }

    return valid;
  }

  validaCPF(campo) {
    // Cria uma instância de ValidaCPF com o valor do campo CPF
    const cpf = new ValidaCPF(campo.value);

    // Verifica se o CPF é válido usando o método "valida"
    if (!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido.');
      return false;
    }

    return true;
  }

  criaErro(campo, msg) {
    // Cria um elemento <div> para exibir a mensagem de erro
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    
    // Insere a mensagem de erro logo após o campo de entrada
    campo.insertAdjacentElement('afterend', div);
  }
}

// Cria uma instância da classe ValidaFormulario quando o script é executado
const valida = new ValidaFormulario();
