import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationTitle extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="title-wrapper">
                    <div className="logo-wrapper">
                        Jasmine's Graphic Shop
                    </div>
            </div>
        )
    }
}