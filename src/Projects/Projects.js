import React, { Component } from 'react';
import List from './List';
import ScrollToUp from '../ScrollToUp';

import {Section} from 'reactbulma';
//import {Redirect} from 'react-router-dom';
import axios from 'axios';


function ProjectsList(props) {
    const list = props.list;
    const folder = props.folder;

    if (list && list.length) {
        return <List list={list} folder={folder} key={"list"}/>
    } else {
        return null;
    }
}

class Projects extends Component {
    constructor (props) {
        super(props);
        this.state = {
            projects: [],
            folder: 'sketches'
        }
    }

    render () {
        return (
            <Section>
                <ProjectsList list={this.state.projects} folder={this.state.folder} />
                <ScrollToUp />
            </Section>
        )
    }

    componentWillReceiveProps (newProps) {
        var params = newProps.match.params;

        if (params.folder !== this.state.folder)
            this.setState({ folder: params.folder || 'sketches' }, (folder) => this.loadProjects(this.state.folder));
    }

    componentDidMount() {   
        this.setState({ folder: this.props.match.params.folder || 'sketches' }, (folder) => this.loadProjects(this.state.folder));
    }
    
    loadProjects (folder) {
        const url = '/sketches' + (folder === 'sketches'? '':'/'+ folder) + '/projects.json';
        axios.get(url).then((res) => {
            if (res.data !== null)
            {   
                folder = folder === 'sketches' ? '': folder 
                this.setState({
                    projects: res.data,
                    folder
                });
            }
        }).catch((ex) => {
            console.log(ex);
            this.setState({
                projects: null
            });
        })
    }
}

// COSE.... filtri categorie... boh Elenco<br/><br/>

export default Projects;