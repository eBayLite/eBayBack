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
    date:{
        type: Date,
        default: Date.now
    },
    dateFin:{
        type: Date
    },
    offre:{
        type: Number
    },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
});


module.exports = mongoose.model('Enchere', EnchereSchema);