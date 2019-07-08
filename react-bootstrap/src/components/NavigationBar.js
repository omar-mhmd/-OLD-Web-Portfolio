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
    bottom: 0px;
    ${'' /* position: fixed; */}
    
    background-color: #222;
    height: 10%

}

${'' /* .nav-link{
    background-color: blue;
    margin: 0px,0px;
   
} */}

nav.navbar.navbar-expand-lg.navbar-light {
    width:100%;
    

}


.navbar-brand, .navbar-nav, .nav-link {
    a.nav-link {
    color: white;
    text-Align: center;
    
    
    &:hover {
        color: purple;
    }
    
}
${'' /* .navbar-toggler {
    background-color: blue;
    

}

.ml-auto{
    background-color: blue
} */}

.logo-image{

   width: 100px;
   height: 100px;
    margin: auto;

}


}

`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand><Link to='/'><img href="/home" src={logoImage} className={'logo-image'} /></Link> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                 
                  <Nav.Item><Nav.Link>< Link to="/">Home</ Link> </Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link> < Link to="/about">About</ Link></Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link><  Link to="/gallery">Gallery</  Link></Nav.Link></Nav.Item>
                    <Nav.Item>< Link to="/events">Events</ Link></Nav.Item>
                    <Nav.Item><Nav.Link >  <  Link to="/contact">Contact</  Link></Nav.Link></Nav.Item>
                 
                    {/* < Link to="Link</ Link>
                   < Link to="/about">About</ Link>
                   <  Link to="/gallery">Gallery</  Link>
                    < Link to="/events">Events</ Link>
                   <  Link to="/contact">Contact</  Link>
                     */}
                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)