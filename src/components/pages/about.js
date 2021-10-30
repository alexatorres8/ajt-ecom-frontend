import React from 'react';

import aboutPicture from "../../../static/assets/images/jasmine03.png";

export default function() {
    return (
        <div className="page-layout-wrapper">
            <div className="left-column"
                 style={{
                    background: "url(" + aboutPicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "right"
                }}
            />

            <div className="right-column">
                <div className="title-header">About Me</div>
                 
                <div className="page-text">
                    <p><b>Name</b>: Jasmine</p>

                    <p><b>Education</b>: Associate's Degree in Commercial Graphics (2022)</p>

                    <p><b>Interests</b>: Listening to music, hanging out with friends</p>
                </div>
            </div>
        </div>
    );
}