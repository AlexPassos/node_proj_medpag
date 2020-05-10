'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/especialidades-controller');

router.get('/medpag/listEspecialidades', controller.getEspecialidades);
//router.post('/saveSetor', controller.insert);
//router.post('/updateSetor', controller.update);
//router.delete('/deleteSetor', controller.delete);

module.exports = router;