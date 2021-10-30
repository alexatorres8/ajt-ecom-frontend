import React, { Component } from "react";
import axios from "axios";

import ShopProduct from "../shop/shop-product";

class Shop extends Component {
    constructor() {
       super();
       
       this.state = {
           items: []
       }
    }

    componentDidMount() {
        axios.get("https://api-ecom-ajt.herokuapp.com/items")
        .then(response => this.setState({
            items: response.data
        }))
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
                            this.state.items.map(item => {
                                return (
                                    <ShopProduct {...item} key={item.id} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;