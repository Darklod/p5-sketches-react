import React from 'react';
import {Icon} from 'reactbulma';

class ScrollToUp extends React.Component {
    constructor(props) {
        super(props);     
        this.handleScroll = this.handleScroll.bind(this);
    }

    render () {
        return (
            <div ref="up" className="up" onClick={() => this.scrollToTop()}>
                <Icon>
                    <i className="fa fa-chevron-up fa-lg"></i>
                </Icon>
            </div>
        )
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    scrollToTop () {
        window.scroll({
            behavior: 'smooth',
            left: 0,
            top: 0
        });
    }

    handleScroll(event) {
        var top = event.target.scrollingElement.scrollTop;
        this.refs.up.style.opacity = top/100;
    };
}

export default ScrollToUp;