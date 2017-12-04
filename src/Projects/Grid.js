import React, {Component} from 'react';
import Project from './Project';

const Grid = (props) => (
    <div>
        <ul>
            {props.list.map(function (item) {
                return <li><Project item={item} /></li>;
            })}
        </ul>
    </div>
)

export default Grid;