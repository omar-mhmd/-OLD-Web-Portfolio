// import React, { Component } from 'react';
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import Lightbox from "react-image-lightbox";
// import './Lightbox.css';


// class Pictures extends Component {
//     state = {
//         photoIndex: 0,
//         isOpen: false,
//         images: []
//     }

//     async componentDidMount() {
//         const response = await fetch(`http://localhost:8000/gallery/read`);
//         const result = await response.json();
//         const images = result.data;
//         console.log(images);
//         this.setState({ images })
//     }

//     renderImages = () => {
//         const images = this.state.images.map((imageSrc, index) => {
//             const privateKey = imageSrc.id;
//             return (
//                 <MDBCol md="4" key={privateKey}>
//                     <figure>
//                         <img src={imageSrc.name} alt="Gallery" className="img-fluid" onClick={() => {
//                             this.setState({ photoIndex: index, isOpen: true })
//                         }
//                         }
//                         />
//                     </figure>
//                 </MDBCol>
//             );
//         })

//         return images;
//     }

//     render() {
//         const { photoIndex, isOpen, images } = this.state;
//         console.log(this.state)
//         return (
//             <MDBContainer className="mt-5">
//                 <div className="mdb-lightbox no-margin">
//                     <MDBRow>
//                         {this.renderImages()}
//                     </MDBRow>
//                 </div>
//                 {
//                     console.log('image' ,images[photoIndex])
//                 }
//                 {isOpen && (
//                     <Lightbox
//                         mainSrc={images[photoIndex].name}
//                         nextSrc={images[(photoIndex + 1) % images.length].name}
//                         prevSrc={images[(photoIndex + images.length - 1) % images.length].name}
//                         imageTitle={photoIndex + 1 + "/" + images.length}
//                         onCloseRequest={() => this.setState({ isOpen: false })}
//                         onMovePrevRequest={() =>
//                             this.setState({
//                                 photoIndex: (photoIndex + images.length - 1) % images.length
//                             })
//                         }
//                         onMoveNextRequest={() =>
//                             this.setState({
//                                 photoIndex: (photoIndex + 1) % images.length
//                             })
//                         }
//                     />
//                 )}
//             </MDBContainer>
//         );
//     }
// }


// export default Pictures;

import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";

import "./Lightbox.css";
// import image1 from '../assets/1.jpeg';
// import image2 from '../assets/2.jpg'

class Pictures extends Component {
    state = {
        photoIndex: 0,
        isOpen: false,
        images: [
            // image1,
            // image2,
            'http://localhost:3000/images/3.jpg',
            'http://localhost:3000/images/4.jpg',
            'http://localhost:3000/images/5.jpg',
            'http://localhost:3000/images/6.png',
            'http://localhost:3000/images/2.jpg',
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
<<<<<<< HEAD
=======
                {
                    console.log('image', images[photoIndex])
                }
>>>>>>> 15f3dfa22fc00c9321c2dd28fb216ac9e23c0552
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
