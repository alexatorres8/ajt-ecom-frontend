import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSignInAlt, faSignOutAlt, faLeaf, faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

import NavigationContainer from "./navigation/navigation-container";
import Shop from "./pages/shop";
import Faq from "./pages/faq";
import About from "./pages/about";
import Contact from "./pages/contact";
import Account from "./pages/account";
import Order from "./pages/order-history";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import OrderComplete from "./pages/order-complete";
import Auth from "./pages/auth";
import NotFound from "./pages/not-found";


library.add(faShoppingCart, faSignInAlt, faSignOutAlt, faLeaf, faAngleDoubleLeft);

class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        signedInStatus: "NOT_SIGNED_IN"
      }

      this.handleSuccessfulSignIn = this.handleSuccessfulSignIn.bind(this);
      this.handleUnsuccessfulSignIn = this.handleUnsuccessfulSignIn.bind(this);
      this.handleSuccessfulSignOut = this.handleSuccessfulSignOut.bind(this);
  }

  handleSuccessfulSignIn() {
    this.setState({
      signedInStatus: "SIGNED_IN"
    });
  }

  handleUnsuccessfulSignIn() {
    this.setState({
      signedInStatus: "NOT_SIGNED_IN"
    });
  }

  handleSuccessfulSignOut() {
    this.setState({
      signedInStatus: "NOT_SIGNED_IN"
    });
  }

  checkSignInStatus() {
    return axios.get("https://api-ecom-ajt.herokuapp.com/user", {
      withCredentials: true
    }).then(response => {
      const signedIn = response.data.signed_in;
      const signedInStatus = this.state.signedInStatus;

      if(signedIn && signedInStatus === "SIGNED_IN") {
        return signedIn;
      } else if (signedIn & signedInStatus === "NOT_SIGNED_IN") {
        this.setState({
          signedInStatus: "SIGNED_IN"
        });
      } else if (!signedIn & signedInStatus === "SIGNED_IN") {
        this.setState({
          signedInStatus: "NOT_SIGNED_IN"
        });
      }
    }).catch(error => {
      console.log("The error is", error);
    });
  }

  componentDidMount() {
    this.checkSignInStatus();
  }

  authorizedPages() {
    return [
      <Route path="/account" component={Account} />,
      <Route path="/order-history" component={Order} />,
      <Route path="/checkout" component={Checkout} />,
      <Route path="/order-complete" component={OrderComplete} />
    ]
  }

  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <NavigationContainer
              signedInStatus={this.state.signedInStatus}
              handleSuccessfulSignOut={this.handleSuccessfulSignOut}
            />

            {this.state.signedInStatus}

            <Switch>
              <Route exact path="/" component={Shop} />

              <Route
                path="/auth"
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulSignIn={this.handleSuccessfulSignIn}
                    handleUnsuccessfulSignIn={this.handleUnsuccessfulSignIn}
                  />
                )}
              />

              <Route exact path="/faq" component={Faq} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              {this.state.signedInStatus === "SIGNED_IN" ? this.authorizedPages() : null}

              <Route path="/cart" component={Cart} />


              {/* <Route path="/signout" component={SignOut} /> */}
              <Route component={NotFound} />
            </Switch>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;