// Defina a URL da API usando variável de ambiente
const API_URL = import.meta.env.VITE_API_URL || 'https://seu-backend.onrender.com';

const formCadastro = document.getElementById('formCadastro');
const usuarioName = document.getElementById('txtUsuario');
const usuarioEmail = document.getElementById('txtEmail');
const usuarioSenha = document.getElementById('password');
const modal = document.getElementById('modal');
const mHeader = document.getElementById('mHeader');
const mBody = document.getElementById('mBody');
const fecharBtn = document.getElementById('fecharBtn');
const ms = document.getElementById('modalShadow');

formCadastro.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!usuarioName.value.trim()) {
        ativarModal("Erro!", "Por favor, preencha o campo de usuário!", "erro");
        return;
    }
    if (!usuarioEmail.value.trim()) {
        ativarModal("Erro!", "Por favor, preencha o campo de email!", "erro");
        return;
    }
    if (!usuarioSenha.value.trim()) {
        ativarModal("Erro!", "Por favor, preencha o campo de senha!", "erro");
        return;
    }

    const novoUsuario = {
        usuario: usuarioName.value,
        email: usuarioEmail.value,
        senha: usuarioSenha.value
    };

    try {
        console.log('Enviando para:', `${API_URL}/api/usuarios`);
        const response = await fetch(`${API_URL}/api/usuarios`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                // Adicione headers de CORS se necessário
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(novoUsuario)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao cadastrar usuário');
        }

        const data = await response.json();
        
        // Exibir modal de sucesso
        ativarModal("Sucesso!", "Cadastro realizado com sucesso!", "normal");

        // Limpar o formulário após o cadastro
        formCadastro.reset();

        // Redirecionar para a página de login após fechar o modal
        fecharBtn.addEventListener('click', () => {
            window.location.href = "../Login/login.html";
        });
    } catch (error) {
        console.error('Erro detalhado:', error);
        ativarModal("Erro!", error.message || "Erro ao realizar cadastro!", "erro");
    }
});