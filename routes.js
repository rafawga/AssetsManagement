// Iniciando Route do Express
const express = require('express');
const route = express.Router();
 
const home = require('./src/controllers/home');
// const cadastroCor = require('./src/controllers/cadastroCor');
// const cadastroPesosa = require('./src/controllers/cadastroPessoa');
// const editarPessoa = require('./src/controllers/editarPessoa');

// Importando os Controllers

route.get('/', home.carregarPagina);
route.post('/criarChamado', home.carregarFomrs)
route.post('/addChamado', home.addChamado)
route.post('/limpar', home.limpar)
// route.get('/novaCor', cadastroCor.paginaNovaCor);
// route.get('/novaPessoa' ,cadastroPesosa.paginaNovaPessoa);

// route.post('/novaCor', cadastroCor.criarNovaCor);
// route.post('/novaPessoa', cadastroPesosa.criarNovaPessoa); //
// route.post('/editarPessoa', home.editPessoa)
// route.post('/editPessoa', editarPessoa.editPessoa); // edit
 

// Cadastro de aluno irá receber um arquivo com o "name" do HTML chamado de "foto"
// route.post('/aluno', multer(config).single('foto'), cadastro.alunoInsert);
module.exports = route;