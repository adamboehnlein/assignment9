import React from 'react';
import axios from 'axios';

class Article2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: null,
            img1A: null,
            img1B: null,
            anchor: null,
            avatar: null,
            url: null,
            commCount: null
        };
    }

    componentDidMount() {
        // Simple GET request using axios
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ title: response.data[1].title }));
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ img1A: response.data[1].thumbnail.location }));
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ img1B: response.data[1].thumbnail.images.medium }));
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ author: response.data[1].author.name }));
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ avatar: response.data[1].author.avatar }));
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ url: response.data[1].url }));
        axios.get('https://www.jalirani.com/files/barstool.json')
            .then(response => this.setState({ commCount: response.data[1].comment_count }));
    }

    render() {
        const { title } = this.state;
        const { author } = this.state;
        const { avatar } = this.state;
        const { url } = this.state;
        const { commCount } = this.state;
        const { img1A } = this.state;
        const { img1B } = this.state;
        return (
            <div class="app">
                <h3>{title}</h3>
                <img src= {img1A + img1B} alt="Article 1 Thumbnail"/>
                <img src={avatar} alt="Author Avatar"/>
                <p>{author}</p><p>{commCount}</p><br></br>
                <a href= {url} ></a>

            </div>
        );
    }
}
export { Article2 }; 