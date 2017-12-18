import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Projects from './Projects/Projects';
import Details from './Projects/Details';
import Sketch from './Projects/Sketch';

import AutoScrollToTop from './AutoScrollToTop';
import NoMatch from './NoMatch';
import Header from './Header';
import Footer from './Footer';

import {Container} from 'reactbulma';

class App extends Component {
  render() {
    return (
      <Router>
        <AutoScrollToTop>
          <Header/>

          <Container>
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
