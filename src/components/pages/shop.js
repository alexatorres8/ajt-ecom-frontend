import React, { Component } from 'react';
import { Link } from "react-router-dom";

import ShopContainer from '../shop/shop-container';

export default class Shop extends Component {
    render() {
        return (
            <div>
                <ShopContainer />
                <Link to="/about">Read more about Jasmine</Link>
            </div>
        );
    }
}