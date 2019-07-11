import React, { Component } from 'react'

import styled from 'styled-components';
import {MDBCol,MDBCard,MDBCardBody,MDBCardImage, MDBCardText, MDBCardTitle,MDBBtn} from 'mdbreact'

import { Card } from 'react-bootstrap';

const Styles = styled.div `
.card {
    position: relative;
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
