// import React, { Component } from 'react'

// import styled from 'styled-components';
// import {MDBCol,MDBCard,MDBCardBody,MDBCardImage, MDBCardText, MDBCardTitle,MDBBtn} from 'mdbreact'

// import { Card } from 'react-bootstrap';

// const Styles = styled.div `
// .card {
//     position: relative;
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

//         <MDBCol>
//         <MDBCard style={{ width: "22rem" }}>
//           <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
//           <MDBCardBody>
//             <MDBCardTitle>Card title</MDBCardTitle>
//             <MDBCardText>
//               Some quick example text to build on the card title and make
//               up the bulk of the card&apos;s content.
//             </MDBCardText>
//             <MDBBtn href="#">MDBBtn</MDBBtn>
//           </MDBCardBody>
//         </MDBCard>
//       </MDBCol>

    
//     )
// }
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import img1 from '../assets/pic1.jpg'
import img2 from '../assets/pic2.png';
import styled from 'styled-components';
// import CardFront1 from './components/CardFront1';


const Styles = styled.div`


.card:hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 1) !important;
}

.card-body {
    margin: 1rem !important;
}

.overflow {
    overflow: hidden;
}

.card-img-top {
    transform: scale(1);
    /* transform: transition 0.5s ease; */
    transition:  0.5s;
}
.card-img-top:hover {
    transform: scale(1.8);
}

.button {
     ${'' /* background-color: purple;
    border-color: black;
    border-style: 20px solid;
    padding: black;  */}
    border: 2px solid purple;
    font-weight: lighter;
    background-color: purple;
    color: white;
    padding: 8px 10px;
    border-radius: 10px;
    font-weight: 500;
}

.button:hover {
    background-color:#306493;
    border: 2px solid #306493;
    color: white;
    text-decoration: none;
    box-shadow: 3px 5px 10px 1px rgba(0, 0, 0, .5);
}

.container div {
    margin: 20px 0;
    border-radius: 30px;
}
.card1{
    margin-top:150px;
}
`

const Card1 = props => {
    return (

        <Styles>
       <div className="card1">
            <div className="container col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div>
                    <div className="card text-center shadow">
                        <div className="overflow">
                            <img src={img1} alt="Image1" className="card-img-top" />
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">Upcoming Events</h4>
                            <p ClassName="card-text text-secondary">Be part of my wacky world!</p>
                            <Link to='/Eventdetails' className='button'>More Details</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card text-center shadow">
                        <div className="overflow">
                            <img src={img2} alt="Image2" className="card-img-top" />
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">Previous Events</h4>
                            <p ClassName="card-text text-secondary">Check out what we did in the past!</p>
                            <Link to='/Eventdetails' className='button'>More Details</Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Styles>
    );

}

export default Card1;

