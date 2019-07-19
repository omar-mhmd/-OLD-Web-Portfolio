import React from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import styled from 'styled-components';
import Carousel from "react-bootstrap/Carousel"


const Styles = styled.div`
li{
  button:type:radio;
}
 .s{
  // text:align :center;
  margin: 150px auto;
   width:75%;
    max-width: 800px;
   height:100%;
   z-index: -999  ;


}
.s img {
  max-height: 500px !important;
}


// @media only screen 
//   and (min-device-width: 768px) 
//   and (max-device-width: 1024px) 
//   and (-webkit-min-device-pixel-ratio: 1) {
//     .s{
//       margin: 0 auto;


//     }

// }
// @media screen 
//   and (device-width: 360px) 
//   and (device-height: 640px) 
//   and (-webkit-device-pixel-ratio: 2) {
//    s.{
//     margin: 0 auto;
//     width:360px;

//    }

// }
 


`

const CarouselPage = () => {
  return (
    <Styles>

      <div className="s">
      <Carousel className="s1">
  <Carousel.Item className="slider">
    <img
      className="d-block w-100"
      src= 'http://localhost:3000/images/2.png'
      alt="First slide"
    />
    <Carousel.Caption className="c"> 
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slider">
    <img
      className="d-block w-100"
      src='http://localhost:3000/images/9.jpg'

      alt="Third slide"
    />

    <Carousel.Caption className="c">
    
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="slider">
    <img
      className="d-block w-100"
      src='http://localhost:3000/images/3.png'
      alt="Third slide"
    />

    <Carousel.Caption className="c">
     
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
</Styles>
    // // {/* <MDBContainer className="slider1">
    //   <MDBCarousel className="2"
    //     activeItem={1}
    //     length={3}
    //     showControls={true}
    //     showIndicators={true}
    //     className="z-depth-1"
    //   >
    //     <MDBCarouselInner>
    //       <MDBCarouselItem itemId="1">
    //         <MDBView className="z">
    //           <img
    //             className="pic"
    //             src='http://localhost:3000/images/5.jpg'
    //             alt="First slide"
    //           />
    //         </MDBView>
    //       </MDBCarouselItem>
    //       <MDBCarouselItem itemId="2">
    //         <MDBView>
    //           <img
    //             className="pic2"
    //             src='http://localhost:3000/images/6.png'
    //             alt="Second slide"
    //           />
    //         </MDBView>
    //       </MDBCarouselItem>
    //       <MDBCarouselItem itemId="3">
    //         <MDBView>
    //           <img
    //             className="pic3"
    //             src='http://localhost:3000/images/8.jpg'
    //             alt="Third slide"
    //           />
    //         </MDBView>
    //       </MDBCarouselItem>
    //     </MDBCarouselInner>
    //   </MDBCarousel>
    // </MDBContainer> */}
    
  );
}

export default CarouselPage;