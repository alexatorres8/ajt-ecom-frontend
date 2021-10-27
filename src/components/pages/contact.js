import React from 'react';

import contactPicture from "../../../static/assets/images/jasmine03.png";

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
                    <p>Hey! Jasmine here. I'm a 2nd year student at a technical college in Columbia, SC.
                    I'm working towards an Associate's Degree in Graphic Design.</p>

                    <p>some-email@gmail.com</p>
                </div>
            </div>
        </div>
    );
}