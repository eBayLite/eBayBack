const express = require("express");
const Router = express.Router();
const cors = require("cors");
Router.use(cors());
const multer = require('multer');
const upload = multer({dest: 'uploads/'}); 

const produit_controller = require('../controllers/produitsController');

Router.post('/vendre', upload.single('image'), produit_controller.vendre);
Router.get('/listventes', produit_controller.listventes);
Router.post('/suppvente/:id', produit_controller.suppvente);

module.exports = Router;