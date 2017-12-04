import React, {Component} from 'react';
import { Link } from 'react-router-dom';

const Project = (props) => (
    <div>
        <Link to={`/projects/${props.item}/details`}>
            Dettagli Progetto {props.item}
        </Link>
        <Link to={`/projects/${props.item}`}>
            Progetto {props.item}
        </Link>
    </div>
)

export default Project;