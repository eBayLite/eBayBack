const Produit = require("../models/Produit");
const Joi = require('joi');

exports.vendre = function(req, res){
    const today = new Date()
    const produitData = {
        nom: req.body.nom,
        categorie: req.body.categorie,
        prix: req.body.prix,
        prix_min: req.body.prix_min,
        description: req.body.description,
        vendeur: req.body.vendeur,
        created: today
    };

    

    let errors = [];

  if (!produitData.nom || !produitData.categorie || !produitData.prix || !produitData.prix_min || !produitData.description || !produitData.vendeur) {
    errors.push({ msg: 'Remplissez tous les champs!' });
  }

  if (produitData.prix_min > produitData.prix) {
    errors.push({ msg: 'Le prix doit être supérieur au prix minimum' });
  }

  if (produitData.description.length > 160){
      errors.push({msg: 'La description ne doit pas dépasser 160 caractères'});
  }

  if (produitData.prix_min < 10) {
    errors.push({ msg: 'erreur, le prix minimum doit être au minimum égal à 10' });
  }

  else {
    Produit.create(produitData).then(item => {res.send("item sauvegardé");}).catch(err => {res.status(400).send("impossible de sauvegarder le produit");});
  }

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
