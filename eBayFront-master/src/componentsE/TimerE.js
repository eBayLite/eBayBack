import React, {Component} from 'react';


class Timer extends Component {
    constructor() {
      super();
      this.state = {

           
           seconds: 59,
           minute : 59,
           heur: 23
           
        
        };

    }

    
  
tick() {


  if((this.state.seconds === 0)&&(this.state.minute === 0)&&(this.state.heur === 0)){
        this.setState(state=>({
             minute : state.minute - 0,
             seconds : state.seconds - 0,
             heur : state.heur - 0
        }));
  }
      
else{
       if(this.state.seconds === 0){
                 
              if(this.state.minute === 0){
               
                this.setState(state=>({
                  minute : state.minute  +59,
                  seconds : state.seconds +59,
                  heur : state.heur - 1
             }));


              }
              else{
                this.setState(state=>({
                  minute : state.minute  -1,
                  seconds : state.seconds +59
                  
             }));
               


              }

       }else{

        this.setState(state=>({
          
          seconds : state.seconds -1
          
     }));
       }


}
}

    
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
      
       }

 
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          Temps restant: {this.state.heur} h et {this.state.minute} min et {this.state.seconds} sec
        </div>
      );
    }
  }

  export default Timer;