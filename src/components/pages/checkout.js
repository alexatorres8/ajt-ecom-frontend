import React, { Component } from 'react';
import { Link } from "react-router-dom";

import image2 from "../../../static/assets/images/image2.jpg";

export default class Checkout extends Component {
    render() {

        const linkStyle = {
            textDecoration: "none",
            color: "#D3E4CD"
        };

        return (
            <div className="user-layout-wrapper">
                <div className="left-column">
                    <div className="title-header">Checkout</div>
                    
                    <form onSubmit={this.handleSubmit} className="form-wrapper">
                        
                        <div className="form-group">
                            Name:
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                            />
                        </div>

                        <div className="form-group">
                            Email:
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email"
                            />
                        </div>

                        <div className="form-group">
                            Card Number:
                            <input
                                type="text"
                                name="card"
                                placeholder="0000 0000 0000 0000"
                            />
                        </div>

                        <div className="form-group">
                            Expiration Date:
                            <input
                                type="text"
                                name="expriation"
                                placeholder="MM/YY"
                            />
                        </div>
                        
                        <div className="form-group">
                            CVV:
                            <input
                                type="number"
                                name="cvv"
                                placeholder="123"
                            />
                        </div>

                        <div className="button">
                            <Link
                                to="/order-complete"
                                style={linkStyle}
                            >
                                Submit Order
                            </Link>
                        </div>

                        <div className="button">
                            <Link
                                to="/cart"
                                style={linkStyle}
                            >
                                Back to Cart
                            </Link>
                        </div>
                    </form>
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