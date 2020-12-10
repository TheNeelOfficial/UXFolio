import React from "react";
import {Link} from "react-router-dom";

import Logo from "../../assets/img/Logo.png";

export class Menu extends React.Component{
    render(){
        return(
            <React.Fragment>  
                <div className="menu">
                    <Link to="/" className="logo"><img src={Logo}></img></Link>
                    <Link to="#about" className="nav_txt">about</Link>
                    <Link to="#work" className="nav_txt">work</Link>
                </div>
            </React.Fragment>
        );
    }
}

