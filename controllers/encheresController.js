const service = require("../services/encheresService");
const jwt = require('jsonwebtoken');

exports.creer = function(req, res) {
   jwt.verify(req.token, process.env.SECRET_KEY, (err, data) => {
       if (err){
           res.sendStatus(403);
       }
       else{
        service.creer(req).then(ench=>{
            res.send(ench)
           });
       }
   }) 
}; 

exports.listench = function(req, res){
    jwt.verify(req.token, process.env.SECRET_KEY, (err) => {
        if (err){
            res.sendStatus(403);
        }
        else{
    service.listench(req).then(result =>{res.send(result); console.log(result)});
    }
  });
}

exports.suppench = async function(req, res){
    jwt.verify(req.token, process.env.SECRET_KEY, async(err, data) => {
        if (err){
            res.sendStatus(403);
        }
        else{
     await service.suppench(req).then(del => {console.log("L'enchère a été supprimé avec succes")});
       }
    });
}
 
exports.enchByUser = function(req, res) {
    service.enchByUser(req).then(result =>{res.send(result); console.log(result)});
 }; 
/*
exports.suppench = function(req, res){
    service.suppench(req, res);
}*/