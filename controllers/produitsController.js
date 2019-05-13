const service = require("../services/produitsService");

exports.vendre = function(req, res){
   service.vendre(req, res);
}; 


/*exports.listventes = function(req, res){
   service.listventes(req, res);
};*/


exports.listventes = function(){
   service.listventes().then((res)=>{console.log(res)});


   //service.listventes().then((res)=>{console.log(res)})
   //https://stackoverflow.com/questions/37555031/why-does-json-return-a-promise
   //https://stackoverflow.com/questions/35034506/how-to-use-promise-with-express-in-node-js
}

exports.suppvente = function(req, res){
   service.suppvente(req, res);
};
