import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from "react-redux";
import * as actions from "../../actions";

import ShopProduct from "../shop/shop-product";

class Shop extends Component {
    componentDidMount() {
        const navigationSignOutLink = [
            {
                title: "Sign Out",
                path: "/signout"
            }
        ]

        this.props.fetchShopProducts();
    }

    render() {
        return (
            <div className="shop-layout-wrapper">
                <div className="shop-title">
                    Graphics Shop
                </div>

                <div className="product-wrapper">
                    <div className="shop-products">
                        {
                            this.props.products.map(product => {
                                return (
                                    <ShopProduct {...product} key={product._id} />
                                )
                            })
                        }
                    </div>
                </div>
                {/* shopping cart activated */}
                {/* <ShopContainer /> */}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { products } = state.shop;
    return {
        products
    }
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;