import React, { Component } from 'react';

class CartProduct extends Component {
    render() {
        const { _id, title, quantity, price, total } = this.props;
        return (
            <div className="cart-product">
                <div className="user-order">
                    <div className="title">Title: {title}</div>
                    <div className="price">Price: ${price}</div>
                    <div className="remove">Remove Item</div>
                </div>

                <div className="user-totals">
                    <div className="quantity">Quantity: {quantity}</div>
                    <div className="total">Total: ${total}</div>
                </div>
            </div>
        )
    }
}

export default CartProduct;