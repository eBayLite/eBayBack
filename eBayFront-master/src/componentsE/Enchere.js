import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ProductConsumer} from '../Context';
import Timer from './TimerE';
import PropTypes from 'prop-types';




export default class Enchere extends Component {
  
  render() {
    const {idE, titleE, imgE, priceE, DateD, DateF} =this.props.enchere;
    return (
      <EnchereWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">

        <ProductConsumer>
        {value=>(
          <div className="img-container p-5"
           onClick={() =>
           value.handleDetailE(idE)}>
          <Link to="/detailsE">
          <img src={imgE} alt="enchere" className="card-img-top" />
          </Link>

         
          
          
           </div>
        ) }

       

        </ProductConsumer>
        {/* footer */}   

        
        <div className="card-footer d-flex justify-content-between">
             <p className="align-self-center mb-0">
             {titleE}
             </p>
             
         </div>
         <div>

         <h5 className="text-blue font-italic rm-2 ">
              Dérniere offre reçu:   {priceE}
             <span className="mr-1">  € </span>
            
             </h5>
             <h6 className="mx-auto">
              <Timer  dateD={DateD} dateF={DateF}/>
             </h6>
            </div>



       </div>
      
      </EnchereWrapper>
    )
  }
}

Enchere.propTypes = {
enchere : PropTypes.shape({

  idE : PropTypes.number,
  imgE :PropTypes.string,
  titleE : PropTypes.string,
  priceE :PropTypes.number,
  inPanE : PropTypes.bool

}).isRequired
  
}



const EnchereWrapper = styled.div`
.card{
  border-color : transparent;
  transition : all 0.5s linear;
}
.card-footer{
 background : transparent;
 transition : all 0.5s linear;
  
}
&:hover{
 .card{
     background : rgba(233,228,246);
     border : 0.04rem solid rgba(0,0,0,0.2);
     box-shadow : 2px 2px 5px 0px rgba(0,0,0,0.2)
 } 
 .card-footer{
     background : rgba(208,195,238);

 }
}

.img-container{
  position : relative;
  overflow : hidden;

}

.card-img-top{
 transition : all 0.5s linear;
}

.img-container:hover .card-img-top{
transform : scale(1.1);
}

.cart-btn{
  position : absolute;
  bottom : 0;
  right : 0;
  padding : 0.2rem 0.4rem;
  background : var(--lightBluee);
  border : none;
  color : var(--mainWhite);
  font-size : 1.4rem;
  border-radius : 0.5rem 0 0 0;
  transform : translate(100%, 100%);
  transition : all 0.5s linear;


}

.img-container:hover{
   .cart-btn{
  transform : translate(0,0);
 }
}

.cart-btn:hover{
 color : var(--mainYellow);
 
 cursor : pointer;
}



`