'use strict'

const routerProcedimentosgrupos = require('./routes/procedimentosgrupos-routes')

exports.init = (app) => {

    app.use('/', routerProcedimentosgrupos);

}