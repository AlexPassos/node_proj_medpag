'use strict'

const routerGerargruposproc = require('./routes/gerargruposproc-routes')

exports.init = (app) => {

    app.use('/', routerGerargruposproc);

}