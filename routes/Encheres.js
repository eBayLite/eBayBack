const express = require("express");
const Router = express.Router();

const cors = require("cors");
const jwt = require("jsonwebtoken");
const assert = require('assert');

const enchere_controller = require('../controllers/encheresController');

Router.post('/creer', enchere_controller.creer);
Router.get('/listench', enchere_controller.listench);

Router.use(cors());

module.exports = Router;