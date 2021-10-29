import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import image2 from "../../../static/assets/images/image2.jpg";

export default class OrderComplete extends Component {
    render() {

        const linkStyle = {
            textDecoration: "none",
            color: "#5A6B5A"
        };

        return (
            <div className="user-layout-wrapper">
                <div className="left-column">
                    <div className="title-header">Order Complete</div>
                    
                    <div className="page-text">
                        <p>Thank you for your purchase!</p>
                        
                        <p>Your order will be sent to your e-mail within the next 10 minutes.</p>

                        <p>                           
                            <Link to="/" style={linkStyle}><FontAwesomeIcon icon="angle-double-left" /> Back to Jasmine's Graphic Shop</Link>
                        </p>
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