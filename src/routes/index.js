'use strict'

const routerIndex = require('./index-route')

exports.init = (app) => {

    app.use('/medpag', routerIndex);

}