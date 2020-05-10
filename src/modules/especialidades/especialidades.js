'use strict'

//const modelLoader = require('../../utils/modelLoader')

const routerEspecialidades = require('./routes/especialidades-routes')

const models = [
    '../modules/especialidades/model/especialidades-model'
]

exports.init = (app) => {

    app.use('/', routerEspecialidades);

}