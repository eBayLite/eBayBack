const service = require("../services/encheresService");


exports.creer = function(req, res) {
   service.creer(req).then(ench=>{
    console.log(res);
    res.send(ench)
   });
}; 

exports.listench = function(req, res){
    service.listench(req).then(result =>{res.send(result); console.log(result)});
}

/*
exports.suppench = function(req, res){
    service.suppench(req, res);
}*/

exports.suppench = async function(req, res){
     await service.suppench(req).then(del => {console.log(res)});
}