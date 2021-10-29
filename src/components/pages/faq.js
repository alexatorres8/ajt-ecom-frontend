import React from 'react';
import { Link } from 'react-router-dom';

import image1 from "../../../static/assets/images/image1.jpg";

export default function() {
    return (
        <div className="page-layout-wrapper">
            <div
                className="left-column"
                style={{
                    background: "url(" + image1 + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />

            <div className="right-column">
                <div className="title-header">FAQs</div>
                 
                <div className="page-text">
                    <p>
                        <b>Am I ordering a physical item?</b>
                        <br />
                        No. You are ordering an Adobe Illustrator file (.ai) of the graphic(s) of your choosing
                        that you can you use to print out on stickers, t-shirts, etc or even for icons on your website!
                    </p>
                    
                    <p>
                        <b>What if I don't have Adobe Illustrator?</b> 
                        <br />
                        Unfortunately, at this time, Adobe Illustrator (.ai) files will be the only type sent out.
                    </p>

                    <p>
                        <b>Where will the file(s) be sent?</b> 
                        <br />
                        It will be sent in a zipped folder to the email associated with your account.
                    </p>

                    <p>
                        <b>Are these the only graphics you are selling?</b> 
                        <br />
                        The shop will sell a different set of graphics monthly. Stay tuned!
                    </p>

                    <p>
                        <b>What if I have a question that's not answered here?</b> 
                        <br />
                        Please visit my <Link to="/contact">Contact page</Link>!
                    </p>

                </div>
            </div>
        </div>
    );
}