import React from 'react';
import styled from 'styled-components';

const Styles = styled.div `

.about {
  width: 60%;
  margin:auto;
  text-align: justify;
  border-radius: 20px;
  'background-image: url('http://localhost:3000/images/skulls.png'),
    linear-gradient(to left, #a788a8, #6f3c89, #306493, #1b2b42);
  color: white;
  box-shadow: 5px 5px 20px 5px black;
  padding: 30px;
  margin-top: 150px;
  margin-bottom:50px;}


  .aboutpic{
    margin-bottom:20px;
    
  }



.about h3 {
  border-bottom: 3px solid orange;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
}

.about p {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

`
const Eventsdetails = () => {
    return (
      <Styles>        <div >
<div className="about">
      <div className="aboutpic">
   <img
      className="d-block w-100"
      src= 'http://localhost:3000/images/pic1.jpg'
      alt="about me"
    /></div>
      <div className = "row" id="first-row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <h3>Beirut Film Festival 2019</h3>
    <p>BIFF 19th edition submissions are still open but will close the 30th of June! Don’t wait, Submit your Movie now! :grinning:</p>
  <p>August 8,2019</p>
  <p> Address: Pigier Gemmayzeh Andalusia Building </p>
  </div>

  
  </div>
 

    </div>
        </div>
        </Styles> 
    )
}

export default Eventsdetails;