import React, { Component } from "react";
import axios from "axios";

import ShopItem from "./shop-item";

export default class ShopContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Shop",
            isLoading: false,
            data: [
                // { title: "Stickers", category: "Stationery", slug: "stickers" },
                // { title: "T-shirts", category: "Apparel", slug: "tshirts" },
                // { title: "Postcards", category: "Stationery", slug: "postcards" }
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
        // this.getShopItems = this.getShopItems.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    // getShopItems() {
    //     axios.get('/user?ID=12345')
    //     .then(response = > {
    //     .then(response => {
    //         this.setState({
    //           data: response.data.shop_items
    //         });
    //       })
    //       .catch(error => {
    //         console.log(error);
    //       });
    //   }

    shopItem() {
        return this.state.data.map(item => {
            return <ShopItem key={item.id} item={item}
            // title={item.title} url={"google.com"} slug={item.id}
            />;
        })
    }

    // componentDidMount() {
    //     this.getShopItems();
    // }

    render() {
        if (this.state.isLoading) {
            return <div>Loading..</div>;
        }

        return (
            <div>
                {/* <h3>{this.state.pageTitle}</h3> */}

                <button onClick={() => this.handleFilter('Prints')}>Prints</button>
                <button onClick={() => this.handleFilter('Stationery')}>Stationery</button>
                
                {this.shopItem()}
            </div>
        )
    }
}