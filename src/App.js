import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navigation from "./components/Navigation";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import Create from './components/Create';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false
    };
    this.refreshFeed = this.refreshFeed.bind(this);
  }

  refreshFeed(value) {
    this.setState({
      refresh: value
    });
    console.log(this.state);
  }

  render() {
    return (
      <Router>
        <div style={{ margin: 0, padding: 0 }}>
          <Navigation action={this.refreshFeed} />
          <Route exact path='/' component={() => <Main refresh={this.state.refresh} action={this.refreshFeed} />} />
          <Route path='/aboutus' component={AboutUs }/>
          <Route path='/insertnew' component={ Create} />
          {/* <Main refresh={this.state.refresh} action={this.refreshFeed} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
