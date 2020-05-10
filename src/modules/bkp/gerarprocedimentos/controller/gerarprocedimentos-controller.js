'use strict'

const model = require('../../../../../bin/modelLoader');

exports.postGerarprocedimentos = (req, res) => {

    const { idregistro, idgrupo, habilitado } = req.body;

    model.Tabelaprecos.findAll({
        where: {
            idgrupo: idgrupo,
            habilitado: habilitado
        }
    }).then((data) => {

        console.log(data.length);
        // for (let i = 0; i < data.length; i++) {
        //     console.log(data[i].dataValues);
        // }

        data.forEach(
            (tab) => {
                //console.log(tab.dataValues);
                //console.log(tab.dataValues.valor);
                let dados = {
                    "idregistro": idregistro,
                    "idgrupo": tab.dataValues.idgrupo,
                    "idsubgrupo": tab.dataValues.idsubgrupo,
                    "idprocedimento": tab.dataValues.idprocedimento,
                    "idespecialidade": tab.dataValues.idespecialidade,
                    "situacao": true
                }                

                model.Credenciadosprocedimentos
                    .build(dados)
                    .save()
                    .then((data) => {
                        //res.send(true);
                    }).catch((error) => {
                        console.log(error);
                        res.send(error);
                    });
            }
        );

        res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};