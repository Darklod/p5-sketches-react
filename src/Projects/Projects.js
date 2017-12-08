import React from 'react';
import Grid from './Grid';
import { Section, Icon } from 'reactbulma';

const Projects = () => (
    <Section>
        <div className="up">
            <Icon>
                <i className="fa fa-arrow-up fa-lg"></i>
            </Icon>
        </div>
        <Grid list={["Dragon Curve", "Fractal Trees", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O"]} key={0}/>
    </Section>
)

// COSE.... filtri categorie... boh Elenco<br/><br/>

export default Projects;