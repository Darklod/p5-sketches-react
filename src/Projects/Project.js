import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Content } from 'reactbulma'

const Project = (props) => (
    <Card>
        <Card.Image src={`/sketches/${props.item}/thumbnail.webp`} square='2by1' alt="thumbnail"/>
        <Card.Content>
            <Content>
                <span className="is-centered">
                    <Link to={`/projects/${props.item}/details`}>
                        {props.item}
                    </Link>
                </span>
            </Content>
        </Card.Content>
    </Card>
)

export default Project;