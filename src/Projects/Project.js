import React from 'react';
import {Link} from 'react-router-dom';

const Project = (props) => (
    <div>
        Questo è un progetto<br/>
        <img alt="thumbnail"/>
        <p>
            <Link to={`/projects/${props.item}/details`}>
                {props.item}
            </Link>
        </p>
    </div>
)

export default Project;