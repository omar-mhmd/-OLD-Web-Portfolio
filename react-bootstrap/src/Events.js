import React from 'react'
import ReactCardFlip from 'react-card-flip';
import CardFront from './components/CardFront';
import { Footer } from './components/Footer';
import styled from 'styled-components';

const Styles = styled.div `
   footer.footerr{
    background-color: red;
    position: relative;
    top: 600px;
    height: 280px;

}
`

export const Events = () => (
      <div>
        <div>
           <CardFront/> 
         </div>
         <Styles>
         <div><Footer /></div></Styles>
        </div>


       
    )
