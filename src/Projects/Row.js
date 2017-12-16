import React from 'react';
import Project from './Project';

const Row = (props) => (
    <div className="columns">
        {props.items.map((item, index) => {
            return <div className="column is-one-quarter"><Project key={Math.random()} item={item} folder={props.folder}/></div>;
        })}
    </div>
)

export default Row;