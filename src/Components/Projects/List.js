import React, { Component } from 'react';
import Project from './Project';

class List extends Component {
    render() {
        return (
            <div className="columns is-multiline">
                {this.props.list &&
                    this.props.list.filter((item) => {
                        if (item.tags)
                            return item.tags.indexOf(this.props.filter) !== -1 || this.props.filter === null
                        else 
                            return item.is_folder;
                    })
                    .map((item, index) => {                
                        return (
                            <div className="column is-one-quarter" key={item.id}>
                                <Project item={item} {...this.props} />
                            </div>
                        )
                    })}
            </div>
        )
    }
}

export default List;