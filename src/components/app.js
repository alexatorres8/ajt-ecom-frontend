import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import NavigationTitle from "./navigation/navigation-title";
import NavigationContainer from "./navigation/navigation-container";
import About from "./pages/about";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import ShopDetail from "./shop/shop-detail";
import Cart from "./cart/cart";
import Login from "./login/login";
import NotFound from "./pages/not-found";
import FooterContainer from "./navigation/footer-container";

library.add(faShoppingCart, faSignInAlt, faSignOutAlt);

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
          {/* <NavigationTitle /> */}
          <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Shop} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/shop/:slug" component={ShopDetail} />
              <Route path="/cart" component={Cart} />
              <Route path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>

            {/* <FooterContainer /> */}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;