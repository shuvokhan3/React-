import { Fragment } from "react";

//Hero component 
const hero = () => {
    return (
        //jsx
        //Opening and closing tag must need in jsx
        <div>
            //Those are the main 

            //react attribure must write in camelcase

            //inside jsx it possible to implement js directly
            <button onClick={()=>{alert("Hello")}}>Click</button>

            // In react if i want to write enline this time i show write like this
            <p style={
                {color: 'red'}
            }>text</p>

            //All tag self close in jsx
            <br/>
        </div>
    );
};

export default hero;