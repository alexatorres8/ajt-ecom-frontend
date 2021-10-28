import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSignInAlt, faSignOutAlt, faLeaf } from "@fortawesome/free-solid-svg-icons";

import NavigationContainer from "./navigation/navigation-container";
import Shop from "./pages/shop";
import About from "./pages/about";
import Contact from "./pages/contact";
import ShopDetail from "./shop/shop-detail";
import Account from "./pages/account";
import Cart from "./cart/cart";
import Auth from "./pages/auth";
import NotFound from "./pages/not-found";


library.add(faShoppingCart, faSignInAlt, faSignOutAlt, faLeaf);

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
    return axios.get("api signed_in", {
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
      console.log("Error", error);
    });
  }

  componentDidMount() {
    this.checkSignInStatus();
  }

  authorizedPages() {
    return [
      <Route path="/account" component={Account} />,
      <Route path="/payment" component={Payment} />
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

              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/shop/:slug" component={ShopDetail} />
              {this.state.signedInStatus === "SIGNED_IN" ? this.authorizedPages() : null}

              <Route path="/account" component={Account} />

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