import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Gallery } from './Gallery';
import  Events  from './Events';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import Eventsdetails from './Eventdetails'
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import  FooterPage from './components/Footer';
import Contact1 from './components/ContactForm';
import './App.css';






class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <Layout> */}
          <Router>
            <div class="site-contents">
            <NavigationBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Gallery" component={Gallery} />
              <Route path="/Events" component={Events} />
              <Route path="/Contact" component={Contact} />
              <Route path="/NoMatch" component={NoMatch} />
              <Route path="/Eventdetails" component={Eventsdetails} />
            </Switch>
            </div>
            <FooterPage/> 
          </Router>
        {/* </Layout> */}
      </React.Fragment>
    );
  }
}
export default App;
