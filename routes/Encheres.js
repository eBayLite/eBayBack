const express = require("express");
const Router = express.Router();
const cors = require("cors");
const assert = require('assert');

Router.use(cors());

process.env.SECRET_KEY = 'secret';

const enchere_controller = require('../controllers/encheresController');
const verifyTok = require('../tokenB');

//fonction qui protègera nos routes

Router.post('/creer', verifyTok.verifierToken, enchere_controller.creer);
Router.get('/listench', verifyTok.verifierToken, enchere_controller.listench);
Router.get('/enchbyuser', enchere_controller.enchByUser);
Router.delete('/suppench/:id', verifyTok.verifierToken, enchere_controller.suppench);

Router.use(cors());

module.exports = Router;