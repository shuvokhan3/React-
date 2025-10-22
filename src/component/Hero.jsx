import { Fragment } from "react";

//Hero component 
const hero = () => {
    return (
        //jsx
        //Opening and closing tag must need in jsx
        <div>
        
         
            <button onClick={()=>{alert("Hello")}}>Click</button>

           
            <p style={
                {color: 'red'}
            }>text</p>

           
            <br/>
        </div>
    );
};

export default hero;