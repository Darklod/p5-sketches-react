import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Content} from 'reactbulma'

class Project extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            url: ''
        }
    }

    render () {
        return (
            <Card>
                <Card.Image onClick={() => this.props.history.push(this.state.url)} 
                            src={`/sketches/${(this.props.folder?this.props.folder + '/':'') + this.props.item.name}/thumbnail.webp`} 
                            square='2by1'
                            alt="thumbnail"/>
                <Card.Content>
                    <Content>
                        <span className="is-centered">
                            <Link to={this.state.url}>
                                {this.props.item.name}
                            </Link>
                        </span>
                        
                        <div className="tags is-right">
                            {
                                this.props.item.tags && this.props.item.tags.length !== 0 ? 
                                this.props.item.tags.map((tag, i) => {
                                    return <span key={i} className="tag is-dark" onClick={() => this.props.addFilter(tag)}>{tag}</span>; 
                                }):
                                <span className="tag hide"></span>
                            }
                        </div>
                    </Content>
                </Card.Content>
            </Card>
        )
    }

    componentDidMount () {
        var url = '/projects/' + this.props.item.name + '';

        if (!this.props.item.is_folder) {
            url = '/projects/' + (this.props.folder || 'sketches') + '/' + this.props.item.name + '/details';
        }

        this.setState({ url })
    }
}
export default Project;