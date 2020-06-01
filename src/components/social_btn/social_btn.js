import React from "react";
import {NavLink} from "react-router-dom";

import Dribbble from "../../assets/img/dribbble.png";
import Behance from "../../assets/img/behance.png";
import Medium from "../../assets/img/medium.png";


export class SocialBtn extends React.Component{
    render(){
        return(
            <React.Fragment>  
                <div className="social_btn">
                    <div className="soc_contents">
                        <a href={"https://medium.com/TheNeelOfficial"} className="soc_logo"><img src={Medium}></img></a>
                        <a href={"https://dribbble.com/TheNeelOfficial"} className="soc_logo"><img src={Dribbble}></img></a>
                        <a href={"https://www.behance.net/TheNeelOfficial"} className="soc_logo"><img src={Behance}></img></a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

