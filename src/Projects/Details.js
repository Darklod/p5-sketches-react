import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({match}) => (
    <Link to={`/projects/${match.params.id}`}>
        Progetto {match.params.id}
    </Link>
)

export default Project;