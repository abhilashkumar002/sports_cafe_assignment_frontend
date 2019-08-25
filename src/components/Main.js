import React, { Component } from "react";
import { withRouter } from "react-router-dom";


import Card from "./Card";
import Loading from "./Loading";
import { MainWrapper } from "../styles/MainStyle";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      step: 8,
      totalCount: 0,
      pageCount: 0,
      currentCount: 0
    };
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  refetch = () => {
    let currentCount = 0;
    this.props.action(false);
    const url = `http://localhost:4004/all?initialCount=${currentCount}&step=${this.state.step}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: data,
          loading: false,
          currentCount: this.state.step
        });
      });
  };

  componentDidMount() {
    const url = `http://localhost:4004/all?initialCount=${this.state.currentCount}&step=${this.state.step}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          articles: data,
          loading: false,
          currentCount: this.state.step
        });
      });
    document.addEventListener("scroll", this.trackScrolling);
  }

  fetchMoreData = () => {
    const url = `http://localhost:4004/all?initialCount=${this.state.currentCount}&step=${this.state.step}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          currentCount: this.state.currentCount + this.state.step
        });
        data.map(result => {
          return this.state.articles.push(result);
        });
      });
  };

  trackScrolling = () => {
    let wrappedElement = document.getElementById("root");
    let status =
      wrappedElement.getBoundingClientRect().bottom <= window.innerHeight + 100;
    if (status) {
      this.fetchMoreData();
      document.removeEventListener("scroll", this.trackScrolling);
      setTimeout(() => {
        document.addEventListener("scroll", this.trackScrolling);
      }, 500);
    }
  };

  unmountThis = () => {
    document.removeEventListener("scroll", this.trackScrolling);
  };

  deleteArticle(id) {
    let filteredArticles = this.state.articles.filter(
      article => article.id !== id
    );
    this.setState({ articles: filteredArticles });
    fetch(`http://localhost:4004/article/${id}`, {
      method: "delete"
    })
      .then(response => response.json())
      .then(data => {
        console.log("done");
      });
  }

  render() {
    if (this.props.refresh) {
      this.refetch();
    }
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <MainWrapper>
        {this.state.articles.map(article => {
          return (
            <Card
                key={article.id}
                article={article}
                deleteArticle={this.deleteArticle}
            />
          );
        })}
      </MainWrapper>
    );
  }
}

export default withRouter(Main);
