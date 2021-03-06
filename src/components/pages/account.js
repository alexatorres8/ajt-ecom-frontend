import React, { Component } from 'react';
import { Link } from "react-router-dom";

import image2 from "../../../static/assets/images/image2.jpg";

export default class Account extends Component {
    render() {

        const linkStyle = {
            textDecoration: "none",
            color: "#D3E4CD"
        };

        return (
            <div className="user-layout-wrapper">

                <div className="left-column">
                    <div className="title-header">Account Information</div>

                    <form onSubmit={this.handleSubmit} className="form-wrapper">
                        
                        <div className="form-group">
                            Name:
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                // value={this.state.name}
                                // onChange={this.handleChange}
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
                            Password:
                            <input
                                type="password"
                                name="password"
                                placeholder="Your password"
                                // value={this.state.address}
                                // onChange={this.handleChange}
                            />
                        </div>

                        <div className="button">
                            <Link to="/account" style={linkStyle}>
                                Update Account
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