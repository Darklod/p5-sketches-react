import React, { Component } from 'react';
import Project from './Project';

class List extends Component {
    render() {
        return (
            <div className="columns is-multiline">
                {this.props.list && this.props.list.map((item, index) => {                     
                    return (
                        <div className="column is-one-quarter" key={item.id}>
                            <Project item={item} {...this.props}/>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default List;