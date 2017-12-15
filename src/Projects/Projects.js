import React, { Component } from 'react';
import Grid from './Grid';

import { Section, Icon } from 'reactbulma';

class Projects extends Component {
    constructor (props) {
        super(props);
        this.state = {
            projects: []
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    render () {
        return (
            <Section>
                <div ref="up" className="up" onClick={() => this.scrollToTop()}>
                    <Icon>
                        <i className="fa fa-chevron-up fa-lg"></i>
                    </Icon>
                </div>
                {this.state.projects}
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

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        fetch('/sketches/projects.json').then((res) => {
            return res.json()
        }).then((data) => {
            // console.log(data)
            data = data.filter((x) => x.indexOf('.') === -1);
            this.setState({
                projects: <Grid list={data} key={0}/>
            });
        })
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