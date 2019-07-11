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
  color: white;
}
  
.icon-3d:hover { 
  font-size:70px;
  -webkit-animation: icon3d 200ms infinite;
  animation: icon3d 1500ms infinite;
}

@keyframes icon3d {
  0% {
    text-shadow: 5px 4px red, -5px -6px green;
  }
  25% {
    text-shadow: -5px -6px red, 5px 4px green;
  }
  50% {
    text-shadow: 5px -4px red, -8px 4px green;
  }
  75% {
    text-shadow: -8px -4px red, -5px -4px green;
  }
  100% {
    text-shadow: -5px 0 red, 5px -4px green;
  }
}
  i.icon-3d{
   font-size:50px;
   
}
 
// i.fa.fa-facebook {
//   font-size: 50px;
// }

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
 {/* <a href="https://www.facebook.com/ivandebsartist">
 <img src="https://img.icons8.com/color/48/000000/facebook-circled.png"/> */}
 {/* </a> */}
 <a className="k" href="https://www.facebook.com/ivandebsartist/" target="_blank">
 <i class="fa fa-facebook fa-x icon-3d"> </i></a>
<a className="k" href="https://www.instagram.com/ivan.debs/" target="_blank">
  <i class="fa fa-instagram fa-4x icon-3d"></i></a>
  </div> 
  </MDBContainer>


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

