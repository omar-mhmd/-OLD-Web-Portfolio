import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";

import "./Lightbox.css";
// import image1 from '../assets/1.jpeg';
// import image2 from '../assets/2.jpg';

class Pictures extends Component {
    state = {
        photoIndex: 0,
        isOpen: false,
        images: [
            // image1,
            // image2,
            'http://localhost:3000/images/1.jpg',
            'http://localhost:3000/images/2.jpg',
            'http://localhost:3000/images/3.jpg',
            'http://localhost:3000/images/4.jpg',
            'http://localhost:3000/images/5.jpg',
            'http://localhost:3000/images/6.png',
            'http://localhost:3000/images/7.png',
            'http://localhost:3000/images/8.jpg',
            'http://localhost:3000/images/9.jpg',
            
            
        ]
    }

    renderImages = () => {
        let photoIndex = -1;
        const { images } = this.state;

        return images.map(imageSrc => {
            photoIndex++;
            const privateKey = photoIndex;
            return (
                <MDBCol md="4" key={photoIndex}>
                    <figure>
                        <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={() =>
                            this.setState({ photoIndex: privateKey, isOpen: true })
                        }
                        />
                    </figure>
                </MDBCol>
            );
        })
    }

    render() {
        const { photoIndex, isOpen, images } = this.state;
        return (
            <MDBContainer className="mt-5">
                <div className="mdb-lightbox no-margin">
                    <MDBRow>
                        {this.renderImages()}
                    </MDBRow>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                        }
                    />
                )}
            </MDBContainer>
        );
    }
}


export default Pictures;

// import Image1 from '../assets/2.jpg';
// import Image2 from '../assets/3.jpg';
// import Image3 from '../assets/4.jpg';

// export const Pictures = () => (
//     <div>
//         <div>
//             <div className="gallery">
//                 <a target="_blank">
//                     <img src={Image1} alt="Cinque Terre" width={600} height={400} />
//                 </a>

//             </div>
//             <div className="gallery">
//                 <a target="_blank">
//                     <img src={Image2} alt="Forest" width={600} height={400} />
//                 </a>

//             </div>
//             <div className="gallery">
//                 <a target="_blank">
//                     <img src={Image3} alt="Northern Lights" width={600} height={400} />
//                 </a>

//             </div>


//         </div>

//     </div>
// )