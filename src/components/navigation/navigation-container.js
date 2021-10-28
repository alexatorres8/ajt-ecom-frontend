import React from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationContainer = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="left-nav-wrapper">
                <NavLink to={route} activeClassName="nav-link-active">
                    {linkText}
                </NavLink>
            </div>
        )
    }

    const handleSignOut = () => {
        axios.delete("api url signout", {
            withCredentials: true
        }).then(response => {
            if (response.status === 200) {
                props.history.push("/");
                props.handleSuccessfulLogout();
            }
            return response.data;
        }).catch(error => {
            console.log("Error signing out", error);
        });
    }

    return(
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="title-wrapper">
                    Jasmine's Graphic Shop
                    <FontAwesomeIcon icon="leaf" />
                </div>

                <div className="left-nav-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Shop
                    </NavLink>
                </div>

                <div className="left-nav-wrapper">
                    <NavLink to="/about" activeClassName="nav-link-active">
                        About
                    </NavLink>
                </div>

                <div className="left-nav-wrapper">
                    <NavLink to="/contact" activeClassName="nav-link-active">
                        Contact
                    </NavLink>
                </div>

                {dynamicLink("/account", "Account")}

                {/* {props.signedInStatus === "SIGNED_IN" ? dynamicLink("/account", "Account") : null} */}
            </div>

            <div className="right-side">
                <div className="right-nav-wrapper">
                    <NavLink to="/cart" activeClassName="nav-link-active">
                        <FontAwesomeIcon icon="shopping-cart" />
                    </NavLink>
                </div>
                
                <div className="right-nav-wrapper">
                    <NavLink to="/auth" activeClassName="nav-link-active">
                        <FontAwesomeIcon icon="sign-in-alt" />
                    </NavLink>
                </div>

                {props.signedInStatus === "SIGNED_IN" ? <a onClick={handleSignOut}>Sign Out</a> : null}
                
            </div>
        </div>
    )
}

export default withRouter(NavigationContainer);