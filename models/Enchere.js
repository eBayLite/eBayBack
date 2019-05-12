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
    endDate:{
        type: String
    }
});

var x = setInterval(function() {

    /*--------------------------
     // Get todays date and time
     var now = Date.now();
    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
     // Find the distance between now and the count down date
      var distance = countDownDate - now;
      ---------------------------
      */
    
    var actualTime = new Date(EnchereSchema.date);
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

module.exports = Enchere = mongoose.model('encheres', EnchereSchema);