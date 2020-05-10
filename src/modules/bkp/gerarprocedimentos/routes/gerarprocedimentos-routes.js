'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/gerarprocedimentos-controller');

router.post('/medpag/gerarprocedimentos', controller.postGerarprocedimentos);

module.exports = router;