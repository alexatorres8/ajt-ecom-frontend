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
                    <p>Hey! Jasmine here. I'm working towards an Associate's Degree in Commerical Graphics at a technical college in South Carolina.</p>

                    <p>My interests are listening to music, hanging out with my friends, and .</p>

                </div>
            </div>
        </div>
    );
}