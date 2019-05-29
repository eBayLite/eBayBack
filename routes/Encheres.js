const express = require("express");
const Router = express.Router();
const cors = require("cors");
const assert = require('assert');

Router.use(cors());

process.env.SECRET_KEY = 'secret';

const enchere_controller = require('../controllers/encheresController');


Router.post('/creer', enchere_controller.creer);
Router.get('/listench', enchere_controller.listench);
Router.get('/enchbyuser', enchere_controller.enchByUser);
Router.delete('/suppench/:id', enchere_controller.suppench);

Router.use(cors());

module.exports = Router;