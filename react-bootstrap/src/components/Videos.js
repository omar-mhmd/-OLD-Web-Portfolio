import React from "react";
import styled from 'styled-components';


const Styles = styled.div `

.vid{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
`


const Vvv = () => {
    return (
       <Styles> <div className="vid">
       <iframe width={460} height={315} src="https://www.youtube.com/embed/ZDJqrIsOohA" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
<iframe width={460} height={315} src="https://www.youtube.com/embed/CG_VZJm3IXo" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
   </div>
   </Styles>
   );
}


export default Vvv;
// 'use strict';

// import React, {Component} from 'react';

// class Example extends Component {
//     constructor (props) {
//         super(props);

//         this.state = {
//             videoURL: 'https://www.youtube.com/watch?v=-ESCZb3KAaM'
//         }
//     }

//     render () {
//         return (
//             <video id="background-video" loop autoPlay>
//                 <source src={this.state.videoURL} type="video/mp4" />
//                 <source src={this.state.videoURL} type="video/ogg" />
//                 Your browser does not support the video tag.
//             </video>
//         )
//     }
// };

// export default Example;