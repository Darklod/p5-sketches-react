import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './About';
import Projects from './Projects/Projects';
import Details from './Projects/Details';
import Sketch from './Projects/Sketch';

import ScrollToTop from './ScrollToTop';
import Footer from './Footer';

import {Container, Heading} from 'reactbulma';

const NoMatch = ({location}) => (
  <div>
    <h3>No match for
      <code>{location.pathname}</code>
    </h3>
  </div>
)

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Container>
            <Heading>
              <h1 className="title is-2 has-text-centered">P5 Sketches</h1>
            </Heading>

            <Switch>
              <Route exact path="/" component={Projects}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/projects" component={Projects}/>
              <Route exact path="/projects/:id" component={Sketch}/>
              <Route exact path="/projects/:id/details" component={Details}/>
              <Route component={NoMatch}/>
            </Switch>
          </Container>

          <Footer/>
        </ScrollToTop>
      </Router>
    )
  }
}

export default App;
