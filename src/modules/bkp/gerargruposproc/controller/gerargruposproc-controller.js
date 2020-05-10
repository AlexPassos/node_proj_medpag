'use strict'

const Sequelize = require('sequelize');

const model = require('../../../../../bin/modelLoader');

exports.postGerargruposproc = (req, res) => {

    const { idregistro, idespecialidade, habilitado } = req.body;

    //Consulta group e loop salvando na tabela credenciadosgrupos
    model.Tabelaprecos.findAll({
        where: {
            idespecialidade: idespecialidade,
            habilitado: habilitado
        },
        attributes: [
            [Sequelize.fn('max', Sequelize.col('id')), 'id'],
            [Sequelize.fn('max', Sequelize.col('idgrupo')), 'idgrupo'],
            [Sequelize.col('idsubgrupo'), 'idsubgrupo'],
            [Sequelize.fn('max', Sequelize.col('idprocedimento')), 'idprocedimento'],
            [Sequelize.fn('max', Sequelize.col('valor')), 'valor'],
            [Sequelize.fn('max', Sequelize.col('idespecialidade')), 'idespecialidade'],
            [Sequelize.fn('max', Sequelize.col('valorprofissional')), 'valorprofissional'],
            [Sequelize.fn('bool_or', Sequelize.col('habilitado')), 'habilitado'],
        ],
        group: ['idsubgrupo'],
        raw: true
    }).then((data) => {

        //console.log(data.length);        
        //console.log(data);

        for (let i = 0; i < data.length; i++) {
            //console.log(data[i].idgrupo);

            let dados = {
                "idregistro": idregistro,
                "idgrupo": data[i].idgrupo,
                "idsubgrupo": data[i].idsubgrupo,
                "situacao": true,
                "idespecialidade": data[i].idespecialidade
            }

            model.Credenciadosgrupos
                .build(dados)
                .save()
                .then((data) => {
                    //res.send(true);
                }).catch((error) => {
                    console.log(error);
                    res.send(error);
                });
        }

        //res.send(data);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });

    //Consulta sem group e com loop salvando na tabela credenciadosprocedimentos
    model.Tabelaprecos.findAll({
        where: {
            idespecialidade: idespecialidade,
            habilitado: habilitado
        }
    }).then((data) => {

        console.log(data.length);
        //console.log(data);

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

        res.send(true);

    }).catch((error) => {
        console.log(error);
        res.send(error);
    });
};