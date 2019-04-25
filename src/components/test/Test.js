import React, { Component } from 'react';

class Test extends Component {

  state = {
    title: '',
    body: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then(data => this.setState({
        title: data.title,
        body: data.body
      }));
  };

  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h1 className="display-4">{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
}

export default Test;