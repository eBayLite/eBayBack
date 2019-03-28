const express = require("express");
const Router = express.Router();
const cors = require("cors");
Router.use(cors());

const produit_controller = require('../controllers/produitsController');

Router.post('/vendre', produit_controller.vendre);
Router.get('/listventes', produit_controller.listventes);
Router.post('/produits/:id/delete', produit_controller.suppvente);

module.exports = Router;