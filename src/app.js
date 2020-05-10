"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false}));// apenas dados simples
app.use(bodyParser.json());//só recebe json

const indexRoute = require('./routes/index');
const emails = require('./modules/emails/emails');
const registros = require('./modules/registros/registros');
const especialidades = require('./modules/especialidades/especialidades');
const estados = require('./modules/estados/estados');
const cidades = require('./modules/cidades/cidades');

//Habilita o cors
app.use(function(req, res, next){
    res.header('Access-Controll-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

//Carrega as rotas
indexRoute.init(app);
emails.init(app);
registros.init(app);
especialidades.init(app);
estados.init(app);
cidades.init(app);

//app.use("/medpag", indexRoute);
// app.use("/medpag/registros", registrosRoute);
// app.use("/medpag/especialidades", especialidadesRoute);
// app.use("/medpag/procgrupos", procgruposRoute);
// app.use("/medpag/gerargruposproc", gerargruposprocRoute);
// app.use("/medpag/gerarprocedimentos", gerarprocedimentosRoute);

//Quanto não encontrar rota
app.use((req, res, next) => {
    const err = new Error('Não encontrado');
    err.status = 404;
    next(err);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        } 
    });
});

module.exports = app;