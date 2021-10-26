import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Shop from "./pages/shop";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <h1>Jasmine's Art {`&`} Shop</h1>
  
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/shop" component={Shop} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;