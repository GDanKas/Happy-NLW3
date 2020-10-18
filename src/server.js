//Cria a requisição do express
const express = require('express');
//Trata os caminhos dos arquivos na aplicação
const path = require('path');
const pages = require('./pages.js');
//Cria o servidor express
const server = express();
server
//utilizar body do req
    .use(express.urlencoded({extended: true}))
//utilizando os arquivos estáticos
    .use(express.static('public'))
//configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
//Instancia o servidor, criando uma requisição get no root
//Rotas da aplicação
    .get('/', pages.index)
    .get('/orphanages', pages.orphanages)
    .get('/orphanage', pages.orphanage)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)

//Ligar servidor
server.listen(8001);