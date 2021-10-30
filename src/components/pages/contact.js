import React from 'react';

import contactPicture from "../../../static/assets/images/jasmine02.jpg";

export default function() {
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
                <p><b>Email</b>: email@email.com</p>
                </div>
            </div>
        </div>
    );
}