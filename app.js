// server.js
const express = require('express');
const cors = require('cors');
const usuariosRoutes = require('./src/routes/usuariosRoutes');
const usuariosPontosRoutes = require('./src/routes/userPontosRoutes');
const path = require('path');

const app = express();

// Configuração de CORS abrangente
app.use(cors({
  origin: [
    'https://full-render-vjr5.onrender.com', // Seu site no Netlify
    'http://localhost:5173',         // Desenvolvimento local
    'http://localhost:3000',         // Outras origens possíveis
    '*'  // Use com cautela, prefira especificar origens
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.static(path.join(__dirname, 'public')));

// Usando as rotas para usuarios
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/usuariosPontos', usuariosPontosRoutes);

app.use('/', (req, res) =>{
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciando o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});