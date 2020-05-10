'use strict'

const model = require('../../../../../bin/modelLoader');

exports.getCredenciadosgrupos = (req, res) => {

    model.Credenciadosgrupos.findAll({
    }).then((data) => {

        console.log(data.length);

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};

exports.postCredenciadosgrupos = (req, res) => {

    const dados = req.body;

    model.Credenciadosgrupos
        .build(dados)
        .save()
        .then((data) => {
            res.send(true);
        }).catch((error) => {
            console.log(error);
            res.send(error);
        });
};