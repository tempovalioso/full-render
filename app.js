// server.js
const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./src/routes/usuariosRoutes');
const usuariosPontosRoutes = require('./src/routes/userPontosRoutes');
const path = require('path');

const app = express();

// Middleware de logging (útil para depuração no Render)
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Configuração de CORS mais segura
app.use(cors({
  origin: [
    'https://full-render-vjr5.onrender.com', 
    'http://localhost:5173',
    'http://localhost:3000',
    /^https:\/\/.*\.onrender\.com$/ // Permite subdomínios do Render
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Parse JSON e formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rotas para a API
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/usuariosPontos', usuariosPontosRoutes);

// Rota para servir o frontend
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Tratamento de erros global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Tratamento de encerramento gracioso
process.on('SIGINT', () => {
  console.log('Servidor sendo encerrado...');
  process.exit(0);
});