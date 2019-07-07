// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import { Nav } from 'react-bootstrap';
// import logoImage from '../assets/logo-2.png';

// const Styles = styled.div`
// footer.footerr{
//     background-color: rgb(0,0,0,0.8);

// }

// svg.svg-inline--fa.fa-facebook.fa-w-16{
//   width: 90px;
//     height: 50px;
//     float: right;

// }

// svg.svg-inline--fa.fa-instagram.fa-w-14 {
//     width: 90px;
//     height: 50px;
//     float: right;
// }
// img.logo-image{
//     width: 120px;
//     height: 120px;
// }


// `

// export const Footer = () => (
// <Styles>
//     <div className="Foot">
//         {/* Footer */}
//         <footer className="footerr">
//             {/* Footer Links */}
//             <div className="footer-container">
//                 {/* Grid row */}
//                 <div className="row">
//                     {/* Grid column */}
//                     <div>
//                     {/* <Link to="/">Home</Link> */}
//                    <Link to='/' ><img src={logoImage} className={'logo-image'} style={{}} /></Link>

//                     </div>
//                     {/* Grid column */}
//                     <hr className="footer-hr" />
//                     {/* Grid column */}
//                     <div className="footer-col">
//                         {/* Links */}
//                         <h5 className="footer-text">Go To</h5>
//                         <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link href="/gallery">Gallery</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link href="/events">Events</Nav.Link></Nav.Item>
//                         <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>

//                     </div>
//                     {/* Grid column */}
//                     <hr className="footer-hr" />
//                     {/* Grid column */}

//                     {/* Grid column */}
//                     <hr className="footer-hr" />
//                     {/* Grid column */}
//                     <div className="footer-col">
//                         {/* Links */}

                        
//                             <a className="facebook" href="https://www.facebook.com/ivandebsartist/"> <FontAwesomeIcon icon={faFacebook} /></a>
//                             <a className="instagram" href="https://www.facebook.com/ivandebsartist/"><FontAwesomeIcon icon={faInstagram} /></a>
                        
//                     </div>
//                     {/* Grid column */}
//                 </div>
//                 {/* Grid row */}
//             </div>
//             {/* Footer Links */}

//             {/* Call to action */}
//             <hr />










//             {/* Copyright */}
//             <div className="footer-copyright text-center py-3">© 2018 Copyright:
//     <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
//             </div>
//             {/* Copyright */}
//         </footer>
//         {/* Footer */}


//     </div>
//     </Styles>
// )

// export default Footer;


