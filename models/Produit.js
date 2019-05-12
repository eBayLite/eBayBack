const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProduitSchema = new Schema({
    nom:{
        type: String,
        required: true
    },
    categorie:{
        type: String,
        required: true
    },
    prix:{
        type: Number,
        required: true
    },
    prix_min:{
        type: Number,
        required: true
    },
    description:{
        type: String
    },
    vendeur:{
        type: String,
        required: true
    },/*
    count:{
        type: Number
    },
    total:{
        type: Number
    },
    inCart:{
        type: Boolean
    },*/
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Produit = mongoose.model('produits', ProduitSchema);