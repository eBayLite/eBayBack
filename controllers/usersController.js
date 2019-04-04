const service = require("../services/usersService");

exports.register = function(req, res){
    service.register(req, res);
}; 

exports.login = function(req, res){
    service.login(req, res);
};

exports.profile = function(req, res){
    service.profile(req, res);
};