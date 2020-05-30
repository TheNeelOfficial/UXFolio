import React from "react";

// import some_img from "example.png";

export class NotFound extends React.Component{
    render(){
        return(
            <div>
                {/* <Menu/> */}
                <div className="error_page">
                    {/* <img src={some_img}></img> */}
                    <div className="error_txt">
                        <h1>404</h1>
                        <p>Error Page</p> 
                    </div>
                </div>
            </div>
        );
    }
}

