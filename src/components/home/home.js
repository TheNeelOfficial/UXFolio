import React from "react";

import { Menu } from "../menu/menu";
import { About } from "../about/about";
import { Card } from "../card/card";
import { SocialBtn } from "../social_btn/social_btn";


export class Home extends React.Component{
    render(){
        return(
            <div>
                <Menu/>
                <About/>
                <Card/>
                <SocialBtn/>
            </div>
        );
    }
}

