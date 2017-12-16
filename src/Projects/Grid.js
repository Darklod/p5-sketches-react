import React, { Component } from 'react';
import Row from './Row';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = { arr: [[]] };
        this.columns = 4;
    }

    componentDidMount() {
        var tmp = [];
        
        for (var i = 0; i < this.props.list.length; i++) {
            if (i % this.columns === 0) {
                tmp.push(this.props.list.slice(i, i + this.columns));
            }
        }

        this.setState({
            arr: tmp
        });
    }

    render() {
        return (
            <div>
                {this.state.arr.map((item, index) => {                        
                    return <Row key={Math.random()} items={item} folder={this.props.folder}/>
                })}
            </div>
        )
    }
  }

export default Grid;