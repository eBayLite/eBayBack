const Enchere = require("../models/Enchere");
const Joi = require('joi');
const jwt = require("jsonwebtoken");
const User = require("../models/User");


exports.creer = async function(req) {
    const schema = Joi.object().keys({
        titleE : Joi.string().min(3).max(20).required().error(new Error("veuillez entrer un nom d'au moins 5 à 20 caractères")),
        priceE : Joi.number().integer().min(5).required().error(new Error("entrez un prix valide")),
        incE : Joi.number().integer().max(9999).required().error(new Error("entrez un prix valide")),
        companyE: Joi.string().min(10).max(10).required().error(new Error("entrez un numero de telephone valide")),
        infoE: Joi.string().min(3).max(160).error(new Error("veuillez entrer un état d'au moins 5 à 160 caractères")),
        inPanE: Joi.boolean(),
        imgE: Joi.string(),
        stateE: Joi.string().valid('Neuf', 'Occasion', 'Bon état', 'Très bon état', 'Reconditionné').error(new Error("L'article peut uniquement avoir ces valeurs: 'Neuf', 'Occasion', 'Bon état', 'Très bon état', 'Reconditionné'"))
    });

    //var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY);

    return await Joi.validate(req.body, schema, async(err)=>{
         if(err){
            console.log(err);
         }
         else{
             return Enchere.create(req.body).then(ench =>{
               return ench
             });
         }

    }); 
}; 


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