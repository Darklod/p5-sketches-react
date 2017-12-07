import React from 'react';
import {Link} from 'react-router-dom';
import { Card, Content } from 'reactbulma'

const Project = (props) => (
    <Card>
        <Card.Image src='http://via.placeholder.com/1365x630' square='16by9' alt="thumbnail"/>
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