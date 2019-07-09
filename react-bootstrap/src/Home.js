import React from 'react'
import CarouselPage from './components/Slider';
import Alert from 'react-bootstrap/Alert'
import styled from 'styled-components';

const Styles = styled.div`
.hero{
margin-bottom:150px;
background-image: url('http://localhost:3000/images/skulls.png');}
.success{
    background-image: url('http://localhost:3000/images/skulls.png');}

}




`

export const Home = () => (
  
    <div>
   
    <CarouselPage />
<Styles>
    <div className="hero">
    <Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>
</div>
</Styles>

    </div>
   
)


