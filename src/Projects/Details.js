import React from 'react';
import { } from 'react-router-dom';
import { Section, Box, Button } from 'reactbulma';

const Project = ({match}) => (
    <div>
        <Section>
            <div className="columns">
                <div className="column is-one-third">
                    <Box id="codice">
                        Codice
                    </Box>
                </div>
                <div className="column">
                    <Box>
                        <figure className="image is-2by1" id="preview">
                            <img src={`/sketches/${match.params.id}/thumbnail.webp`} alt="preview"/>
                        </figure>
                        <br/>
                        <h4 className="title is-4 has-text-dark">{match.params.id}</h4>
                        <p>Descrizione<br/>......................<br/>.......................<br/>..............</p>
                        <Button className="is-pulled-right is-info">
                            <a href={`/sketches/${match.params.id}`} className="has-text-white">Open</a>
                            {/*
                                <Link to={`/sketches/${match.params.id}`} className="has-text-white">
                                    Open
                                </Link>
                            */}
                        </Button>
                        <div className="is-clearfix"></div>
                    </Box>
                </div>
            </div>
        </Section>
    </div>
)

export default Project;