import React, { Component } from 'react';
import axios from 'axios';

import {Section, Box, Button } from 'reactbulma';

class Project extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: '',
            scripts: [],
            toggle: false,
            active: 0,
            loading: false
        };
    }

    render() {
        return (
            <div>
                <Section>
                    <div className="columns">
                        <div className="column is-narrow"> 
                            <Box className="back">
                                <div className="columns">
                                    <div className="column">
                                        <Button className="wide" danger onClick={() => { this.props.history.push('/') }}>Back</Button>
                                    </div>
                                    <div className="column">
                                        {/*
                                            <div className="field">
                                                <input id="switchExample" type="checkbox" className="switch is-medium" 
                                                        onChange={() => { 
                                                            this.setState({
                                                                toggle: !this.state.toggle 
                                                            }); 
                                                        }}
                                                        checked={this.state.toggle}/>
                                                <label htmlFor="switchExample">{this.state.toggle?'Sketch':'Scripts'}</label>
                                            </div>
                                        */}
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
                                            return <li>
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
                        <div className="column is-three-quarters">
                            {!this.state.toggle?
                                <Box id="pan-sketch">
                                    <figure className="image is-2by1" id="preview">
                                        <img src={`/sketches/${this.props.match.params.id}/thumbnail.webp`} alt="preview"/>
                                    </figure>
                                    <br/>
                                    <h4 className="title is-4 has-text-dark">{this.props.match.params.id}</h4>
                                    <p>{this.state.description}</p>
                                    
                                    <Button className="is-pulled-right is-info" onClick={()=>{ 
                                        this.setState({ loading: true });  
                                        setTimeout(()=> {
                                            this.props.history.push(`/projects/${this.props.match.params.id}`);
                                            // window.location.href = `/sketches/${this.props.match.params.id}`;
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
                                            <div>
                                                <h4 className="title is-4 has-text-dark">{script.name}</h4>
                                                <pre>{script.data}</pre>
                                            </div>
                                            : ''
                                        )
                                    })}
                                </Box>
                            }
                            
                            <div className={"pageloader " + (this.state.loading?'is-active':'')}><span className="title">Loading...</span></div>
                        </div>
                    </div>
                </Section>
            </div>
        )
    }

    componentWillUnmount() {
        this.setState({
            loading: false
        })
    }

    componentDidMount() {
        let folder = '/sketches/' + this.props.match.params.id + '/';
        this.readInfo(folder + 'info.json');
    }

    readInfo = file => {
        let folder = '/sketches/' + this.props.match.params.id + '/';

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
                // console.log(res)
                this.setState({scripts: scripts})
            })
        }).catch((err) => {
            console.log('error', err)
        })
    }
}

export default Project;