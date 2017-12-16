import React, { Component } from 'react';
import Grid from './Grid';

import { Section, Icon } from 'reactbulma';
import { Redirect } from 'react-router-dom';

class Projects extends Component {
    constructor (props) {
        super(props);
        this.state = {
            projects: []
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentWillReceiveProps (newProps) {
        this.loadProjects(newProps);  
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

    componentDidMount() {      
        this.loadProjects(this.props);  
        window.addEventListener('scroll', this.handleScroll);
    };
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };
    
    scrollToTop () {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: 0
        });
    }

    handleScroll(event) {
        var top = event.target.scrollingElement.scrollTop;
        this.refs.up.style.opacity = top/100;
    };

    loadProjects (props) {
        var folder = '';
        var params = props.match.params;

        if (params.folder === 'sketches') params.folder = '';
        if (params.folder) folder = '/' + params.folder + '/';        

        fetch('/sketches' + folder + '/projects.json').then((res) => {
            return res.json()
        }).catch((ex) => {
            console.log(ex);
            this.setState({
                projects: <Redirect to="NoMatch"/>
            });
        }).then((data) => {
            if (data !== null)  
                this.setState({
                    projects: <Grid list={data} folder={params.folder} key={"grid"}/>
                });
        })
    }
}

// COSE.... filtri categorie... boh Elenco<br/><br/>

export default Projects;