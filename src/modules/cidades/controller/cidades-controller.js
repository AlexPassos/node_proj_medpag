'use strict'

const model = require('../../../../bin/modelLoader');

exports.getCidades = (req, res) => {

    model.Cidades.findAll({
        include: [
            { model: model.Estados }            
        ],
        where:{
            idestados: 29,
            status: true
        }
    }).then((data) => {

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};