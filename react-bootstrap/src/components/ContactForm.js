import React from 'react';
import { Form, Button, Col } from "react-bootstrap";
import styled from 'styled-components';

const Styles = styled.div `
.container {
  background-image: url("skulls.png"),
  linear-gradient(to left, #a788a8, #6f3c89, #306493, #1b2b42);
  border-radius: 20px;
  padding: 25px;
  color: white;
  box-shadow: 3px 1px 10px 2px black;
  margin-top: 50px;
  }
  .form-control {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 25px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  text-shadow: 20px 20px 20px 10px black;
  background-image: url("skulls.png"),
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
  

`

const Contact1 = () => (
   <Styles>
          <div className="container">
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
          </Styles>
          
   
)
    
    export default Contact1;

