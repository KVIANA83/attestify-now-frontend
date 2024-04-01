document.addEventListener("DOMContentLoaded", function() {
    // Adiciona um ouvinte de evento para o formulário de login
    document.getElementById("login-form").addEventListener("submit", function(event) {
        // Impede o envio padrão do formulário
        event.preventDefault();

        // Obtém os valores dos campos de entrada
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var profile = document.getElementById("profile").value;

        // Cria um objeto com os dados do formulário
        var data = {
            username: username,
            password: password,
            profile: profile
        };

        // Envia a solicitação POST para o backend
        fetch('http://seu.backend.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao enviar solicitação.');
            }
            return response.json();
        })
        .then(data => {
            // Manipula a resposta do servidor
            console.log(data);
            // Redireciona ou executa outras ações conforme necessário
        })
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
    });
});

/* 
Substitua 'http://seu.backend.com/login' pelo URL real do seu endpoint de login no backend.
Certifique-se de que seu backend está configurado para lidar com solicitações POST na rota '/login'.
A resposta do servidor é tratada no segundo .then, onde você pode redirecionar o usuário ou executar outras ações com base na resposta recebida do backend. 
Certifique-se de ajustar conforme necessário para o seu aplicativo específico.
*/