import React, { Component } from "react";

import Form from "../styles/EditStyle";

export default class EditOrDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.article.id,
      author: this.props.article.author,
      content: this.props.article.content,
      image_link: this.props.article.image_link,
      sports_name: this.props.article.sports_name,
      title: this.props.article.title
    };
    this.changeEditStateFalse = this.changeEditStateFalse.bind(this);
  }

  onFormSubmit() {
    fetch("http://localhost:4004/insertOrEdit", {
      method: "post",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        author: this.state.author,
        content: this.state.content,
        image_link: this.state.image_link,
        sports_name: this.state.sports_name,
        title: this.state.title
      })
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  changeEditStateFalse(){
    this.props.changeEditState(this.state);
  }

  render() {
    const { author, content, image_link, sports_name, title } = this.state;
    return (
      <Form onSubmit={(e) => {
        e.preventDefault();
        this.onFormSubmit();
        this.changeEditStateFalse();
      }}>
        <span>
          <label>Sports name:</label>
          <input
            type="text"
            value={sports_name}
            onChange={e => this.setState({ sports_name: e.target.value })}
          />
        </span>
        <span>
          <label>Article title:</label>
          <input
            type="text"
            value={title}
            onChange={e => this.setState({ title: e.target.value })}
          />
        </span>
        <span>
          <label>Image Link:</label>
          <input
            type="text"
            value={image_link}
            onChange={e => this.setState({ image_link: e.target.value })}
          />
        </span>
        <span>
          <label>Article content:</label>
          <textarea
            row="10"
            value={content}
            onChange={e => this.setState({ content: e.target.value })}
          />
        </span>
        <span>
          <label>Author name:</label>
          <input
            type="text"
            value={author}
            onChange={e => this.setState({ author: e.target.value })}
          />
        </span>
        <button type="submit">Save</button>
      </Form>
    );
  }
}
