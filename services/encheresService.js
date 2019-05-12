const Enchere = require("../models/Enchere");
const Joi = require('joi');
//const fs = require('fs');


exports.creer = function(req, res) {
    const schema = Joi.object().keys({
        titleE : Joi.string().min(5).max(20).required().error(new Error("veuillez entrer un nom d'au moins 5 à 20 caractères")),
        priceE : Joi.number().integer().min(5).required().error(new Error("entrez un prix valide")),
        incE : Joi.number().integer().max(9999).required().error(new Error("entrez un prix valide")),
        companyE: Joi.string().min(10).max(10).required().error(new Error("entrez un numero de telephone valide")),
        infoE: Joi.string().min(8).max(160).error(new Error("veuillez entrer un état d'au moins 5 à 160 caractères")),
        inPanE: Joi.boolean().error(new Error("entrez un numero de telephone valide")),
        imgE: Joi.string()
    });

    Joi.validate(req.body, schema, (err, result)=>{
         if(err){
            console.log(err);
            res.send(err.message);
         }
         else{/*
            result.img.data = fs.readFileSync(req.files.userPhoto.path)
            result.img.contentType = 'image/png';
            result.save();*/
             Enchere.create(result);
             Enchere.endDate = setInterval(function() {

                /*--------------------------
                 // Get todays date and time
                 var now = Date.now();
                // Set the date we're counting down to
                var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
                 // Find the distance between now and the count down date
                  var distance = countDownDate - now;
                  ---------------------------
                  */
                
                var actualTime = new Date(Enchere.date);
                var endOfDay = new Date(actualTime.getFullYear(), actualTime.getMonth(), actualTime.getDate() + 1, 0, 0, 0);
                var timeRemaining = endOfDay.getTime() - actualTime.getTime();
                 
                      
                  // Time calculations for days, hours, minutes and seconds
                  //var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                  var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                  var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                  var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
                    
                    
                  //console.log("d:"+days+ " h:"+hours " m:"+minutes " s:"+seconds);  
                  // Output the result in an element with id="demo"
                  //document.getElementById("demo").innerHTML = hours + "h "
                  //+ minutes + "m " + seconds + "s ";
                  const timer = hours + "h "+ minutes + "m " + seconds + "s ";
                  return timer;
                }, 1000);

             console.log(result);
             console.log(Enchere.endDate);
             res.send("Enchère ajoutée avec succès");
         }
    }); 
}; 

exports.listench = function(req, res){
    Enchere.find({}, function(err, docs){
        if (err) res.json(err);
        else res.json({encheres:docs});
    });
}

exports.suppench = function(req, res){
    Enchere.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
}

