import React from 'react'
import CarouselPage from './components/Slider';
import Alert from 'react-bootstrap/Alert'
import styled from 'styled-components';

const Styles = styled.div`
.hero{
 margin-bottom:450px;
}
.success{
    background-image: url('http://localhost:3000/images/skulls.png');}

}






.about {
  width: 80%;
  margin:auto;
  text-align: justify;
  border-radius: 20px;
  'background-image: url('http://localhost:3000/images/skulls.png'),
    linear-gradient(to left, #a788a8, #6f3c89, #306493, #1b2b42);
  color: white;
  box-shadow: 5px 5px 20px 5px black;
  padding: 30px;
  // margin-top: 150px;
  margin-bottom:200px;}


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

export const Home = () => (
  
    <div>
   
    <CarouselPage />
<Styles>
<div className="about">
      {/* <div className="aboutpic">
   <img
      className="d-block w-100"
      src= 'http://localhost:3000/images/2.png'
      alt="about me"
    /></div> */}
      <div className = "row" id="first-row">
  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
    <h3>More Info</h3>
    <p>I hope that everything is good,
      I don't use a CV because I never had the need to have one, the word of mouth was sufficient for me.
      Below is a small bio about myself:
      **
      Born in 1993 at Abidjan, capital of the Ivory Coast, Ivan Debs leaves Africa and moves to Lebanon to finish his studies.
      The passionate painter had to continue inevitably with this perspective, more precisely in the illustration field.
      Ivan spends most of his time drawing and playing music, that bonds completely with his work.
      A calm character combined with discretion, commitment and determination, finds its way to express itself through painting, seeking discovery and perfection.</p>
  </div>
  
  </div>
 

    </div>
    {/* <div className="hero">
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
</div> */}
</Styles>

    </div>
   
)


