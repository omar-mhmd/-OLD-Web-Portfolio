import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logoImage from '../assets/logo.png';

const Styles = styled.div `

.navbar {
    left: 0px;
    right: 0px;
    top: 0px;
  position:fixed;
    background-color: #222;
    z-index: 999;

}
.navbar a{
    color: white;
    text-decoration:none;
    
}




}
a.zaher:hover{
 color:#A788A8;
    font-size:18px;
    // border:solid 2px #A788A8;
}


nav.navbar.navbar-expand-lg.navbar-light {
    width:100%;
    

}
a.nav-link{
    line:height:20px;
    
}




    
    
    &:hover {
        color: purple;
    }
    
}



.logo-image{

   width: 100px;
   height: 70px;
    margin: auto;

}

.zaher{
    padding:10px;
}
a.zaher{
    text-align: center;
}
a.zaher:hover{
    color:#A788A8;
    font-size:24px;

}


`

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg w3-bar w3-black">
            <Link to='/'><img href="/home" src={logoImage} className={'logo-image'} /></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                 
                  < Link className="zaher" to="/">Home</ Link> 
                     < Link className="zaher" to="/about">About</ Link>
                    <  Link className="zaher" to="/gallery">Gallery</  Link>
                    < Link className="zaher" to="/events">Events</ Link>
                    <  Link className="zaher" to="/contact">Contact</  Link>
         
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)