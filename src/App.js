import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Projects from './Components/Projects/Projects';
import Details from './Components/Projects/Details';
import Sketch from './Components/Projects/Sketch';

import LocationListener from './Components/Utils/LocationListener';
import AutoScrollToTop from './Components/Utils/AutoScrollToTop';
import NoMatch from './Components/NoMatch';
import Header from './Components/Header';
import Footer from './Components/Footer';

import {Container} from 'reactbulma';

class App extends Component {
  render() {
    return (
      <Router>
        <AutoScrollToTop>
        <LocationListener {...this.props}/>
        <Header/>
          <Container id="content">
            <Switch>
              <Route exact path="/" component={Projects}/>
               
              <Route exact path="/projects/:folder?" component={Projects}/>
              <Route exact path="/projects/:folder/:id" component={Sketch}/>
              <Route exact path="/projects/:folder/:id/details" component={Details}/>

              <Route component={NoMatch}/>
            </Switch>
          </Container>
          <Footer/>
        </AutoScrollToTop>
      </Router>
    )
  }
}

export default App;
