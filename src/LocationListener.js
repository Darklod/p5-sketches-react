import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class LocationListener extends React.Component {
    static contextTypes = {
        history: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.state = {
            bodyHeight: 0,
            windowHeight: 0
        }
    }

    componentDidMount() {
        this.props.history.listen((state) => {
            this.getHeight();
        });
    }

    componentWillReceiveProps(prev, next) {
        if (prev.bodyHeight !== next.bodyHeight || prev.windowHeight !== next.windowHeight)
            this.getHeight();
    }

    getHeight() {
        this.setState({
            windowHeight: window.innerHeight,
            bodyHeight: document.body.clientHeight
        }, () => this.stickyFooter());
    }

    stickyFooter() {
        var footer = document.querySelector('.footer');
        const greater = this.state.bodyHeight - footer.clientHeight > this.state.windowHeight;

        if (greater) {
            document.body.style.position = 'absolute';
            document.body.style.width = '100%';
            document.body.style.height = '100%';
            footer.classList.add('sticky-footer');
        } else {
            document.body.style.position = 'initial';
            document.body.style.width = 'initial';
            document.body.style.height = 'initial';
            footer.classList.remove('sticky-footer');
        }

        return greater;
    }

    render() {
        return null;
    }
}    
  
export default withRouter(LocationListener);