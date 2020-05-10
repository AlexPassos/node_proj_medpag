'use strict'

const routerCredenciadosgrupos = require('./routes/credenciadosgrupos-routes')

exports.init = (app) => {

    app.use('/', routerCredenciadosgrupos);

}