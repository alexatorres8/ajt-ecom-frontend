
import React, { Component } from 'react';

class CartProduct extends Component {
    render() {
        const { _id, title, price, total } = this.props;
        return (
            <div className="cart-product">
                <div className="order">
                    <div className="title">Title: {title}</div>
                    <div className="price">Price: ${price}</div>
                </div>

                <div className="total">
                    <div className="total">Total: ${total}</div>
                </div>
            </div>
        )
    }
}

export default CartProduct;