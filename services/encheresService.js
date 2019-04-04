const Enchere = require("../models/Enchere");

exports.creer = function(req, res) {
    const today = new Date()
    const enchereData = {
        nom: req.body.nom,
        etat: req.body.etat,
        prix: req.body.prix,
        prix_ench: req.body.prix_ench,
        vendeur: req.body.vendeur,
        created: today
    };

    let errors = [];

    if (!enchereData.nom || !enchereData.etat || !enchereData.prix || !enchereData.prix_ench || !enchereData.vendeur) {
        errors.push({msg: "Remplissez tous les champs!"});
      }

    if (enchereData.etat!='neuf'|| enchereData.etat!='occasion'){
        errors.push({msg: "l'etat du produit doit forcément être 'neuf' ou 'occasion' "});
    }

    if (enchereData.prix_ench > enchereData.prix*5 || enchereData.prix_ench < enchereData.prix){
        errors.push({msg:"Vous ne pouvez pas sous-encherir, commee vous ne pouvez pas enchérir à 5x le prix de départ"})
    }

    else {
        Enchere.create(enchereData).then(item => {res.send("item sauvegardé");}).catch(err => {res.status(400).send("impossible de sauvegarder l'enchère");}); 
    }

}; 

exports.listench = function(req, res){
    Enchere.find({}, function(err, docs){
        if (err) res.json(err);
        else res.json({encheres:docs});
    });
}