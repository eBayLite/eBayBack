const Produit = require("../models/Produit");
const Joi = require('joi');

exports.vendre = async function (req){
    const schema = Joi.object().keys({
        title : Joi.string().min(3).max(30).required().error(new Error("veuillez entrer un nom d'au moins 5 à 20 caractères")),
        price : Joi.number().integer().min(0).required().error(new Error("entrez un prix valide")),
        info: Joi.string().min(5).max(4000).error(new Error("veuillez entrer une description allant de 5 à 50 caractères")),
        company: Joi.string().min(10).max(10).required().error(new Error("entrez un nom de vendeur valide")),
        img : Joi.string(),
        inCart : Joi.boolean(),
        inPan : Joi.boolean(),
        inc : Joi.number().integer(),
        count : Joi.number().min(0),
        total : Joi.number().min(0)
    });
   
    return await Joi.validate(req.body, schema, async(err, result)=>{
         if(err){
            console.log(err);
         }
         else{
            let prod = new Produit(req.body);
            var c = prod.img;
                  var o = c.substring(12);
                  var d = "imgV/"+o;
                  prod.img = d;
             //console.log(result);
             return Produit.create(prod).then(prod => {
                 return prod
             });
         }
    })
}; 


exports.listventes = function(){
    return Produit.find({}, function(err, docs){
        if (err) { console.log(err); }
        else if (docs!== undefined && docs!==null) {
            return docs;
        }
        else return null
    });
}

exports.suppvente = async function(req){
    Produit.findById(req.params.id, async function(err, docs){
        console.log(docs); //todo remove after
        if(err) { console.log(err) }
        else if(docs!== undefined && docs!==null) {
            return docs.remove();
        }
    });
}

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


/*exports.suppvente = function(req, res){
    Produit.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
};*/
