import React from 'react';
import {Link} from 'react-router-dom';
import {Card, Content} from 'reactbulma';
import LazyLoad from 'react-lazy-load';

class Project extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            url: ''
        }
        //this.srcset = `/sketches/${(this.props.folder?this.props.folder + '/':'') + this.props.item.name}/${this.getImage(50)} 500w`;
        //this.srcset +=  `, /sketches/${(this.props.folder?this.props.folder + '/':'') + this.props.item.name}/${this.getImage(100)} 1000w`;
    }

    render () {
        return (
            <Card>
                <LazyLoad offsetVertical={300}>
                    <Card.Image onClick={() => this.props.history.push(this.state.url)} 
                        src={`/sketches/${(this.props.folder?this.props.folder + '/':'') + this.props.item.name}/thumbnail-50.webp`} 
                        /*srcSet={this.srcset}
                        sizes="(min-width: 800px) 50vw, 100vw"*/
                        alt="thumbnail"/>
                </LazyLoad>
                <Card.Content>
                    <Content>
                        <span className="is-centered">
                            <Link to={this.state.url}>
                                {this.props.item.name[0].toUpperCase() + this.props.item.name.substring(1)}
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

    componentDidMount() {
        var url = '/projects/' + this.props.item.name.toLowerCase() + '';

        if (!this.props.item.is_folder) {
            url = '/projects/' + (this.props.folder.toLowerCase() || 'sketches') + '/' + this.props.item.name.toLowerCase() + '/details';
        }

        this.setState({ url })
    }

    getImage(size) {
        var support = this.supportWebP();

        switch(size) {
            case 100: return support ? 'thumbnail.webp' : 'thumbnail.jpg';
            case 25: return support ? 'thumbnail-25.webp': 'thumbnail-25.jpg';
            case 50: default: return support ? 'thumbnail-50.webp': 'thumbnail-50.jpg';
        }
    }

    supportWebP() {
        var elem = document.createElement('canvas');
    
        if (!!(elem.getContext && elem.getContext('2d')))
            return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
        return false;
    }
}
export default Project;