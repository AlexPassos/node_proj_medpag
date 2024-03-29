'use strict'

const express = require('express');
const router = express.Router();

const controller = require('../controller/emails-controller');

router.post('/medpag/emailrecuperacao', controller.postEmailRecuperacao);
router.post('/medpag/emailboleto', controller.postEmailBoleto);
router.post('/medpag/emailconsulta', controller.postEmailConsulta);
router.post('/medpag/emailexame', controller.postEmailExame);
router.post('/medpag/emailvalidacao', controller.postEmailValidacao);
router.post('/medpag/emailteste', controller.postEmailTeste);

module.exports = router;