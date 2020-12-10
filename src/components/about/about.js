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
                <div id={'about'} className="about_page">
                    <h1>Neel Baggam</h1>
                    <h2>
                        Full-Stack Developer 
                        <br/>
                        Based in Melbourne,Australia  
                    </h2>
                </div>
                <div className='icon-scroll'><div/>
            </div>
            </div>
        );
    }
}

