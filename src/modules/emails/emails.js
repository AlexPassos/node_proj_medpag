'use strict'

const routerEmails = require('./routes/emails-routes')

exports.init = (app) => {

    app.use('/', routerEmails);

}