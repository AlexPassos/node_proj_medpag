'use strict'

const model = require('../../../../bin/modelLoader');

exports.getRegistros = (req, res) => {

    model.Registros.findAll({
        include: [
            { model: model.Estados },
            { model: model.Cidades }
        ],
        where: {
            auth: 1,
            situacao: true
        }
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};
