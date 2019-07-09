import React from 'react';
import { Form, Button, Col } from "react-bootstrap";
import styled from 'styled-components';
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';



const Styles = styled.div `
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
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
.container {
background-image: url('http://localhost:3000/images/skulls.png'),
linear-gradient(to left, #a788a8, #6f3c89, #306493, #1b2b42);
border-radius: 20px;
padding: 25px;
color: white;
box-shadow: 3px 1px 10px 2px black;
margin-top: 50px;
margin-bottom: 50px;
}
.form-control {
background-color: rgba(0, 0, 0, 0.2);
padding: 25px;
color: white;
font-weight: bold;
font-size: 20px;
font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
text-shadow: 20px 20px 20px 10px black;
background-image: url('http://localhost:3000/images/skulls.png'),
linear-gradient(to left, #a788a8, #6f3c89, #306493, #1b2b42);
border: 2px solid white;
box-shadow: 3px 3px 20px 0.1px white;
}

.container i {
font-size: 30px;
margin-left: 20px;
padding: 5px;
line-height: 35px;
}
.form{

  
    margin-top:150px;
  }
  // .contacth2 {
  //   text-align: center;
  // }
  .m:hover{
   font-size:60px;
    color:blue;

  }
  .m{
    font-size:50px;
    text-decoration: none;

  }
 a:link{
  font-size:50px;
   

 }
.btn-floating {
  text-decoration: none;

}
.fa-facebook{
  font-size:50px;
}







.flex-center {
  // width: 100%;
  // min-height: 50vh;
  // background: #222222;
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
  color: black;}
  
.icon-3d:hover {
  font-size:70px;
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

const Contact1 = () => (
   <Styles>
     <div className="form">

        <div className="text-center col-xs-12 col-sm-4 col-md-4 ">

                      </div>
          <div className="container">

          <h1 className="text-center">Contact Me</h1>
          <h3 className="text-center"> Please do not hesitate to contact me directly. 

</h3>
<MDBContainer>
 <div class="flex-center"> 
<a href="https://www.facebook.com/ivandebsartist/">
<i class="fa fa-facebook fa-4x icon-3d"> </i></a>
<a href="https://www.instagram.com/ivan.debs/">
  <i class="fa fa-instagram fa-4x icon-3d"></i></a>
  </div>
  </MDBContainer>
{/* 
 <div className="social">
                           <ul className="text-center  list-unstyled list-inline social text-center">
                          
                            <li className="list-inline-item"><a href="https://www.facebook.com/ivandebsartist/?epa=SEARCH_BOX();"><i className="fa fa-facebook" /></a></li>
                            <li className="list-inline-item"><a href="https://www.instagram.com/ivan.debs/?epa=SEARCH_BOX();"><i className="fa fa-instagram" /></a></li>
                          </ul>
                          </div> */}
{/* <MDBContainer className="text-center">
<a className="aaa" href="https://www.facebook.com/ivandebsartist/" target="_blank">
  <MDBBtn  size="lg" tag="a" floating social="fb">
        <MDBIcon className="m" fab icon="facebook-f" />
       */}
        
      {/* </MDBBtn>
      </a>
      <a  className="aaa" href="https://www.instagram.com/ivan.debs/" target="_blank">
      <MDBBtn size="lg" tag="a" floating social="ins">
        <MDBIcon className="m" fab icon="instagram" />
      </MDBBtn>
      </a>
      </MDBContainer> */}

            <Form>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  <i className="fas fa-portrait" />
                </Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
    
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  <i className="fas fa-portrait" />
                </Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  <i className="fas fa-envelope" />
                </Form.Label>
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
    
              <Form.Group as={Col} controlId="formGridEmail">
                <label for="exampleFormControlTextarea1" />
                <textarea
                  className="form-control rounded-0"
                  id="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </Form.Group>
              <Button variant="danger" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          </div>
          </Styles>
          
   
)
    
    export default Contact1;

