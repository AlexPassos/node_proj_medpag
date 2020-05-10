'use strict'

const model = require('../../../../../bin/modelLoader');

exports.getProcedimentosGrupos = (req, res) => {

    model.Procedimentosgrupos.findAll({
        where: {
            habilitado: true
        },
        order: [
            'descricao'
        ]
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};