const express = require("express");
const Router = express.Router();
const cors = require("cors");
//const jwt = require("jsonwebtoken");
const assert = require('assert');

const enchere_controller = require('../controllers/encheresController');

//const middlewareAuth = require('../services/usersService');

Router.post('/creer'/*middlewareAuth.profile*/, enchere_controller.creer);
Router.get('/listench', enchere_controller.listench);
Router.delete('/suppench/:id', enchere_controller.suppench);

Router.use(cors());

module.exports = Router;