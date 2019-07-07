import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Gallery } from './Gallery';
import { Events } from './Events';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
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
            <NavigationBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Gallery" component={Gallery} />
              <Route path="/Events" component={Events} />
              <Route path="/Contact" component={Contact} />
              <Route path="/NoMatch" component={NoMatch} />
            </Switch>
            <FooterPage/> 
          </Router>
        {/* </Layout> */}
      </React.Fragment>
    );
  }
}
export default App;
