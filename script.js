$(document).ready(function () {
    // Aplicar máscaras
    $('#telefone').mask('(00) 0000-0000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    // Configurar validação usando o plugin jQuery Validate
    $('#cadastroForm').validate({
        rules: {
            nomeCompleto: {
                required: true,
            },
            email: {
                required: true,
                email: true,
            },
            telefone: {
                required: true,
            },
            cpf: {
                required: true,
            },
            cep: {
                required: true,
            },
        },
        messages: {
            nomeCompleto: "Insira seu nome completo",
            email: "Insira um endereço de e-mail válido",
            telefone: "Insira um número de telefone válido",
            cpf: "Insira um CPF válido",
            cep: "Insira um CEP válido",
        },
        submitHandler: function (form, event) {
            event.preventDefault(); // Impede o comportamento padrão de recarregar a página

            // Sua lógica para o envio do formulário (pode usar Ajax, etc.)
            alert('Formulário enviado com sucesso!');

            // Limpar os campos do formulário
            form.reset();
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();

            // Mostrar mensagem de verificação das informações
            alert(`Verifique as informações e preencha os campos corretamente (${camposIncorretos} campos incorretos).`);
        },
    });
});

