import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSignInAlt, faSignOutAlt, faLeaf, faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

import NavigationContainer from "./navigation/navigation-container";
import Shop from "./pages/shop";
import Faq from "./pages/faq";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import OrderComplete from "./pages/order-complete";
import NotFound from "./pages/not-found";


library.add(faShoppingCart, faSignInAlt, faSignOutAlt, faLeaf, faAngleDoubleLeft);

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Shop} />
              <Route exact path="/faq" component={Faq} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/cart" component={Cart} />
              <Route path="/checkout" component={Checkout} />,
              <Route path="/order-complete" component={OrderComplete} />
              <Route component={NotFound} />
            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;