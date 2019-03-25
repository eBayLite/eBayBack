import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';


class NavBar2 extends Component{
    render(){
        return(
    <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
     
      

        

        



         

        


         
        
        <ul className="navbar-nav align-items-center ml-auto ">
            
        <Link to="/creerEnchere" >
        <button type="button" class="btn btn-outline-dark">
            <span className="mr-2">
             <i className="fas fa-plus" />
            </span>
           Créer une enchère
        </button>
       </Link>
        
         

        </ul>

       


    
        
        

       
        


      </NavWrapper>


);
}
}

const NavWrapper = styled.nav`
background:var(--mainBar);
.nav-link{
    color:var(--mainWhitee) !important;
    font-size:0.6rem
    text-transform:capitalize !important;
}

.nav-link:hover{
  color:var(--mainYellow) !important;
  font-size:1rem
  text-transform:capitalize !important;
}

`



export default NavBar2;