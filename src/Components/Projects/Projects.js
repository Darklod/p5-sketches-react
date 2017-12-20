import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import List from './List';
import ScrollToTop from '../Utils/ScrollToTop';

import {Section} from 'reactbulma';
import axios from 'axios';


function ProjectsList(props) {
    const list = props.list;

    if (list && list.length) {
        return <List {...props} key={"list"}/>
    } else {
        return null;
    }
}

function Breadcrumb(props) {
    return (
        <ul>
            {props.folder && <li><Link to="/">Home</Link></li>}
            {props.folder && <li className={!props.sketch?"is-active":""}><a aria-current="page">{props.folder}</a></li>}
            {props.sketch && <li className="is-active"><a aria-current="page">{props.sketch}</a></li>}
        </ul>
    )
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
                        <Breadcrumb folder={this.props.match.params.folder} sketch={this.props.match.params.id}/>
                    </nav>
                </div>
                <ProjectsList list={this.state.projects} 
                              filter={this.state.filter} 
                              addFilter={this.addFilter} 
                              folder={this.state.folder} 
                              {...this.props}/>
                <ScrollToTop />
                {/*this.isFolder()?
                    <div className="left" onClick={() => this.props.history.goBack()}>
                        <Icon>
                            <i className="fa fa-chevron-left fa-lg"></i>
                        </Icon>
                    </div>
                :null*/}
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