import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class FooterContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="nav-wrapper">
               
                <div className="left-side">
                        Copyright 2021
                 </div>

               
            </div>
        )
    }
}