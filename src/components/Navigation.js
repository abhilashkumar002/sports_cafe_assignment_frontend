import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  NavigationDiv,
  LogoDiv,
  Title,
  Pages,
  Menu,
  Bar
} from "../styles/NavigationStyle";

class Navigation extends Component {
  render() {
    return (
      <NavigationDiv>
        <Menu>
          <Bar />
          <Bar />
          <Bar />
        </Menu>
        <Link to="/">
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
        <Link to='/aboutus'>
          <Pages>About Us</Pages>
        </Link>
      </NavigationDiv>
    );
  }
}

export default Navigation;
