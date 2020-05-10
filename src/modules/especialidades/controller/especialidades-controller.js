'use strict'

const model = require('../../../../bin/modelLoader');

exports.getEspecialidades = (req, res) => {

    model.Especialidades.findAll({

    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};