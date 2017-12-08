import React, { Component } from 'react';
import Row from './Row';

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = { arr: [[]] };
    }

    componentDidMount() {
        var tmp = [];
        
        for (var i = 0; i < this.props.list.length; i++) {
            if (i % 4 === 0) {
                tmp.push(this.props.list.slice(i, i + 4));
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
                    return <Row key={'row' + index} items={item}/>
                })}
            </div>
        )
    }
  }

export default Grid;