import React from "react";
import styled from "styled-components"
const Styles = styled.div`
* {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
  }
  
  body {
    font: 11px "Open Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  
  .generic-anchor {
    color: #8DB9ED;
  }
  .generic-anchor:visited {
    color: #8DB9ED;
  }
  .generic-anchor:hover {
    color: #ccc;
  }
  
  .flex-rw {
    display: flex;
    flex-flow: row wrap;
  }
  
  main {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font: 10em "Oswald", sans-serif;
    color: #9b9b9b;
    line-height: 1;
  }
  
  footer {
    background: #373737;
    margin-top: auto;
    width: 100%;
  }
  
  .footer-list-top {
    width: 33.333%;
  }
  
  .footer-list-top > li {
    text-align: center;
    padding-bottom: 10px;
  }
  
  .footer-list-header {
    padding: 10px 0 5px 0;
    color: #fff;
    font: 2.3vw "Oswald", sans-serif;
  }
  
  .footer-list-anchor {
    font: 1.3em "Open Sans", sans-serif;
  }
  .footer-social-section {
    width: 100%;
    align-items: center;
    justify-content: space-around;
    position: relative;
    margin-top: 5px;
  }
  
  .footer-social-section::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 10px;
    border-top: 1px solid #ccc;
    width: calc(100% - 20px);
  }
  
  .footer-social-overlap {
    position: relative;
    z-index: 2;
    background: #373737;
    padding: 0 20px;
  }
  
  .footer-social-connect {
    display: flex;
    align-items: center;
    font: 3.5em "Oswald", sans-serif;
    color: #fff;
  }
  
  .footer-social-small {
    font-size: 0.6em;
    padding: 0px 20px;
  }
  
  .footer-social-overlap > a {
    font-size: 3em;
  }
  
  .footer-social-overlap > a:not(:first-child) {
    margin-left: 0.38em;
  }
  
  .footer-bottom-section {
    width: 100%;
    padding: 10px;
    border-top: 1px solid #ccc;
    margin-top: 10px;
  }
  
  .footer-bottom-section > div:first-child {
    margin-right: auto;
  }
  
  .footer-bottom-wrapper {
    font-size: 1.5em;
    color: #fff;
  }
  
  .footer-address {
    display: inline;
    font-style: normal;
  }
  @media only screen and (max-width: 768px) {
    .footer-list-header {
      font-size: 2em;
    }
  
    .footer-list-anchor {
      font-size: 1.1em;
    }
  
    .footer-social-connect {
      font-size: 2.5em;
    }
  
    .footer-social-overlap > a {
      font-size: 2.24em;
    }
  
    .footer-bottom-wrapper {
      font-size: 1.3em;
    }
  }
  @media only screen and (max-width: 568px) {
    main {
      font-size: 5em;
    }
  
    .footer-list-top {
      width: 100%;
    }
  
    .footer-list-header {
      font-size: 3em;
    }
  
    .footer-list-anchor {
      font-size: 1.5em;
    }
  
    .footer-social-section {
      justify-content: center;
    }
  
    .footer-social-section::after {
      top: 25%;
    }
  
    .footer-social-connect {
      margin-bottom: 10px;
      padding: 0 10px;
    }
  
    .footer-social-overlap {
      display: flex;
      justify-content: center;
    }
  
    .footer-social-icons-wrapper {
      width: 100%;
      padding: 0;
    }
  
    .footer-social-overlap > a:not(:first-child) {
      margin-left: 20px;
    }
  
    .footer-bottom-section {
      padding: 0 5px 10px 5px;
    }
  
    .footer-bottom-wrapper {
      text-align: center;
      width: 100%;
      margin-top: 10px;
    }
  }
  @media only screen and (max-width: 480px) {
    .footer-social-overlap > a {
      margin: auto;
    }
  
    .footer-social-overlap > a:not(:first-child) {
      margin-left: 0;
    }
  
    .footer-bottom-rights {
      display: block;
    }
  }
  @media only screen and (max-width: 320px) {
    .footer-list-header {
      font-size: 2.2em;
    }
  
    .footer-list-anchor {
      font-size: 1.2em;
    }
  
    .footer-social-connect {
      font-size: 2.4em;
    }
  
    .footer-social-overlap > a {
      font-size: 2.24em;
    }
  
    .footer-bottom-wrapper {
      font-size: 1.3em;
    }
  }






`
const FooterPage = () => {
    return (
        <Styles>
      <div>
      <footer className="flex-rw">
        <ul className="footer-list-top">
          <li>
            <h4 className="footer-list-header">About Pavilion</h4></li>
          <li><a href="/shop/about-mission" className="generic-anchor footer-list-anchor" itemProp="significantLink">GET TO KNOW US</a></li>
          <li><a href="/promos.html" className="generic-anchor footer-list-anchor" itemProp="significantLink">PROMOS</a></li>
          <li><a href="/retailers/new-retailers.html" className="generic-anchor footer-list-anchor" itemProp="significantLink">BECOME A RETAILER</a></li>
          <li><a href="/job-openings.html" itemProp="significantLink" className="generic-anchor footer-list-anchor">JOB OPENINGS</a></li>
          <li><a href="/shop/about-show-schedule" className="generic-anchor footer-list-anchor" itemProp="significantLink">EVENTS</a></li>
        </ul>
        <ul className="footer-list-top">
        <li>
          <h4 className="footer-list-header">The Gift Selection</h4></li>
        <li><a href="/Angels/cat/id/70" className="generic-anchor footer-list-anchor">ANGEL FIGURINES</a></li>
        <li><a href="/Home-Decor/cat/id/64" className="generic-anchor footer-list-anchor">HOME DECOR</a></li>
        <li><a href="/Mugs/cat/id/32" className="generic-anchor footer-list-anchor">MUGS</a></li>
        <li><a href="/Pet-Lover/cat/id/108" className="generic-anchor footer-list-anchor">PET LOVER</a></li>
        <li><a href="/Ladies-Accessories/cat/id/117" className="generic-anchor footer-list-anchor" target="_blank">HANDBAGS &amp; JEWELRY</a></li>
      </ul>
      <ul className="footer-list-top">
        <li id="help">
          <h4 className="footer-list-header">Please Help Me</h4></li>
        <li><a href="/shop/about-contact" className="generic-anchor footer-list-anchor" itemProp="significantLink">CONTACT</a></li>
        <li><a href="/faq.html" className="generic-anchor footer-list-anchor" itemProp="significantLink">FAQ</a></li>
        <li id="find-a-store"><a href="/shop/store-locator" className="generic-anchor footer-list-anchor" itemProp="significantLink">STORE LOCATOR</a></li>
        <li id="user-registration"><a href="/shop/user-registration?URL=" className="generic-anchor footer-list-anchor" itemProp="significantLink">NEW USERS</a></li>
        <li id="order-tracking"><a href="/shop/order-status" itemProp="significantLink" className="generic-anchor footer-list-anchor">ORDER STATUS</a></li>
      </ul>
      <section className="footer-social-section flex-rw">
        <span className="footer-social-overlap footer-social-connect">
          CONNECT <span className="footer-social-small">with</span> US
        </span>
        <span className="footer-social-overlap footer-social-icons-wrapper">
          <a href="https://www.pinterest.com/paviliongift/" className="generic-anchor" target="_blank" title="Pinterest" itemProp="significantLink"><i className="fa fa-pinterest" /></a>
          <a href="https://www.facebook.com/paviliongift" className="generic-anchor" target="_blank" title="Facebook" itemProp="significantLink"><i className="fa fa-facebook" /></a>
          <a href="https://twitter.com/PavilionGiftCo" className="generic-anchor" target="_blank" title="Twitter" itemProp="significantLink"><i className="fa fa-twitter" /></a>
          <a href="http://instagram.com/paviliongiftcompany" className="generic-anchor" target="_blank" title="Instagram" itemProp="significantLink"><i className="fa fa-instagram" /></a>
          <a href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg" className="generic-anchor" target="_blank" title="Youtube" itemProp="significantLink"><i className="fa fa-youtube" /></a>
          <a href="https://plus.google.com/+Paviliongift/posts" className="generic-anchor" target="_blank" title="Google Plus" itemProp="significantLink"><i className="fa fa-google-plus" /></a>
        </span>
      </section>
      <section className="footer-bottom-section flex-rw">
        <div className="footer-bottom-wrapper">
          <i className="fa fa-copyright" role="copyright">
          </i> 2019 Pavilion in <address className="footer-address" role="company address">Bergen, NY</address><span className="footer-bottom-rights"> - All Rights Reserved - </span>
        </div>
        <div className="footer-bottom-wrapper">
          <a href="/terms-of-use.html" className="generic-anchor" rel="nofollow">Terms</a> | <a href="/privacy-policy.html" className="generic-anchor" rel="nofollow">Privacy</a>
        </div>
      </section>
    </footer>
  </div>
  </Styles>
  )

}

export default FooterPage;