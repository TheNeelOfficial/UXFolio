import React from "react";
import {NavLink} from "react-router-dom";

import Dribbble from "../../assets/img/dribbble.png";
import Linkedin from "../../assets/img/linkedin.png";
import Git from "../../assets/img/git.png";


export class SocialBtn extends React.Component{
    render(){
        return(
            <React.Fragment>  
                <div className="social_btn">
                    <div className="soc_contents">
                        <a rel="noopener noreferrer" target="_blank" href={"https://github.com/TheNeelOfficial"} className="soc_logo"><img src={Git}></img></a>
                        <a rel="noopener noreferrer" target="_blank" href={"https://dribbble.com/TheNeelOfficial"} className="soc_logo"><img src={Dribbble}></img></a>
                        <a rel="noopener noreferrer" target="_blank" href={"https://www.linkedin.com/in/theneelofficial"} className="soc_logo"><img src={Linkedin}></img></a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

