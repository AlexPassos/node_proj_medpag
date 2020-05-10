'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/procedimentosgrupos-controller');

router.get('/medpag/listProcedimentosgrupos', controller.getProcedimentosGrupos);

module.exports = router;