const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Configuração do banco de dados MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',  // Substitua pelo seu usuário MySQL
  password: '123456',  // Substitua pela sua senha MySQL
  database: 'SistemaSaude'
});

connection.connect(err => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL');
});

// Endpoint para criar um novo cliente
app.post('/clientes', (req, res) => {
  const { nome_completo, data_nascimento, genero, cpf, email, cep, numero, complemento } = req.body;
  const query = 'INSERT INTO Clientes (nome_completo, data_nascimento, genero, cpf, email, cep, numero, complemento) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
  connection.query(query, [nome_completo, data_nascimento, genero, cpf, email, cep, numero, complemento], (err, results) => {
    if (err) {
      console.error('Erro ao inserir dados no banco de dados: ', err);
      res.status(500).send('Erro ao inserir dados no banco de dados');
      return;
    }
    res.status(201).send('Cliente criado com sucesso');
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
