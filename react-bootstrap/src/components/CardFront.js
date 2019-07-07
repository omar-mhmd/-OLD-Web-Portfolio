// import React from 'react'

// import styled from 'styled-components';

// // export default class CardFront extends Component {
// //     render() {
// //         return (
// //             <div>
// //                 <Card style={{ width: '18rem' }}>
// //   <Card.Img variant="top" src="http://localhost:3000/images/3.jpg/2100px180" />
// //   <Card.Body>
// //     <Card.Title>Card Title</Card.Title>
// //     <Card.Text>
// //       Some quick example text to build on the card title and make up the bulk of
// //       the card's content.
// //     </Card.Text>

// //   </Card.Body>
// // </Card>
// //             </div>
// //         )
// //     }
// // }

// const Styles = styled.div `
// .card {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%,-50%);
//     width: 360px;
//     height: 400px;
//     background: #000;
// }
// @media only screen and (max-width: 700px) { 
//     .card{
//         position: relative;
//         top: 300px;
//         width: auto;
//         height:auto;
//     }
// }
// .card .image {
//     width: 100%;
//     height: 100%;
//     overflow: hidden;
// }
// .card .image img {
//     width: 100%;
//     transition: .5s;
// }
// .card:hover .image img {
//     opacity: .5;
//     transform: translateX(30%);/*100%*/
// }
// .card .details {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 70%;/*100%*/
//     height: 100%;
//     background: #ffc107;
//     transition: .5s;
//     transform-origin: left;
//     transform: perspective(2000px) rotateY(-90deg);
// }
// .card:hover .details {
//     transform: perspective(2000px) rotateY(0deg);
// }
// .card .details .center {
//     padding: 20px;
//     text-align: center;
//     background: #fff;
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
// }
// .card .details .center h1 {
//     margin: 0;
//     padding: 0;
//     color: #ff3636;
//     line-height: 20px;
//     font-size: 20px;
//     text-transform: uppercase;
// }
// .card .details .center h1 span {
//     font-size: 14px;
//     color: #262626;
// }
// .card .details .center p {
//     margin: 10px 0;
//     padding: 0;
//     color: #262626;
// }
// .card .details .center ul {
//     margin: 10px auto 0;
//     padding: 0;
//     display: table;
// }
// .card .details .center ul li {
//     list-style: none;
//     margin: 0 5px;
//     float: left;
// }
// .card .details .center ul li a {
//     display: block;
//     background: #262626;
//     color: #fff;
//     width: 30px;
//     height: 30px;
//     line-height: 30px;
//     text-align: center;
//     transform: .5s;
// // }
// .card .details .center ul li a:hover {
//     background: #ff3636;
// }`

// export default function CardFront() {
//     return (
//         <Styles><div>
//             <div className="card">
//                 <div className="image">
//                     <img src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg" alt="Events card"/>
//                 </div>
//                 <div className="details">
//                     <div className="center">
//                         <h1>Someone famous<br /><span>team leader</span></h1>
//                         <p>Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
//                         <ul>
//                             <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
//                             <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
//                             <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true" /></a></li>
//                             <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
//                             <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//         </div>
//         </Styles>
//     )
// }





// // export default function CardFront() {
// //     return (
      
