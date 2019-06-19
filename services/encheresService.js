const Enchere = require("../models/Enchere");
const Joi = require('joi');
const jwt = require("jsonwebtoken");
const User = require("../models/User");

function getCurrentUser(req) {
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization;
        var user = null
        try {
            user = jwt.verify(authorization.split(' ')[1], process.env.SECRET_KEY);
        } catch (e) {
            console.log(e)
        }
        return user
    }
    return null
}


exports.creer = async function(req) {
    const schema = Joi.object().keys({
        titleE : Joi.string().min(3).max(20).required().error(new Error("veuillez entrer un nom d'au moins 5 à 20 caractères")),
        priceE : Joi.number().integer().min(0).required().error(new Error("entrez un prix valide")),
        incE : Joi.number().integer().min(1).required().error(new Error("entrez un prix valide")),
        companyE: Joi.string().min(10).max(10).required().error(new Error("entrez un numero de telephone valide")),
        infoE: Joi.string().min(3).max(4000).error(new Error("veuillez entrer un état d'au moins 5 à 160 caractères")),
        inPanE: Joi.boolean(),
        imgE: Joi.string(),
        //stateE: Joi.string().valid('Neuf', 'Occasion', 'Bon état', 'Très bon état', 'Reconditionné').error(new Error("L'article peut uniquement avoir ces valeurs: 'Neuf', 'Occasion', 'Bon état', 'Très bon état', 'Reconditionné'")),
        dateFin: Joi.date().required(),
        offre: Joi.number()
    });

    return await Joi.validate(req.body, schema, async(err)=>{
         if(err){
            console.log(err);
         }
         else{ 
            const user = getCurrentUser(req)
            if(user !== null){
                var newEnch = req.body;

                var c = newEnch.imgE;
                var o = c.substring(12);
                var d = "imgE/"+o;
                

                var ench = new Enchere ({
                    _id : newEnch._id,
                    titleE: newEnch.titleE,
                    imgE: newEnch.imgE,
                    priceE: newEnch.priceE,
                    incE: newEnch.incE,
                    companyE: newEnch.companyE,
                    infoE: newEnch.infoE,
                    inPanE : newEnch.inPanE,
                    imgE :  d,
                    dateFin: newEnch.dateFin,
                    offre: newEnch.priceE
                  });
                return User.findById(user._id).populate('encheres').then(u => {
                    u.encheres.push(ench)
                    console.log(u);
                    console.log('plop 11-----------')
                    console.log(u.encheres);
                    u.save().then(res=> {
                        console.log('plop______');
                        //console.log(res);
                        return Enchere.create(ench).then(e =>{
                            return e
                        });
                    }).catch(e => {
                        console.log(e)
                    })
                })
                /*return Enchere.create(newEnch).then(ench =>{
                    //ench.userID = req.User._id;
                    //console.log(ench.userID)
                  return ench
                });*/
            } 
         }
    }); 
}; 
    exports.enchByUser = function(){
        const user = new User;
        return User.findById(user._id, function(err, docs){
            if (err) { console.log(err); }
            else if (user.encheres) {
                return docs;
            }
            else return null
        })
    }

    exports.listench = function(){
       return Enchere.find({}, function(err, docs){
            if (err) { console.log(err); }
            else if (docs!== undefined && docs!==null) {
                return docs;
            }
            else return null
        });
    }

exports.suppench = async function(req){
    Enchere.findById(req.params.id, async function(err, docs){
        console.log(docs); //todo remove after
        if(err) { console.log(err) }
        else if(docs!== undefined && docs!==null) {
            return docs.remove()
        }
    });
}

    exports.enchereID = async function(req){
        return Enchere.findById(req.params.id, async function(err, docs){
            if(err){ console.log(err) }
            else if(docs!== undefined && docs!==null) {
                console.log(docs);
                return docs
            }
            else return null     
        });
    }

    exports.update = async function(req){
        return Enchere.findById(req.params.id, async function(err, docs){
    
            if(err){ console.log(err);}
    
            else if(docs!== undefined && docs!==null) { 
                docs.titleE = req.body.titleE;
                docs.imgE = req.body.imgE;
                docs.priceE = req.body.priceE;
                docs.incE = req.body.incE;
                docs.companyE = req.body.companyE;
                docs.infoE = req.body.infoE;
                docs.dateFin = req.body.dateFin;
    
               if ( req.body.offre >=  docs.offre + docs.incE){
                docs.offre = req.body.offre;
               }
               docs.save().then(e =>{
                console.log('plop______');
                        //console.log(res);
                        return Enchere.create(docs).then(e =>{
                            return e
                        });
            })
            .catch(e =>{
                e.status(400).send("update not possible");
            });
            
            }
            return null
        });
    }


/*exports.listench = function(req, res){
    Enchere.find({}, function(err, docs){
        if (err) res.json(err);
        else res.json({encheres:docs});
    });
}*/

/*exports.listench = function(){
    return new Promise((resolve, reject) => {
        Enchere.find({}, function(err, docs){
            if (err) reject(err);
            else {
                resolve({encheres:docs});
            }
        })});
    };*/

/*exports.suppench = function(req, res){
    Enchere.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
}*/


/*exports.suppench = function(req){
    return new Promise((resolve, reject)=>{
        Enchere.findById(req.params.id, function(err, docs){
            if (err) reject(err);
            else resolve(docs.remove());
        });
    });
}*/