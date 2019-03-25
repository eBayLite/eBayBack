import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logos from './logos.png';

import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


class NavBar extends Component{
    render(){
        return(
    <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
     
      

        <Link to="/" >
         <img src={logos} alt="store" className="navbar-brand"></img>
        </Link>

        <ul className="navbar-nav align-items-center">
         <li className="nav-item ml-5">
          <Link to="/productList" className="nav-link" >
           Ventes
          </Link>
         </li>

         <li className="nav-item ml-5">
          <Link to="/enchereList" className="nav-link" >
           Enchères
          </Link>
         </li>
         <li className="nav-item ml-5">
          <Link to="/promotion" className="nav-linka" >
           Promo
          </Link>
         </li>



         

        

        </ul>

         
        
        <ul className="navbar-nav align-items-center ml-auto  ">
            <li className="nav-item ml-5">
             <Link to="/productList" className="ml-auto ">
             <span className="mr-0">
               <input type="text" class="form-control"  placeholder="Chercher..." />
             </span>
             </Link>
           </li>
            
        
           <li className="nav-item ml-1">

             <Link to="/productList" className="ml-auto ">
              <button type="button" class="btn btn-warning">
                <span className="mr-6">
                  <i className="fas fa-search" />
                </span>
              </button>
            </Link>
           </li>    

        </ul>

       


    
        
        <Link to="/cartE" className="ml-5">
        <button type="button" class="btn btn-light">
            <span className="mr-2">
             <i className="fas fa-hand-paper" />
            </span>
           Mes enchères
        </button>
       </Link>

       
        <Link to="/cart" className="ml-2 mr-2">
        <button type="button" class="btn btn-warning">
            <span className="mr-2">
             <i className="fas fa-cart-plus" />
            </span>
           Mon panier
        </button>
       </Link>

       <Link to="/login">
       Se deconnecter
       </Link>

      </NavWrapper>


);
}
}

const NavWrapper = styled.nav`
background:var(--mainBlue);
.nav-link{
    color:var(--mainWhitee) !important;
    font-size:1.3rem
    text-transform:capitalize !important;
}

.nav-link:hover{
  color:var(--mainYellow) !important;
  font-size:1.33rem
  text-transform:capitalize !important;
}

`


export default NavBar;