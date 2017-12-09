import React, { Component } from 'react';
import Grid from './Grid';
import { Section, Icon } from 'reactbulma';

class Projects extends Component {
    render () {
        return (
            <Section>
                <div ref="up" className="up" onClick={() => this.scrollToTop()}>
                    <Icon>
                        <i className="fa fa-chevron-up fa-lg"></i>
                    </Icon>
                </div>
                <Grid list={["Dragon Curve", "Fractal Trees", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O"]} key={0}/>
            </Section>
        )
    }

    scrollToTop () {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: 0
        });
    }

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };
    
    handleScroll(event) {
        var top = event.target.scrollingElement.scrollTop;
        this.refs.up.style.opacity = top/100;
    };
}

// COSE.... filtri categorie... boh Elenco<br/><br/>



export default Projects;