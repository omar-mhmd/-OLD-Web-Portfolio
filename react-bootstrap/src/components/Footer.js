import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import logoImage from '../assets/logo-2.png';

const Styles = styled.div`
footer.footerr{
    background-color: rgb(0,0,0,0.8);

}

svg.svg-inline--fa.fa-facebook.fa-w-16{
  width: 90px;
    height: 50px;
    float: right;

}

svg.svg-inline--fa.fa-instagram.fa-w-14 {
    width: 90px;
    height: 50px;
    float: right;
}
img.logo-image{
    width: 120px;
    height: 120px;
}


`

export const Footer = () => (
<Styles>
    <div className="Foot">
        {/* Footer */}
        <footer className="footerr">
            {/* Footer Links */}
            <div className="footer-container">
                {/* Grid row */}
                <div className="row">
                    {/* Grid column */}
                    <div>
                    {/* <Link to="/">Home</Link> */}
                   <Link to='/' ><img src={logoImage} className={'logo-image'} style={{}} /></Link>

                    </div>
                    {/* Grid column */}
                    <hr className="footer-hr" />
                    {/* Grid column */}
                    <div className="footer-col">
                        {/* Links */}
                        <h5 className="footer-text">Go To</h5>
                        <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/gallery">Gallery</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/events">Events</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>

                    </div>
                    {/* Grid column */}
                    <hr className="footer-hr" />
                    {/* Grid column */}

                    {/* Grid column */}
                    <hr className="footer-hr" />
                    {/* Grid column */}
                    <div className="footer-col">
                        {/* Links */}

                        
                            <a className="facebook" href="https://www.facebook.com/ivandebsartist/"> <FontAwesomeIcon icon={faFacebook} /></a>
                            <a className="instagram" href="https://www.facebook.com/ivandebsartist/"><FontAwesomeIcon icon={faInstagram} /></a>
                        
                    </div>
                    {/* Grid column */}
                </div>
                {/* Grid row */}
            </div>
            {/* Footer Links */}

            {/* Call to action */}
            <hr />










            {/* Copyright */}
            <div className="footer-copyright text-center py-3">© 2018 Copyright:
    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
            </div>
            {/* Copyright */}
        </footer>
        {/* Footer */}


    </div>
    </Styles>
)

export default Footer;

