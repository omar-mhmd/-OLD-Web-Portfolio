import React from 'react';
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";
import styled from 'styled-components';


const Styles = styled.div`

.slider1{
  height: 700px;
  width: 600px;
  margin-top:200px;
}

.d-block.w-100{
  height:700px;
  width:800px;
}

.pic{
  height:700px;
  width:800px;
}

.pic2{
  height:700px;
  width:800px;
}

.pic3{
  height:700px;
  width:800px;
}
`

const CarouselPage = () => {
  return (
    <Styles>
    <MDBContainer className="slider1">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="pic"
                src='http://localhost:3000/images/2.jpg'
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="pic2"
                src='http://localhost:3000/images/3.jpg'
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="pic3"
                src='http://localhost:3000/images/4.jpg'
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    </Styles>
  );
}

export default CarouselPage;