import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NavigationContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="nav-wrapper">

                <div className="left-side">

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

                    {false ? <button>Account Information</button> : null}
                    {false ? <button>Payment History</button> : null}
                </div>

                <div className="middle">
                    <div className="title-wrapper">
                        Jasmine's Graphic Shop
                    </div>
                </div>


                <div className="right-side">
                    <div className="right-nav-wrapper">
                        <NavLink to="/cart" activeClassName="nav-link-active">
                            <FontAwesomeIcon icon="shopping-cart" />
                        </NavLink>
                    </div>
                    
                    <div className="right-nav-wrapper">
                        <NavLink to="/login" activeClassName="nav-link-active">
                            <FontAwesomeIcon icon="sign-in-alt" />
                        </NavLink>
                    </div>
                    
                </div>
            </div>
        )
    }
}