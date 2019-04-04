const service = require("../services/produitsService");

exports.vendre = function(req, res){
   service.vendre(req, res);
}; 

exports.listventes = function(req, res){
   service.listventes(req, res);
};

exports.suppvente = function(req, res){
   service.suppvente(req, res);
};
