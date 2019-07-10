import React from "react";
import styled from 'styled-components';



const Styles = styled.div `

.vid{
    padding:20px;
    display: flex;
    flex-direction: column;
    width:100%;
 }
`


const Vvv = () => {
    return (
       <Styles>    
           <div className="viddiv">
                          <div className="row text-center text-xs-center text-sm-center text-md-center">

        <div className="text-center col-xs-12 col-sm-6 col-md-6 ">

       <iframe className="vid" width={460} height={315} src="https://www.youtube.com/embed/ZDJqrIsOohA" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />  {/* </div> */}
</div>
<div className="text-center col-xs-12 col-sm-6 col-md-6 ">

<iframe className="vid" width={460} height={315} src="https://www.youtube.com/embed/CG_VZJm3IXo" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
  </div>
  </div>
  </div>
  
   </Styles>
   );
}


export default Vvv;