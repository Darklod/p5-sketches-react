import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import About from './About';
import Projects from './Projects/Projects';
import Details from './Projects/Details';
import Project from './Projects/Project';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>

          <hr/>

          <Route exact path="/" component={Projects}/>
          <Route path="/about" component={About}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/projects/:id" component={Project}/>
          <Route path="/projects/:id/details" component={Details}/>
        </div>
      </Router>
    )
  }
}

export default App;
