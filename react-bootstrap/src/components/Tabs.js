import React from 'react';
import styled from 'styled-components';

import Pictures from './Pictures';
import Vvv from './Videos';


const Styles = styled.div `
div.tab{
  background-color: transparent;
}
div.tabs{
   margin: 150px auto;

}
.tab {
  margin: 100px auto;
}

`


export default class Tabs extends React.Component {
  state = {
    Videos:[]
}


async componentDidMount(){

    const response = await fetch('http://localhost:8000/videos/read');
    const result = await response.json();
    const Videos = result.data;
    this.setState({Videos})
  
  
  }
    render() {

        return (
           <Styles> <div className="tabs">
            <input type="radio" name="tabs" id="tabone" defaultChecked="checked" />
            <label htmlFor="tabone">Photos</label>
            <div className="tab">
            <Pictures />
            
            </div>
            <input type="radio" name="tabs" id="tabtwo" />
            <label htmlFor="tabtwo">Videos</label>
            <div className="tab">
            {this.state.Videos.map(p => (
                
                <Vvv Source={p.Source}/>  ))}
            
            </div>
           
          </div>
          </Styles>
        )
    }
}
