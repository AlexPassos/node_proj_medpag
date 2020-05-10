'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/credenciadosgrupos-controller');

router.get('/medpag/credenciadosgrupos', controller.getCredenciadosgrupos);
router.post('/medpag/credenciadosgrupos', controller.postCredenciadosgrupos);

module.exports = router;