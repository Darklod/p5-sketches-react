import React from 'react';
import { Icon } from 'reactbulma';

class Footer extends React.Component {
    render () {
        return (
            <footer className="footer">
                <nav className="level">
                <div className="level-left">
                    <div className="level-item" id="lowspace">
                        2017 &copy; Magazzù Giuseppe -
                    </div>
                    <div className="level-item">
                        The source code is licensed
                        <a id="lic" href="http://opensource.org/licenses/mit-license.php">MIT</a>.
                    </div>
                </div>

                <div className="level-right">
                    <div className="level-item ext-links">
                    <Icon onClick={this.handleClick.bind(this)}>
                        <i className="fa fa-facebook fa-lg" id="facebook" href="https://www.facebook.com/giuseppe.magazzu1"/>
                    </Icon>
                    <Icon onClick={this.handleClick.bind(this)}>
                        <i className="fa fa-instagram fa-lg" id="instagram" href="https://www.instagram.com/giuseppe.magazzu"/>
                    </Icon>
                    <Icon onClick={this.handleClick.bind(this)}>
                        <i className="fa fa-github fa-lg" id="github" href="https://github.com/Darklod/p5-sketches-react"/>
                    </Icon>
                    <Icon onClick={this.handleClick.bind(this)}>
                        <i className="fa fa-linkedin fa-lg" id="linkedin" href="https://www.linkedin.com/in/giuseppe-magazz%C3%B9-b862b714b/" />
                    </Icon>
                    </div>
                </div>
            </nav>
        </footer>
        )
    }

    handleClick = (el) => {
        window.open(el.target.getAttribute('href'));
    }
}

export default Footer;