import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShopProduct extends Component {
  render() {

    // const linkStyle = {
    //   textDecoration: "none",
    //   color: "#3E4749",
    // };

    const {_id, title, graphic, description, price} = this.props;

    return (
      <div className="shop-product">
        <div className="title">
            {title}
        </div>

        <div className="graphic">
          <img src={graphic} />
        </div>

        <div className="description">
            {description}
        </div>

        <div className="price">
            ${price}
        </div>

        <div className="add-to-cart">
          Add to Cart
        </div>
      </div>
    )
  }
}

export default ShopProduct;