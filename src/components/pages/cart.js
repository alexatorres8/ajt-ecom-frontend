import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions";

import image2 from "../../../static/assets/images/image2.jpg";
import CartProduct from '../cart/cart-product';

class Cart extends Component {
    componentDidMount() {
        this.props.fetchCartProducts();
    }

    render() {
        const linkStyle = {
            textDecoration: "none",
            color: "#D3E4CD"
        };

        return (
            <div className="user-layout-wrapper">

                <div className="left-column">
                    <div className="title-header">Shopping Cart</div>

                    <div className="page-text">
                        {
                            this.props.cartProducts.map(cartProduct => {
                                return (
                                    <CartProduct {...cartProduct} key={cartProduct._id} />
                                )
                            })
                        }
                    </div>

                    <div className="form-wrapper">
                        <div className="button">
                            <Link to="/checkout" style={linkStyle}>
                                Checkout
                            </Link>
                        </div>

                        
                        <div className="button">
                            <Link to="/" style={linkStyle}>
                                Back to Shop
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="right-column"
                    style={{
                        background: "url(" + image2 + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "left"
                    }}
                />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return {
        cartProducts
    }
}

Cart = connect(mapStateToProps, actions)(Cart);
export default Cart;