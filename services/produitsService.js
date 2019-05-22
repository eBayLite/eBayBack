const Produit = require("../models/Produit");
const Joi = require('joi');

exports.vendre = async function (req){
    const schema = Joi.object().keys({
        nom : Joi.string().min(5).max(20).required().error(new Error("veuillez entrer un nom d'au moins 5 à 20 caractères")),
        categorie : Joi.string().min(5).max(20).required().error(new Error("veuillez entrer une catégorie d'au moins 5 à 20 caractères")),
        prix : Joi.number().integer().max(9999).required().error(new Error("entrez un prix valide")),
        prix_min: Joi.number().integer().required().error(new Error("entrez un prix minimum valide")),
        description: Joi.string().min(5).max(50).error(new Error("veuillez entrer une description allant de 5 à 50 caractères")),
        vendeur: Joi.string().min(3).max(20).required().error(new Error("entrez un nom de vendeur valide"))
    });
   
    return await Joi.validate(req.body, schema, async(err, result)=>{
         if(err){
            console.log(err);
         }
         else{
             console.log(result);
              
             return Produit.create(req.body).then(prod => {
                 return prod
             });
             //resolve(JSON.parse(JSON.stringify(pr)));
             //console.log(result);
             //res.send("Produit ajouté avec succès");
         }
    })
}; 

//return await Produit.create(req.body);

/*exports.listventes = function(req, res){
    Produit.find({}, function(err, docs){
        if (err) res.json(err);
        else res.json({produits:docs});
    });
};*/


/*exports.listventes = function(){
    return new Promise((resolve, reject) => {
        Produit.find({}, function(err, docs){
            if (err) reject(err);
            else {
                resolve({produits:docs});
            }
        })});
};*/


    exports.listventes = function(){
        return Produit.find({}, function(err, docs){
             if (err) { console.log(err); }
             else if (docs!== undefined && docs!==null) {
                 return docs;
             }
             else return null
         });
     }


/*exports.suppvente = function(req, res){
    Produit.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
};*/

exports.suppvente = async function(req){
    Produit.findById(req.params.id, async function(err, docs){
        console.log(docs); //todo remove after
        if(err) { console.log(err) }
        else if(docs!== undefined && docs!==null) {
            return docs.remove();
        }
    });
}
