'use strict'

const model = require('../../../../../bin/modelLoader');

exports.getCredenciadosprocedimentos = (req, res) => {

    model.Credenciadosprocedimentos.findAll({
    }).then((data) => {

        console.log(data.length);

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.postCredenciadosprocedimentos = (req, res) => {

    const dados = req.body;

    model.Credenciadosprocedimentos
        .build(dados)
        .save()
        .then((data) => {
            res.send(true);
        }).catch((error) => {
            console.log(error);
            res.send(error);
        });
};