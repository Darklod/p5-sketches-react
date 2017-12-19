import React from 'react';
import { Button, Box } from 'reactbulma';

class Sketch extends React.Component {
    render () {
        return (
            <div id="wrapper">
                <Box id="back">
                    <Button danger onClick={() => this.props.history.goBack()}>
                        Back
                    </Button>
                    <Button warning onClick={() => this.props.history.push('/')}>
                        Home
                    </Button>
                </Box>
                <iframe title="sketch" scrolling="no" src={`/sketches/${this.props.match.params.id}`} />
            </div>
        )
    }
}

export default Sketch;