import React from "react";

import { Menu } from "../menu/menu";
import { About } from "../about/about";
import { Card } from "../card/card";


export class Home extends React.Component{
    render(){
        return(
            <div>
                <Menu/>
                <About/>
                <Card/>
            </div>
        );
    }
}

