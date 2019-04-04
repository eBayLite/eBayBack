const Enchere = require("../models/Enchere");
const Joi = require('joi');

exports.creer = function(req, res) {
    const schema = Joi.object().keys({
        nom : Joi.string().min(5).max(20).required().error(new Error("veuillez entrer un nom d'au moins 5 à 20 caractères")),
        etat : Joi.string().min(5).max(20).required().error(new Error("veuillez entrer un état d'au moins 5 à 20 caractères")),
        prix : Joi.number().integer().max(9999).required().error(new Error("entrez un prix valide")),
        prix_ench: Joi.number().integer().required().error(new Error("entrez un prix d'enchère valide")),
        vendeur: Joi.string().min(3).max(20).required().error(new Error("entrez un nom de vendeur valide"))
    });

    Joi.validate(req.body, schema, (err, result)=>{
         if(err){
            console.log(err);
            res.send(err.message);
         }
         else{ 
             Enchere.create(result);
             console.log(result);
             res.send("Enchère ajoutée avec succès");
         }
    }); 

}; 

exports.listench = function(req, res){
    Enchere.find({}, function(err, docs){
        if (err) res.json(err);
        else res.json({encheres:docs});
    });
}