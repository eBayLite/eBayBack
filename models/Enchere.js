const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EnchereSchema = new Schema({
    titleE:{
        type: String,
        required: true
    },
    priceE:{
        type: Number,
        required: true
    },
    incE:{
        type: Number,
        required: true
    },
    infoE:{
        type: String
    },
    companyE:{
        type: String,
        required: true
    },
    imgE:{
         type: String 
    },
    inPanE:{
        type: Boolean
    },
    stateE:{
        type: Array,
        items:{
            type: String,
            enum: [
                "Neuf",
                "Occasion",
                "Bon état",
                "Très bon état",
                "Reconditionné"
            ]
        }
    },
    date:{
        type: Date,
        default: Date.now
    },
    endDate:{
        type: String
    },
    offre:{
        type: Number
    },
    disponible:{
        type: Boolean
    },
    userID:{
        type: String
    }
});


module.exports = Enchere = mongoose.model('encheres', EnchereSchema);