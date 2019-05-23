const express = require("express");
const Router = express.Router();
const cors = require("cors");

const user_controller = require('../controllers/usersController');

Router.use(cors());

process.env.SECRET_KEY = 'secret';

Router.post('/login', user_controller.login);
Router.post('/register', user_controller.register);
Router.get('/profile', user_controller.profile);
Router.delete('/deluser/:id', user_controller.delUser);

module.exports = Router;