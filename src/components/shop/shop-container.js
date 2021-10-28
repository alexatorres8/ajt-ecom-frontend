import React, { Component } from "react";
import axios from "axios";

import ShopProduct from "./shop-product";
import ItemOne from "../../../static/assets/images/sticker1.png";
import ItemTwo from "../../../static/assets/images/sticker2.png";
import ItemThree from "../../../static/assets/images/sticker3.png";
import ItemFour from "../../../static/assets/images/sticker4.png";

export default class ShopContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to the shop",
            isLoading: false,
            data: [
                { title: "Stickers", category: "Stationery", slug: "stickers" },
                { title: "T-shirts", category: "Apparel", slug: "tshirts" },
                { title: "Postcards", category: "Stationery", slug: "postcards" }
            ]
        };

        this.getShopItems = this.getShopItems.bind(this);
    }

    getShopItems() {
        axios.get('/user?ID=12345')
        .then(response => {
            this.setState({
              data: response.data.shop_items
            });
          })
          .catch(error => {
            console.log(error);
          });
      }

    shopItem() {
        return this.state.data.map(item => {
            return <ShopProduct key={item.id} item={item}
            title={item.title} url={"google.com"} slug={item.id}
            />
        });
    }

    componentDidMount() {
        this.getShopItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading..</div>;
        }

        return (
            <div className="shop-layout-wrapper">

                <div className="shop-container">       
                        <div className="shop-item">
                            <img src={ItemOne} />
                        </div>

                        <div className="shop-item">
                            <img src={ItemTwo} />
                        </div>

                        <div className="shop-item">
                            <img src={ItemThree} />
                        </div>

                        <div className="shop-item">
                            <img src={ItemFour} />
                        </div>

                        <div className="shop-item">
                            <img src="img_snow.jpg" />
                        </div>

                        <div className="shop-item">
                            <img src="img_snow.jpg" />
                        </div>
                </div>

                {this.shopItem()}
            </div>
        )
    }
}