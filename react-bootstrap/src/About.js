import React from "react"

import Info from './components/Info';

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

  .w-100{
    // margin-top:-30px;
  }
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


export  class About extends React.Component{
  render() {
    return (
     <Styles><Info /></Styles>
    )
  }
}
