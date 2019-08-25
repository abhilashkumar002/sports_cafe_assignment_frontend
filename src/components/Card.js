import React, { Component } from "react";

import Edit from './Edit';

import {
  CardDiv,
  CardImage,
  CardDetails,
  SportsName,
  ArticleTitle,
  ArticleContent,
  AuthorDiv
} from "../styles/MainStyle";

class Card extends Component {

  constructor(props){
    super(props);
    this.state = {
      edit : false,
      id: this.props.article.id,
      article : this.props.article
    };
    this.changeEditState = this.changeEditState.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.changeEditStateFalse = this.changeEditStateFalse.bind(this);
  }

  changeEditState(){
    this.setState({
      edit: true
    })
  }

  changeEditStateFalse(article){
    this.setState({
      edit: false,
      article: article
    });

  }

  deleteArticle(){
    
    const id = this.state.id;
    this.props.deleteArticle(id);
  }

  render() {
    const { author, content, image_link, sports_name, title} = this.state.article;
    if(this.state.edit){
      return <Edit article={this.props.article} changeEditState={this.changeEditStateFalse}/>
    }
    return (
      <CardDiv>
        <CardImage>
          <img
            src={image_link}
            alt="Logo"
          />
        </CardImage>
        <CardDetails>
          <SportsName>{sports_name}</SportsName>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleContent><p>{content}</p></ArticleContent>
          <AuthorDiv>
            <div>{author}</div>
            <button onClick={this.changeEditState} >Edit</button>
            <button onClick={this.deleteArticle}>Delete</button>
          </AuthorDiv>
        </CardDetails>
      </CardDiv>
    );
  }
}

export default Card;
