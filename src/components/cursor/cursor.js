import React from "react";


export class Cursor extends React.Component{
    componentDidMount() {

        const cursor = document.querySelector('.cursor');

        document.addEventListener('mousemove', e => {
            cursor.setAttribute("style", "top: "+(e.pageY - 1)+"px; left: "+(e.pageX - 1)+"px;")
        })

        document.addEventListener('click', () => {
            cursor.classList.add("expand");

            setTimeout(() => {
                cursor.classList.remove("expand");
            }, 500)
        })
    
      }
    render(){
        return(
            <div>
                <div className="cursor"></div>   
            </div>
        );
    }
}

