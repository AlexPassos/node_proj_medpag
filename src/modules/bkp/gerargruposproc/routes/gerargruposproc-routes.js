'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/gerargruposproc-controller');

router.post('/medpag/gerargruposproc', controller.postGerargruposproc);

module.exports = router;