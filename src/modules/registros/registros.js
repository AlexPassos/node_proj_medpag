'use strict'

//const modelLoader = require('../../utils/modelLoader')

const routerRegistros = require('./routes/registros-routes')

const models = [
    '../modules/registros/model/registros-model'
]

exports.init = (app) => {

    app.use('/', routerRegistros);

}