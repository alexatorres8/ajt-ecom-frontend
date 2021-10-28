import React from 'react';
import { Link } from 'react-router-dom';

import notFoundPicture from "../../../static/assets/images/notfound.jpg";

export default function() {
    return (
        <div className="page-layout-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + notFoundPicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />

            <div className="right-column">
                <div className="title-header">UH OH.. PAGE NOT FOUND!</div>

                <div className="page-text">
                    <p><Link to="/">Return to shop page</Link></p>
                </div>
            </div>
        </div>
    );
}