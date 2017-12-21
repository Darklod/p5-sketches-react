import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {Section, Box, Button} from 'reactbulma';

function Breadcrumb(props) {
    return (
        <ul>
            {props.folder && <li><Link to="/">Home</Link></li>}
            {props.folder !== 'sketches' && <li className={!props.sketch?"is-active":""}><Link to={"/projects/" + props.folder}>{props.folder}</Link></li>}
            {props.sketch && <li className="is-active"><a aria-current="page">{props.sketch}</a></li>}
        </ul>
    )
}

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            scripts: [],
            toggle: false,
            active: 0,
            loading: false,
            folder: null,
            path: null
        };
    }

    render() {
        return (
            <div>
                <Section>
                    <nav className="breadcrumb is-right is-medium" aria-label="breadcrumbs">
                        <Breadcrumb folder={this.props.match.params.folder} sketch={this.props.match.params.id} />
                    </nav>
                    <div className="columns">
                        <div className="column is-one-fifths"> 
                            <Box className="back">
                                <div className="columns">
                                    <div className="column">
                                        <Button className="wide" danger onClick={() => { this.props.history.goBack(); }}>Back</Button>
                                    </div>
                                    <div className="column">
                                        <Button className="wide" info onClick={() => { 
                                            this.setState({
                                                toggle: !this.state.toggle 
                                            }); }}>
                                            {this.state.toggle ? 'Sketch' : 'Scripts'}
                                        </Button>
                                    </div>
                                </div>
                            </Box>
                            {!this.state.toggle?'':
                            <Box id="scripts">
                                <aside className="menu">
                                    <p className="menu-label">Scripts</p>
                                    <ul className="menu-list">
                                        {this.state.scripts.map((script, i) => {
                                            return <li key={i}>
                                                <a className={this.state.active===i?'is-active':''} 
                                                    onClick={() => {
                                                        this.setState({
                                                            active: i
                                                        })
                                                    }}
                                                >{script.name}</a>
                                            </li>
                                        })}
                                    </ul>
                                </aside>
                            </Box>}
                        </div>
                        <div className="column is-four-fifths">
                            {!this.state.toggle?
                                <Box id="pan-sketch">
                                    <figure className="image is-2by1" id="preview">
                                        <img src={`${this.state.path + this.props.match.params.id}/thumbnail.webp`} alt="preview"/>
                                    </figure>
                                    <br/>
                                    <h4 className="title is-4 has-text-dark">{this.props.match.params.id[0].toUpperCase() + this.props.match.params.id.substring(1)}</h4>
                                    <p>{this.state.description}</p>
                                    
                                    <Button className="is-pulled-right is-info" onClick={()=>{ 
                                        this.setState({ loading: true });  
                                        setTimeout(()=> {
                                            this.props.history.push(`/projects${this.state.path + this.props.match.params.id}`);
                                        }, 1500);
                                    }}>
                                    Open
                                    </Button>
                                    <div className="is-clearfix"></div>
                                </Box>
                                :
                                <Box id="pan-scripts">
                                    {this.state.scripts.map((script, i) => {
                                        return (
                                            this.state.active === i ?
                                            <div key={i}>
                                                <h4 className="title is-4 has-text-dark">{script.name}</h4>
                                                <pre>{script.data}</pre>
                                            </div>
                                            : null
                                        )
                                    })}
                                </Box>
                            }
                        </div>
                    </div>
                    <div className={"pageloader " + (this.state.loading?'is-active':'')}><span className="title">Loading...</span></div>
                </Section>
                <br/>
            </div>
        )
    }

    componentWillUnmount() {
        this.setState({
            loading: false
        })
    }

    componentWillMount() {
        var path = "/sketches/";
        
        var folder = this.props.match.params.folder;
        if (folder === 'sketches') folder = null;
        if (folder !== null) path += folder + "/"; 

        this.setState({
            path,
            folder
        })
    }

    componentDidMount() {
        let f = this.state.path + this.props.match.params.id + '/';
        this.readInfo(f + 'info.json');
    }

    readInfo = file => {
        let folder = this.state.path + this.props.match.params.id + '/';

        console.log(folder);

        axios.get(file).then((res) => {
            this.setState({description: res.data.description})

            let scripts = [];
            let promises = [];
            res.data.scripts.forEach((script) => {
                promises.push(axios.get(folder + script).then((res) => {
                    scripts.push({name: script, data: res.data})
                }));
            });

            Promise.all(promises).then((res) => {
                this.setState({scripts: scripts})
            })
        }).catch((err) => {
            console.log('error', err)
        })
    }
}

export default Project;