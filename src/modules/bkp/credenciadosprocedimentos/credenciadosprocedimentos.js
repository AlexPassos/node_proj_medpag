'use strict'

const routerCredenciadosprocedimentos = require('./routes/credenciadosprocedimentos-routes')

exports.init = (app) => {

    app.use('/', routerCredenciadosprocedimentos);

}