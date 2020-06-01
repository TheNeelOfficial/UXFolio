import React from "react";


export class About extends React.Component{
    componentDidMount() {

        realshadow(document.getElementsByTagName('h1'), {
            type: 'text', 
            style: 'drop', 
            length: 10, 
            color: '0, 0, 0',
            opacity: 0.02,
        });
    
      }
    render(){
        return(
            <div>
                <div className="about_page">
                    <h1>Neel Baggam</h1>
                    <h2>
                        UI/UX Designer with full stack development skills 
                        <br/>
                        Based in Melbourne,Australia  
                    </h2>
                </div>
            </div>
        );
    }
}

