import React from "react";

import Neu from "../../assets/img/NeumorphicButtonMI.gif"
import Toggle from "../../assets/img/Toggle_MicroInteraction.gif"


export class Card extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="work_page row">
                    <div className="col-sm-6">
                        <div class="box">
                            <div class="box__right">
                                <div className="right_hover_txt">
                                    <p className="main_txt">Neumorphic Button Micro Interaction</p>
                                    <p className="sub_txt">View Casestudy</p>
                                </div>
                            </div>
                            <div class="box__left">
                                <div className="left_hover_txt">
                                    <p className="main_txt">Neumorphic Button Micro Interaction</p>
                                    <p className="sub_txt">View Casestudy</p>
                                </div>
                            </div>
                            {/* <div class="box__top">Top → Bottom</div>
                            <div class="box__bottom">Bottom → Top</div> */}
                            <div class="box__center">
                            <img src={Neu} className="card_img"></img> 
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div class="box">
                            <div class="box__right">
                                <div className="right_hover_txt">
                                    <p className="main_txt">Neumorphic Button Micro Interaction</p>
                                    <p className="sub_txt">View Casestudy</p>
                                </div>
                            </div>
                            <div class="box__left">
                            <div className="left_hover_txt">
                                    <p className="main_txt">Neumorphic Button Micro Interaction</p>
                                    <p className="sub_txt">View Casestudy</p>
                            </div>
                            </div>
                            <div class="box__center">
                            <img src={Toggle} className="card_img"></img> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