// //         <div>
// //         <div className="card-wrapper">
// //           <div id="card-2" className="card card-rotating text-center">
// //             {/*Front Side*/}
// //             <div className="face front">
// //               {/* Image*/}
// //               <div className="view overlay">
// //                 <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo5.jpg" alt="Example photo" />
// //                 <a>
// //                   <div className="mask rgba-white-slight" />
// //                 </a>
// //               </div>
// //               {/*Content*/}
// //               <div className="card-body">
// //                 <a className="rotate-btn float-right" data-card="card-2"><i className="fas fa-share-alt fa-lg" /></a>
// //                 <h4 className>Card title</h4>
// //                 <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat tenetur odio suscipit
// //                   non commodi vel eius veniam maxime.</p>
// //                 <a className="link-text">
// //                   <h5>Read more <i className="fas fa-angle-double-right" /></h5>
// //                 </a>
// //               </div>
// //             </div>
// //             {/*Front Side*/}
// //             {/*Back Side*/}
// //             <div className="face back">
// //               {/* Content */}
// //               <div className="content text-center">
// //                 <h4 className="card-title font-weight-bold my-4">Social shares <i className="fas fa-times rotate-btn text-muted" data-card="card-2" /></h4>
// //                 <hr />
// //                 {/* Social Icons */}
// //                 <ul className="list-unstyled list-inline d-flex justify-content-center flex-wrap mt-4 py-2">
// //                   <li className="list-inline-item"><a className="btn-floating btn-dribbble"><i className="fab fa-dribbble"> </i></a></li>
// //                   <li className="list-inline-item"><a className="btn-floating btn-slack"><i className="fab fa-slack-hash"> </i></a></li>
// //                   <li className="list-inline-item"><a className="btn-floating btn-ins"><i className="fab fa-instagram"> </i></a></li>
// //                   <li className="list-inline-item"><a className="btn-floating btn-pin"><i className="fab fa-pinterest"> </i></a></li>
// //                   <li className="list-inline-item"><a className="btn-floating btn-tw"><i className="fab fa-twitter"> </i></a></li>
// //                   <li className="list-inline-item"><a className="btn-floating btn-gplus"><i className="fab fa-google-plus-g"> </i></a></li>
// //                   <li className="list-inline-item"><a className="btn-floating btn-git"><i className="fab fa-github"> </i></a></li>
// //                 </ul>
// //                 <h5 className="font-weight-bold my-4">Join our community</h5>
// //                 <hr />
// //                 {/* Social Icons */}
// //                 <ul className="list-unstyled list-inline d-flex justify-content-center flex-wrap mt-4">
// //                   <li className="list-inline-item"><a className="btn btn-fb px-4"><i className="fab fa-facebook-f"> </i></a></li>
// //                   <li className="list-inline-item"><a className="btn btn-tw px-4"><i className="fab fa-twitter"> </i></a></li>
// //                   <li className="list-inline-item"><a className="btn btn-li px-4"><i className="fab fa-linkedin-in"> </i></a></li>
// //                   <li className="list-inline-item"><a className="btn btn-ins px-4"><i className="fab fa-instagram"> </i></a></li>
// //                 </ul>
// //               </div>
// //             </div>
// //             {/*Back Side*/}
// //           </div>
// //         </div>
// //         </div>  
// //     )
// // }
import React, { Component } from 'react'

import styled from 'styled-components';
import {MDBCol,MDBCard,MDBCardBody,MDBCardImage, MDBCardText, MDBCardTitle,MDBBtn} from 'mdbreact'

import { Card } from 'react-bootstrap';

const Styles = styled.div `
.card {
    position: relative;
   ${'' /*  top: 50%;
    left: 50%;
    transform: translate(-50%,-50%); */}
    width: 360px;
    height: 400px;
    background: #000;
}

@media only screen and (max-width: 700px) { 
    .card{
        position: relative;
        top: 300px;
        width: auto;
        height:auto;
    }
}
.card .image {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.card .image img {
    width: 100%;
    transition: .5s;
}
.card:hover .image img {
    opacity: .5;
    transform: translateX(30%);/*100%*/
}
.card .details {
    position: absolute;
    top: 0;
    left: 0;
    width: 70%;/*100%*/
    height: 100%;
    background: #ffc107;
    transition: .5s;
    transform-origin: left;
    transform: perspective(2000px) rotateY(-90deg);
}
.card:hover .details {
    transform: perspective(2000px) rotateY(0deg);
}
.card .details .center {
    padding: 20px;
    text-align: center;
    background: #fff;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.card .details .center h1 {
    margin: 0;
    padding: 0;
    color: #ff3636;
    line-height: 20px;
    font-size: 20px;
    text-transform: uppercase;
}
.card .details .center h1 span {
    font-size: 14px;
    color: #262626;
}
.card .details .center p {
    margin: 10px 0;
    padding: 0;
    color: #262626;
}
.card .details .center ul {
    margin: 10px auto 0;
    padding: 0;
    display: table;
}
.card .details .center ul li {
    list-style: none;
    margin: 0 5px;
    float: left;
}
.card .details .center ul li a {
    display: block;
    background: #262626;
    color: #fff;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    transform: .5s;
// }
.card .details .center ul li a:hover {
    background: #ff3636;
}`
export default function CardFront() {
    return (

        <MDBCol>
        <MDBCard style={{ width: "22rem" }}>
          <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
          <MDBCardBody>
            <MDBCardTitle>Card title</MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the card title and make
              up the bulk of the card&apos;s content.
            </MDBCardText>
            <MDBBtn href="#">MDBBtn</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    
    )
}
