import React from "react";

import pikup from "../../assets/img/projects/pikup.jpeg"
import dash from "../../assets/img/projects/dash.jpeg"
import caarya from "../../assets/img/projects/caarya.jpeg"
import park from "../../assets/img/projects/park.jpeg"
import scirque from "../../assets/img/projects/scirque.jpeg"
import supers from "../../assets/img/projects/supers.jpeg"
import trove from "../../assets/img/projects/trove.jpeg"
import raxa from "../../assets/img/projects/raxa.jpeg"


export class Card extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="work_page row">
                <div className="work_txt">
                    <p>Work</p>
                </div>
                <div className="col-sm-6">
                    <a rel="noopener noreferrer" href="https://www.trypikup.com" target="_blank">
                        <div className="box">
                            {/* <div className="box__right">
                                <div className="right_hover_txt">
                                    <p className="main_txt">iOS | Web</p>
                                    <p className="sub_txt">View Project</p>
                                </div>
                            </div>
                            <div className="box__left">
                                <div className="left_hover_txt">
                                    <p className="main_txt">iOS | Web</p>
                                    <p className="sub_txt">View Project</p>
                                </div>
                            </div> */}
                            {/* <div className="box__top">Top → Bottom</div>                            <div className="box__bottom">Bottom → Top</div> */}
                            <div className="box__center">
                                <img src={pikup} className="card_img"></img> 
                            </div>
                        </div>
                    </a>
                    </div>
                    <div className="col-sm-6">
                        <a rel="noopener noreferrer" href="https://www.dashbeyond.com" target="_blank">
                            <div className="box">
                                {/* <div className="box__right">
                                    <div className="right_hover_txt">
                                        <p className="main_txt">Web</p>
                                        <p className="sub_txt">View Project</p>
                                    </div>
                                </div>
                                <div className="box__left">
                                    <div className="left_hover_txt">
                                        <p className="main_txt">Web</p>
                                        <p className="sub_txt">View Project</p>
                                    </div>
                                </div> */}
                                {/* <div className="box__top">Top → Bottom</div>
                                <div className="box__bottom">Bottom → Top</div> */}
                                <div className="box__center">
                                <img src={dash} className="card_img"></img> 
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a rel="noopener noreferrer" href="https://caarya.in" target="_blank">
                            <div className="box">
                                {/* <div className="box__right">
                                    <div className="right_hover_txt">
                                        <p className="main_txt">Web</p>
                                        <p className="sub_txt">View Project</p>
                                    </div>
                                </div>
                                <div className="box__left">
                                    <div className="left_hover_txt">
                                        <p className="main_txt">Web</p>
                                        <p className="sub_txt">View Project</p>
                                    </div>
                                </div> */}
                                {/* <div className="box__top">Top → Bottom</div>
                                <div className="box__bottom">Bottom → Top</div> */}
                                <div className="box__center">
                                <img src={caarya} className="card_img"></img> 
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a rel="noopener noreferrer" href="https://www.parkpoolr.com" target="_blank">
                            <div className="box">
                                {/* <div className="box__right">
                                    <div className="right_hover_txt">
                                        <p className="main_txt">Web</p>
                                        <p className="sub_txt">View Project</p>
                                    </div>
                                </div>
                                <div className="box__left">
                                <div className="left_hover_txt">
                                        <p className="main_txt">Web</p>
                                        <p className="sub_txt">View Project</p>
                                </div>
                                </div> */}
                                <div className="box__center">
                                <img src={park} className="card_img"></img> 
                                </div>
                            </div>
                        </a>                        
                    </div>
                    <div className="col-sm-6">
                        <a rel="noopener noreferrer" href="https://www.scirque.com" target="_blank">
                            <div className="box">
                                {/* <div className="box__right">
                                    <div className="right_hover_txt">
                                        <p className="main_txt">Web</p>
                                        <p className="sub_txt">View Project</p>
                                    </div>
                                </div>
                                <div className="box__left">
                                <div className="left_hover_txt">
                                        <p className="main_txt">Web</p>
                                        <p className="sub_txt">View Project</p>
                                </div>
                                </div> */}
                                <div className="box__center">
                                <img src={scirque} className="card_img"></img> 
                                </div>
                            </div>
                            </a>
                    </div>
                    <div className="col-sm-6">
                        <a rel="noopener noreferrer" href="https://adventuresofsuperstretch.com" target="_blank">
                            <div className="box">
                                {/* <div className="box__right">
                                    <div className="right_hover_txt">
                                        <p className="main_txt">Web</p>
                                        <p className="sub_txt">View Project</p>
                                    </div>
                                </div>
                                <div className="box__left">
                                <div className="left_hover_txt">
                                        <p className="main_txt">Web</p>
                                        <p className="sub_txt">View Project</p>
                                </div>
                                </div> */}
                                <div className="box__center">
                                <img src={supers} className="card_img"></img> 
                                </div>
                            </div>
                            </a>
                    </div>
                    <div className="col-sm-6">
                        <a rel="noopener noreferrer" href="https://chrome.google.com/webstore/detail/10troveio/ohdickaofoendlhknkpjilelkhjodkde?hl=en" target="_blank">
                            <div className="box">
                                {/* <div className="box__right">
                                    <div className="right_hover_txt">
                                        <p className="main_txt">Chrome Extension</p>
                                        <p className="sub_txt">View Project</p>
                                    </div>
                                </div>
                                <div className="box__left">
                                <div className="left_hover_txt">
                                        <p className="main_txt">Chrome Extension</p>
                                        <p className="sub_txt">View Project</p>
                                </div>
                                </div> */}
                                <div className="box__center">
                                <img src={trove} className="card_img"></img> 
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a rel="noopener noreferrer" href="https://www.raxatechnosecuritysolutions.in" target="_blank">
                            <div className="box">
                                {/* <div className="box__right">
                                    <div className="right_hover_txt">
                                        <p className="main_txt">Web</p>
                                        <p className="sub_txt">View Project</p>
                                    </div>
                                </div>
                                <div className="box__left">
                                <div className="left_hover_txt">
                                        <p className="main_txt">Web</p>
                                        <p className="sub_txt">View Project</p>
                                </div>
                                </div> */}
                                <div className="box__center">
                                <img src={raxa} className="card_img"></img> 
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

