import React from 'react';
import axios from 'axios';

class Article1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            location: '',
            size: '',
            anchor: '',
            avi: '',
            url: '',
            commCount: ''
        };
    }

    componentDidMount() {
        // Simple GET request using axios
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ title: response.data[0].title }));
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ location: response.data[0].thumbnail.location }));
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ size: response.data[0].thumbnail.images.medium }));
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ author: response.data[0].author.name }));
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ avi: response.data[0].author.avatar }));
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ url: response.data[0].url }));
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ commCount: response.data[0].comment_count }));
    }

    render() {
        return (
            <div class="app">
                <h3>{this.state.title}</h3>
                <img src= {this.state.location + this.state.size} alt="Article 1 Thumbnail"/>
                <img src={this.state.avi} alt="Author Avatar"/>
                <p>{this.state.author}</p><p>{this.state.commCount}</p><br></br>
                <a href= {this.state.url} >{this.state.url}</a>

            </div>
        );
    }
}

export { Article1 }; 