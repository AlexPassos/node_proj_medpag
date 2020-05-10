'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/credenciadosprocedimentos-controller');

router.get('/medpag/credenciadosprocedimentos', controller.getCredenciadosprocedimentos);
router.post('/medpag/credenciadosprocedimentos', controller.postCredenciadosprocedimentos);

module.exports = router;