
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
  font-size:70px;
  // padding:10px;
  border-left: 3px solid #eeeeee;
    border-top: 3px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
}
#footer ul.social li a,
#footer ul.quick-links li a:hover{
	color:#A788A8;
}
#footer ul.social li a:hover{
	color:blue;
}
#footer ul.social li a{
  
    
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
color:white
}
.flex-center {
  // width: 100%;
  // min-height: 50vh;
  background: #222222;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.icon-3d {
  padding: 10px;
  -webkit-animation: icon3d 200ms 10;
  animation: icon3d 200ms 10;
  color: #fff;
}
.icon-3d:hover {
  -webkit-animation: icon3d 200ms infinite;
  animation: icon3d 200ms infinite;
}

@keyframes icon3d {
  0% {
    text-shadow: 5px 4px #f44336, -5px -6px #2196f3;
  }
  25% {
    text-shadow: -5px -6px #f44336, 5px 4px #2196f3;
  }
  50% {
    text-shadow: 5px -4px #f44336, -8px 4px #2196f3;
  }
  75% {
    text-shadow: -8px -4px #f44336, -5px -4px #2196f3;
  }
  100% {
    text-shadow: -5px 0 #f44336, 5px -4px #2196f3;
  }
}






`
const FooterPage = () => {
  return (<div id="footer-container">
            <Styles>

              {/* Footer */}
              <section id="footer">
                <div className="container">
                  <div className="row text-center text-xs-center text-sm-center text-md-center">
                    <div className="text-center col-xs-12 col-sm-4 col-md-4">
                    
                  <Link to='/'><img href="/home" src={logoImage} className={'logo-image'} /></Link>
                  <p className="pp">Welcome to the illustrated imaginary world of Ivan Debs. Keep up to date with his tribal influenced style images.</p>    
                    
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
                      <h2 className="N"> Contact Me</h2>
                      <p className="pp">Email: comic artist@gmail.com</p>
                      <p className="pp">Phone: +961 
70 677 374</p>
                      <p className="pp">Address:Pigier Gemmayzeh 
Andalusia Building  </p>
                      
<div class="flex-center">
<a href="https://www.facebook.com/ivandebsartist/" target="_blank">
<i class="fa fa-facebook fa-4x icon-3d"> </i></a>
<a href="https://www.instagram.com/ivan.debs/" target="_blank">
  <i class="fa fa-instagram fa-4x icon-3d"></i></a>
  </div>
                         
                      {/* <div className="social">
                          <ul className="text-center  list-unstyled list-inline social text-center">
                          
                            <li className="list-inline-item"><a href="https://www.facebook.com/ivandebsartist/?epa=SEARCH_BOX();"><i className="fa fa-facebook" /></a></li>
                            <li className="list-inline-item"><a href="https://www.instagram.com/ivan.debs/?epa=SEARCH_BOX();"><i className="fa fa-instagram" /></a></li>
                          </ul>
                          </div> */}
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