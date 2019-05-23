const service = require("../services/usersService");

/*exports.register = function(req, res){
    service.register(req, res);
};*/ 

exports.register = function(req, res) {
    service.register(req).then(user=>{
     console.log(user);
     res.send(user)
    });
 }; 

exports.login = function(req, res){
    service.login(req).then(log => {
        console.log(res);
        res.send(log)
    });
};

exports.profile = function(req, res){
    service.profile(req).then(prof =>{
        console.log(res);
        res.send(prof);
    })
};

exports.delUser = async function(req){
    await service.delUser(req).then(del => {console.log("User supprimé")});
}