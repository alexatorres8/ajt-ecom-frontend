import React from 'react';

import contactPicture from "../../../static/assets/images/jasmine04.png";

export default function() {
    return (
        <div className="page-layout-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + contactPicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />

            <div className="right-column">
                <div className="title-header">Contact Me</div>

                <div className="page-text">
                    <p></p>

                    <p>some-email@gmail.com</p>
                </div>
            </div>
        </div>
    );
}