import React from "react";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationContainer = () => {
    return(
        <div className="nav-wrapper">
            
            <div className="left-side">
                <div className="title-wrapper">
                    <div className="title-text">
                        Jasmine's Graphic Shop
                        <FontAwesomeIcon icon="leaf" />
                    </div>
                </div>

                <div className="left-nav-wrapper">
                    <div className="left-nav-link">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            Shop
                        </NavLink>
                    </div>

                    <div className="left-nav-link">
                        <NavLink to="/faq" activeClassName="nav-link-active">
                            FAQs
                        </NavLink>
                    </div>

                    <div className="left-nav-link">
                        <NavLink to="/about" activeClassName="nav-link-active">
                            About
                        </NavLink>
                    </div>

                    <div className="left-nav-link">
                        <NavLink to="/contact" activeClassName="nav-link-active">
                            Contact
                        </NavLink>
                    </div>
                </div>
            </div>

            <div className="right-side">
                <div className="right-nav-wrapper">
                    <NavLink to="/cart" activeClassName="nav-link-active">
                        <FontAwesomeIcon icon="shopping-cart" />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default withRouter(NavigationContainer);