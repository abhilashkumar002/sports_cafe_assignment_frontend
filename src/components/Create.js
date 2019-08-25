import React, { Component } from "react";

import Form from "../styles/EditStyle";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: '',
      content: '',
      image_link: '',
      sports_name: '',
      title: ''
    };
    this.resetForm = this.resetForm.bind(this);
  }

  onFormSubmit() {
    fetch("http://localhost:4004/insertOrEdit", {
      method: "post",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        author: this.state.author,
        content: this.state.content,
        image_link: this.state.image_link,
        sports_name: this.state.sports_name,
        title: this.state.title
      })
    })
      .then(response => {
        console.log(response);
        if(response.status === 200){
          alert('Data successfully inserted into table');
        }
      })
      .catch(err => {
        console.log(err);
        alert(err)
      })
  }

  resetForm(){
    this.setState({
      author: '',
      content: '',
      image_link: '',
      sports_name: '',
      title: ''
    })
  }

  render() {
    const { author, content, image_link, sports_name, title } = this.state;
    return (
      <Form onSubmit={(e) => {
        e.preventDefault();
        this.onFormSubmit();
      }}>
        <span>
          <label>Sports name:</label>
          <input
            type="text"
            value={sports_name}
            required
            onChange={e => this.setState({ sports_name: e.target.value })}
          />
        </span>
        <span>
          <label>Article title:</label>
          <input
            type="text"
            value={title}
            required
            onChange={e => this.setState({ title: e.target.value })}
          />
        </span>
        <span>
          <label>Image Link:</label>
          <input
            type="text"
            value={image_link}
            required
            onChange={e => this.setState({ image_link: e.target.value })}
          />
        </span>
        <span>
          <label>Article content:</label>
          <textarea
            row="10"
            value={content}
            required
            onChange={e => this.setState({ content: e.target.value })}
          />
        </span>
        <span>
          <label>Author name:</label>
          <input
            type="text"
            value={author}
            required
            onChange={e => this.setState({ author: e.target.value })}
          />
        </span>
        <button type="submit" >Save</button>
        <button type="reset" onClick={this.resetForm}>Reset</button>
      </Form>
    );
  }
}
