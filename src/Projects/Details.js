import React from 'react';
import { Link } from 'react-router-dom';
import { Section, Container, Box, Button } from 'reactbulma';

const Project = ({match}) => (
    <div>
        <Section>
            <Container>
                <div className="columns">
                    <div className="column is-one-third">
                        <Box id="codice">
                            Codice
                        </Box>
                    </div>
                    <div className="column">
                        <Box>
                            <figure className="image is-16by9">
                                <img src="http://via.placeholder.com/1365x630" alt="preview"/>
                            </figure>
                            <br/>
                            <h4 className="title is-4 has-text-dark">Title</h4>
                            <p>Descrizione<br/>......................<br/>.......................<br/>..............</p>
                            <Button className="is-pulled-right is-info">
                                <Link to={`/projects/${match.params.id}`} className="has-text-white">
                                    Open
                                </Link>
                            </Button>
                            <div className="is-clearfix"></div>
                        </Box>
                    </div>
                </div>
            </Container>
        </Section>
    </div>
)

export default Project;