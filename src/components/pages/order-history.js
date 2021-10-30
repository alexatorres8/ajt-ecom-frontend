import React, { Component } from 'react';

import image2 from "../../../static/assets/images/image2.jpg";

export default class OrderHistory extends Component {

    render() {
        return (
            <div className="user-layout-wrapper">

                <div className="left-column">
                    <div className="title-header">Order History</div>
                    
                    <div className="page-text">Coming Soon!</div>
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