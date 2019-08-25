import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  NavigationDiv,
  LogoDiv,
  Title,
  Pages,
  Menu,
  Bar,
  VerticalMenu
} from "../styles/NavigationStyle";

class Navigation extends Component {

  constructor(props){
    super(props);
    this.state = {
      visibility: false
    };
    this.changeVisibility = this.changeVisibility.bind(this)
  }

  changeVisibility(){
    this.setState({
      visibility: !this.state.visibility
    });
    if(this.state.visibility){
      document.getElementById('bar2').style.opacity = 1;
      document.getElementById('bar1').style.transform = 'rotate(0deg)';
      document.getElementById('bar3').style.transform = 'rotate(0deg)';

    }
    else{
      document.getElementById('bar2').style.opacity = 0;
      document.getElementById('bar1').style.transform = 'rotate(45deg) translate(4px, 10px)';
      document.getElementById('bar3').style.transform = 'rotate(-45deg) translate(4px, -10px)';
    }
  }

  render() {
    return (
      <NavigationDiv>
        <Menu onClick={this.changeVisibility}>
          <Bar id="bar1"/>
          <Bar id="bar2"/>
          <Bar id="bar3"/>
        </Menu>
        <VerticalMenu visibility={this.state.visibility} >
          <li><Link to='/' className='visible'>Home</Link></li>
          <li><Link to='/aboutus' className='visible'>Aboutus</Link></li>
        </VerticalMenu>
        <Link className="notvisible" to="/">
          <LogoDiv>
            <img
              src="https://cdn-static.spcafe.in/articles/white-logo-asset.svg"
              alt="Logo"
            />
          </LogoDiv>
        </Link>
        <Title
          onClick={() => {
            this.props.action(true);
            window.scrollTo(0, 0);
          }}
        >
          NEWS FEED
        </Title>
        <Link className='notvisible' to='/aboutus'>
          <Pages>About Us</Pages>
        </Link>
      </NavigationDiv>
    );
  }
}

export default Navigation;
