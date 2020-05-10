'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/registros-controller');

router.get('/medpag/listRegistros', controller.getRegistros);
//router.post('/saveSetor', controller.insert);
//router.post('/updateSetor', controller.update);
//router.delete('/deleteSetor', controller.delete);

module.exports = router;