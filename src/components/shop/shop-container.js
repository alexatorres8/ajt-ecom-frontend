import React, { Component } from "react";

import ShopItem from "./shop-item";

export default class ShopContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Shop",
            isLoading: false,
            data: [
                { title: "Stickers", category: "Stationery" },
                { title: "T-shirts", category: "Apparel" },
                { title: "Postcards", category: "Stationery" },
                { title: "Prints", category: "Artwork"}
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    shopItem() {
        return this.state.data.map(item => {
            return <ShopItem title={item.title} url={"google.com"} />;
        })
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading..</div>;
        }

        return (
            <div>
                <h3>{this.state.pageTitle}</h3>

                <button onClick={() => this.handleFilter('Apparel')}>Apparel</button>
                <button onClick={() => this.handleFilter('Artwork')}>Artwork</button>
                <button onClick={() => this.handleFilter('Stationery')}>Stationery</button>
                
                {this.shopItem()}
            </div>
        )
    }
}