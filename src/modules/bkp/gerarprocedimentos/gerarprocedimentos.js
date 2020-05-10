'use strict'

const routerGerarprocedimentos = require('./routes/gerarprocedimentos-routes')

exports.init = (app) => {

    app.use('/', routerGerarprocedimentos);

}