const Produit = require("../models/Produit");
const Joi = require('joi');

exports.vendre = function(req, res){
    const schema = Joi.object().keys({
        nom : Joi.string().min(5).max(20).required().error(new Error("veuillez entrer un nom d'au moins 5 à 20 caractères")),
        categorie : Joi.string().min(5).max(20).required().error(new Error("veuillez entrer une catégorie d'au moins 5 à 20 caractères")),
        prix : Joi.number().integer().max(9999).required().error(new Error("entrez un prix valide")),
        prix_min: Joi.number().integer().required().error(new Error("entrez un prix minimum valide")),
        description: Joi.string().min(5).max(50).error(new Error("veuillez entrer une description allant de 5 à 50 caractères")),
        vendeur: Joi.string().min(3).max(20).required().error(new Error("entrez un nom de vendeur valide"))
    });

    Joi.validate(req.body, schema, (err, result)=>{
         if(err){
            console.log(err);
            res.send(err.message);
         }
         else{ 
             Produit.create(result);
             console.log(result);
             res.send("Produit ajouté avec succès");
         }
    }); 
}; 

exports.listventes = function(req, res){
    Produit.find({}, function(err, docs){
        if (err) res.json(err);
        else res.json({produits:docs});
    });
};

exports.suppvente = function(req, res){
    const id = req.body.id;
    Produit.remove({_id: req.body.id}, function(err, docs){
        if (err) res.json(err);
        else res.json({produits: docs});
    })
};
