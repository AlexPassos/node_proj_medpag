'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/cidades-controller');

router.get('/medpag/listCidades', controller.getCidades);

module.exports = router;