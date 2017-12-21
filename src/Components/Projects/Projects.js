import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import List from './List';
import ScrollToTop from '../Utils/ScrollToTop';

import {Section,Box} from 'reactbulma';
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
            filter: null,
            match: false
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
                {this.props.match.params.folder &&
                <div className={"modal " + (!this.state.match && this.props.match.params.folder.toLowerCase() === 'specials'?"is-active":"")}>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                        <Box>
                            <h4 className="title is-5 has-text-black">Enter the password</h4>
                            <div className="field has-addons">
                                <p className="control has-icons-left is-expanded">
                                    <input className="input" type="password" id="pwd" placeholder="Password"/>
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-lock"></i>
                                    </span>
                                </p>
                            </div>
                            <div className="field is-grouped is-grouped-right">
                                <p className="control">
                                    <button className="button is-info" onClick={() => this.match()}>Go</button>
                                </p>
                                <p className="control">
                                    <Link to="/" className="button is-danger">Back</Link>
                                </p>
                            </div>
                        </Box>
                    </div>
                </div>}
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

    isFolder() {
        return this.props.match.params.folder !== 'sketches' && this.props.match.params.folder
    }

    match() {
        if (document.querySelector('#pwd').value === 'Ciao')
            this.setState({ match: true });
    }
}

// COSE.... filtri categorie... boh Elenco<br/><br/>

export default Projects;