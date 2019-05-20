const service = require("../services/encheresService");


exports.creer = function(req) {
   service.creer(req).then((res)=>{
    console.log(res)
   });
}; 

exports.listench = function(req){
    service.listench(req).then((res)=>{
        console.log(res)
    });
}

/*
exports.suppench = function(req, res){
    service.suppench(req, res);
}*/

exports.suppench = function(req){
    service.suppench(req).then((res)=>{
        console.log(res)
    });
}