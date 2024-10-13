const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const senha = senhaInput.value;

    if (email === 'exemplo@mail.com' && senha === '123456') {
        alert('Login bem-sucedido!');

        // Aqui você pode exibir a senha e o e-mail da pessoa usando JavaScript
        const senhaExibida = document.createElement('p');
        senhaExibida.textContent = 'Senha: ' + senha;
        const emailExibido = document.createElement('p');
        emailExibido.textContent = 'E-mail: ' + email;
        document.body.appendChild(senhaExibida);
        document.body.appendChild(emailExibido);
    } else {
        alert('Erro no login!');
    }
});