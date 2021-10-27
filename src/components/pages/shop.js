import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ShopContainer from "../shop/shop-container";
import ShopDetail from "../shop/shop-detail";

export default class Shop extends Component {
    render() {
        return (
            <div className="page-layout-wrapper">
                <div className="left-column">
                    <ShopContainer />
                    {/* <Link to="/about">Read more about Jasmine</Link> */}
                </div>
            </div>
        );
    }
}