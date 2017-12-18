import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import List from './List';
import ScrollToTop from '../ScrollToTop';

import {Section, Icon} from 'reactbulma';
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
                <nav className="breadcrumb is-right is-medium" aria-label="breadcrumbs">
                    {this.isFolder()?
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="is-active"><a aria-current="page">{this.props.match.params.folder}</a></li>
                    </ul>:null}
                </nav>
                <ProjectsList list={this.state.projects} folder={this.state.folder} />
                <ScrollToTop />
                {this.isFolder()?
                    <div className="left" onClick={() => this.props.history.goBack()}>
                        <Icon>
                            <i className="fa fa-chevron-left fa-lg"></i>
                        </Icon>
                    </div>
                :null}
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

    isFolder () {
        return this.props.match.params.folder !== 'sketches' && this.props.match.params.folder
    }
}

// COSE.... filtri categorie... boh Elenco<br/><br/>

export default Projects;