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
import logoImage from '../assets/logo-2.png';
import { Link } from 'react-router-dom';
// import './Footer.css'
const Styles = styled.div`


/* Footer */
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');


  .logo-image{

    width: 100px;
    height: 100px;
     margin: auto;

 }
}
.container{
  // position  :relative;
  // bottom:150px;

}

section {
    padding: 60px 0;
    
}

section .section-title {
    text-align: center;
    color: #007b5e;
    margin-bottom: 50px;
    text-transform: uppercase;
    
}


#footer {
    background: #222222!important;
}

#footer h5{
	padding-left: 10px;
    border-left: 3px solid #eeeeee;
    border-top: 3px solid #eeeeee;
    border-bottom: 3px solid #eeeeee;
    border-right: 3px solid #eeeeee;
    padding-bottom: 6px;
    margin-bottom: 20px;
    color:#ffffff;
}
#footer a {
    color: #ffffff;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
	padding: 3px 0;
}
#footer ul.social li a i {
    margin-right: 5px;
	font-size: 35px;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.social li:hover a i {
	font-size:50px;
	margin-top:-10px;
}
#footer ul.social li a,
#footer ul.quick-links li a{
	color:#ffffff;
}
#footer ul.social li a:hover{
	color:#eeeeee;
}
#footer ul.quick-links li{
	padding: 3px 0;
	-webkit-transition: .5s all ease;
	-moz-transition: .5s all ease;
	transition: .5s all ease;
}
#footer ul.quick-links li:hover{
	padding: 3px 0;
	margin-left:5px;
	font-weight:700;
}
#footer ul.quick-links li a i{
	margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
    font-weight: 700;
}

@media (max-width:767px){
	#footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
}
}
.social{
  display: flex;
  float: right;


}

.h{
  background:gray;  
}
.N{
color:gray;
}
.pp{
color:gray
}




`
const FooterPage = () => {
  return (<div id="footer-container">
            <Styles>

              {/* Footer */}
              <section id="footer">
                <div className="container">
                  <div className="row text-center text-xs-center text-sm-left text-md-left">
                    <div className="text-center col-xs-12 col-sm-4 col-md-4">
                    
                  <Link to='/'><img href="/home" src={logoImage} className={'logo-image'} /></Link>
                  <p className="pp">hello my name is ivan debs i work as comic artist</p>    
                    
                    </div>
                    <div className=" text-center col-xs-12 col-sm-4 col-md-4">
                      <h2 className="N">Navigation</h2>
                      <ul className="list-unstyled quick-links">
                        <li>< Link to="/">Home</ Link><i className="fa fa-angle-double-right" /></li>
                        <li>< Link to="/about">About</ Link><i className="fa fa-angle-double-right" /></li>
                        <li> <  Link to="/gallery">Gallery</  Link><i className="fa fa-angle-double-right" /></li>
                        <li>< Link to="/events">Events</ Link><i className="fa fa-angle-double-right" /></li>
                        <li>< Link to="/contact">Contact</ Link><i className="fa fa-angle-double-right" /></li>
                      </ul>
                    </div>
                    <div className="text-center col-xs-12 col-sm-4 col-md-4 ">
                        <ul className="text-center  list-unstyled list-inline social text-center">
                          <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook" /></a></li>
                          <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram" /></a></li>
                        </ul>
                      </div>

                  </div>
                  <hr className="h" /> 



                  <div className="row">
                
                    <div className="text-center col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                      <p><u><a href="https://www.nationaltransaction.com/"></a></u> </p>
                      <p className="h6">© All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Ivan Debs</a></p>
                    </div>
                   
                  </div>
                </div>
              </section>

              </Styles>
      </div>
  )

}

export default FooterPage;