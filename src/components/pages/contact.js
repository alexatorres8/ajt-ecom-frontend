import React, { Component } from "react";

import { SocialMediaButtons } from "react-social-media-buttons";
import contactPicture from "../../../static/assets/images/jasmine02.jpg";

class Contact extends Component {
 
    render() {
        return (
            <div className="page-layout-wrapper">
                <div
                    className="left-column"
                    style={{
                        background: "url(" + contactPicture + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "right"
                    }}
                />

                <div className="right-column">
                    <div className="title-header">Contact Me</div>

                    <div className="page-text">
                        <p><b>Email:</b> jazctor(a)gmail.com</p>

                        <SocialMediaButtons
                            links={
                                [
                                    "https://www.linkedin.com/in/jasmine-torres-892041222/",
                                    "https://www.instagram.com/foundpeace/"
                                ]
                            }

                            buttonStyle={{
                                width: "63px",
                                height: "63px",
                                margin: "0px 12px",
                                backgroundColor: "transparent"
                            }}

                            iconStyle={{ color: "#3e4749" }}
                            openNewTab={true}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact;