import React from 'react';
import { Link } from "react-router-dom";

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

                    <p><b>Education</b>: Associate's Degree in Commercial Graphics</p>

                    <p><b>Interests</b>: Art and drawing, hanging out with friends</p>

                    <p><b>Fun Facts</b>: I have a total of seven piercings and one tattoo. I'm almost 20.</p>

                    <p>
                        I'm set to graduate school at the end of the 2022 Spring or Summer semester.
                        It's been a long school year, and I'm excited at how close I am to be finally out in the real world.
                    </p>

                    <p>
                        The work featured on this site is stuff I created during this past semester at school.
                        I hope you enjoy! If you have any questions or would like to follow me on social media, check out my <Link to="/contact">Contact page</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}