const service = require("../services/encheresService");


exports.creer = function(req, res) {
   service.creer(req).then(ench=>{
    res.send(ench)
   });
}; 

exports.listench = function(req, res){
    service.listench(req).then(result =>{res.send(result); console.log(result)});
}

exports.suppench = async function(req, res){
     await service.suppench(req).then(del => {console.log("L'enchère a été supprimé avec succes")});
}
 
exports.enchByUser = function(req, res) {
    service.enchByUser(req).then(result =>{res.send(result); console.log(result)});
 }; 
/*
exports.suppench = function(req, res){
    service.suppench(req, res);
}*/