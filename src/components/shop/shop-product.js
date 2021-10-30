import React, { Component } from "react";

class ShopProduct extends Component {
  render() {

    const {id, title, image, description, price} = this.props;

    return (
      <div className="shop-product">
        <div className="title">
            {title}
        </div>

        <div className="image">
          <img src={image} />
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