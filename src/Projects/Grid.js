import React from 'react';
import Project from './Project';

const Grid = (props) => (
    <div>
        <ul>
            {props.list.map((item, index) => {
                return <li><Project key={index} item={item} /></li>;
            })}
        </ul>
    </div>
)

export default Grid;