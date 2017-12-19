import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import List from './List';
import ScrollToTop from '../Utils/ScrollToTop';

import {Section, Icon} from 'reactbulma';
import axios from 'axios';


function ProjectsList(props) {
    const list = props.list;

    if (list && list.length) {
        return <List {...props} key={"list"}/>
    } else {
        return null;
    }
}

class Projects extends Component {
    constructor (props) {
        super(props);
        this.state = {
            projects: [],
            folder: 'sketches',
            filter: null
        }
        this.addFilter = this.addFilter.bind(this);
    }

    render () {
        return (
            <Section>
                <div className="top-nav">
                    <nav className="breadcrumb is-right is-medium" aria-label="breadcrumbs">
                        {this.state.filter &&
                        <div className="tags has-addons">
                            <span className="tag is-info">{this.state.filter}</span>
                            <a className="tag is-delete is-dark" onClick={() => this.removeFilter()}> </a>
                        </div>}
                        {this.isFolder() &&
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li className="is-active"><a aria-current="page">{this.props.match.params.folder}</a></li>
                        </ul>}
                    </nav>
                </div>
                <ProjectsList list={this.state.projects} filter={this.state.filter} addFilter={this.addFilter} folder={this.state.folder} />
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
    
    loadProjects(folder) {
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

    addFilter(tag) {
        this.setState({ filter: tag });
    }
    removeFilter() {
        this.setState({ filter: null });
    }

    isFolder () {
        return this.props.match.params.folder !== 'sketches' && this.props.match.params.folder
    }
}

// COSE.... filtri categorie... boh Elenco<br/><br/>

export default Projects;