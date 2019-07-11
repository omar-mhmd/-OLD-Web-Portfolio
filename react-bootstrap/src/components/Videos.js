import React from "react";
import styled from 'styled-components';


const Styles = styled.div`

.vid{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
`

class Vvv extends React.Component {
    // state = {
    //     Videos:[]
    // }


    // async componentDidMount(){

    //     const response = await fetch('http://localhost:8000/videos/read');
    //     const result = await response.json();
    //     const Videos = result.data;
    //     this.setState({Videos})
      
      
    //   }
      
    render() {
        return (<Styles> <div className="vid">

         
         <iframe width={460} height={315} src={this.props.Source} frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        </div>
        </Styles>);
    }
}



export default Vvv;
