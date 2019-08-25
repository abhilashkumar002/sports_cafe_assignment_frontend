import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Card from "./Card";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      article: []
    };
  }

  componentDidMount() {
    const { id } = this.props.location.state;
    const url = `http://localhost:4004/article/${id}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ article: data, loading: false });
      });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    return <Card article={this.state.article[0]} />;
  }
}

export default withRouter(Article);
