import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import './Lightbox.css';


class Pictures extends Component {
    state = {
        photoIndex: 0,
        isOpen: false,
        images: []
    }

    async componentDidMount() {
        const response = await fetch(`http://localhost:8000/gallery/read`);
        const result = await response.json();
        const images = result.data;
        console.log(images);
        this.setState({ images })
    }

    renderImages = () => {
        const images = this.state.images.map((imageSrc, index) => {
            const privateKey = imageSrc.id;
            return (
                <MDBCol md="4" key={privateKey}>
                    <figure>
                        <img src={imageSrc.name} alt="Gallery" className="img-fluid" onClick={() => {
                            this.setState({ photoIndex: index, isOpen: true })
                        }
                        }
                        />
                    </figure>
                </MDBCol>
            );
        })

        return images;
    }

    render() {
        const { photoIndex, isOpen, images } = this.state;
        console.log(this.state)
        return (
            <MDBContainer className="mt-5">
                <div className="mdb-lightbox no-margin">
                    <MDBRow>
                        {this.renderImages()}
                    </MDBRow>
                </div>
                {
                    console.log('image' ,images[photoIndex])
                }
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex].name}
                        nextSrc={images[(photoIndex + 1) % images.length].name}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length].name}
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
