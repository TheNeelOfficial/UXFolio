import React from "react";
import {NavLink} from "react-router-dom";

import Logo from "../../assets/img/Logo.png";

export class Menu extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="menu">
                    <NavLink to="/" className="logo"><img src={Logo}></img></NavLink>
                    <NavLink to="/about" className="nav_txt">about</NavLink>
                    <NavLink to="/about" className="nav_txt">work</NavLink>
                </div>
            </React.Fragment>
        );
    }
}

