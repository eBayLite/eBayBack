const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProduitSchema = new Schema({
    title:{
        type:String
    },

    img:{

        type:String
        
    },
    
    price:{
        type: Number
    },

    
    company:{
        type:String
    },

    info:{
        type:String
    },

    inCart:{
        type:Boolean
    },

    inPan:{
        type:Boolean
    },

    inc:{
        type:Number
    },

    count:{
        type:Number
    },
    
    total:{
        type:Number
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Produit = mongoose.model('produits', ProduitSchema);