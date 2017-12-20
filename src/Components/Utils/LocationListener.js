import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class LocationListener extends React.Component {
    static contextTypes = {
        history: PropTypes.object,
    };

    componentDidMount() {
        this.props.history.listen((state) => {
            console.log(state);
        });
    }

    render() {
        return null;
    }
}    
  
export default withRouter(LocationListener);