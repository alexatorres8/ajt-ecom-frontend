import React from 'react';

import aboutPicture from "../../../static/assets/images/jasmine01.jpg";

export default function() {
    return (
        <div className="page-layout-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + aboutPicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "left"
                }}
            />

            <div className="right-column">
                <div className="title-header">About Me</div>
                 
                <div className="page-text">
                    <p>Hey! Jasmine here. I'm a 2nd year student at a technical college in Columbia, SC.
                    I'm working towards an Associate's Degree in Graphic Design.</p>

                    <p>My interests are .</p>

                </div>
            </div>
        </div>
    );
}