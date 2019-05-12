const service = require("../services/encheresService");

exports.creer = function(req, res) {
   service.creer(req, res);
}; 

exports.listench = function(req, res){
    service.listench(req, res);
}

exports.suppench = function(req, res){
    service.suppench(req, res);
}