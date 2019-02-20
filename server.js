const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

const mongoURI = 'mongodb://localhost:27017/ebay';

mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("base Mongo connectee"))
    .catch(err => console.log(err))

const Users = require('./routes/Users');
const Produits = require('./routes/Produits');

app.use('/users', Users);
app.use('/produits', Produits);

app.listen(port, () => {
    console.log("Server is running on port: " + port)
});
