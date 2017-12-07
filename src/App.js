import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import About from './About';
import Projects from './Projects/Projects';
import Details from './Projects/Details';
import Sketch from './Projects/Sketch';

import { Container, Heading, Icon } from 'reactbulma';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Container>
            <Heading>
              <h1 className="title is-2 has-text-centered">P5 Sketches</h1>
            </Heading>

            <Route exact path="/" component={Projects}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/projects/:id" component={Sketch}/>
            <Route exact path="/projects/:id/details" component={Details}/>
          </Container>
          
          <footer className="footer">
            <nav className="level">
              <div className="level-left">
                <div className="level-item">
                  2017 &copy; Magazzù Giuseppe  -
                </div>
                <div className="level-item">
                  The source code is licensed
                  <a id="lic" href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                </div>
              </div>

              <div className="level-right">
                <div className="level-item ext-links">
                  <Icon onClick={this.handleClick.bind(this)}>
                    <i className="fa fa-facebook fa-lg" href="https://www.facebook.com/giuseppe.magazzu1"/>
                  </Icon>
                  <Icon onClick={this.handleClick.bind(this)}>
                    <i className="fa fa-instagram fa-lg" href="https://www.instagram.com/giuseppe.magazzu"/>
                  </Icon>
                  <Icon onClick={this.handleClick.bind(this)}>
                    <i className="fa fa-github fa-lg" href="https://github.com/Darklod/p5-sketches-react"/>
                  </Icon>
                  <Icon onClick={this.handleClick.bind(this)}>
                    <i className="fa fa-linkedin fa-lg" href="https://www.linkedin.com/in/giuseppe-magazz%C3%B9-b862b714b/" />
                  </Icon>
                </div>
              </div>
            </nav>
          </footer>
        </div>
      </Router>   
    )
  }

  handleClick = (el) => {
    window.open(el.target.getAttribute('href'));
  }
}

/*

  <Link to="/about" className="is-pulled-right">About</Link>
  <Link to="/" className="is-pulled-left">Back</Link>

*/

export default App;
