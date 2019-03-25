import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../Context';

import { Link } from 'react-router-dom';


class Modal extends Component{
    render(){
   return(
       <ProductConsumer>
          {(value) =>{
              const {modalOpen,closeModal} = value;
              const {img, title, price} = value.modalProduct;
              if(!modalOpen){
                return null;
              }
              else{
                  return(
               <                                                ModalContainer>
                   <div className="container">
                     <div className="row">
                
                
                
                
                
                
                
                       <div id="modal" className="col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-4">
                         <h5>Produit ajouté au panier</h5>
                         <img src={img} className="img-fluid" alt="product"/>
                         <h5>{title}</h5>
                         <h5 className="text-muted">Prix: {price} euros </h5>
                     
                         <Link to="/productList">
                         <button type="button" class="btn btn-primary mr-2"
                         onClick={()=> closeModal()}
                         >Continuer les achats</button>
                         </Link>

                         <Link to="/cart">
                         <button type="button" class="btn btn-warning "
                         onClick={()=> closeModal()}
                         >Voir mon panier</button>
                         </Link>

                       </div>

                     </div>

                   </div>
               </ModalContainer>
               );

              }
              
          }}

       </ProductConsumer>
   )
   }
}
const ModalContainer = styled.div`
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
background:rgba(0,0,0,0.3);
display:flex;
align-items:center;
justify-content:center;
#modal{
    background : var(--mainWhite);
}

`; 
export  default Modal;