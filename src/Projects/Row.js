import React from 'react';
import Project from './Project';

const Row = (props) => (
    <div className="columns">
        {props.items.map((item, index) => {
            return <div className="column is-one-quarter"><Project key={index} item={item}/></div>;
        })}
    </div>
)

export default Row;