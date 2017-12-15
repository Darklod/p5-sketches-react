import React from 'react';
import { Button } from 'reactbulma/lib/components';

class Sketch extends React.Component {
    render () {
        return (
            <div id="wrapper">
                <Button danger onClick={() => this.props.history.goBack()}>
                    back
                </Button>
                <iframe title="sketch" src={`/sketches/${this.props.match.params.id}`} />
            </div>
        )
    }
}

export default Sketch;