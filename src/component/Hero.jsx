const Hero = (props) => {


    function popupVal(){
        alert("Value is 300");
    }

    {/*Arow function */}
    const value=()=>{
        alert("Hello");
    }
    return (
        <div>
            <h1>{props.mess}</h1>
            <ul>
                <li>{props.items['name']}</li>
                <li>{props.items['age']}</li>
            </ul>

            <h1>{props.indivisualMess}</h1>
            <ul>
                <li>{props.mathRes['sub']}</li>
                <li>{props.mathRes['mark']}</li>
            </ul>
       
            <button onClick={props.sendFuntion} >Click Me</button>

            <button onClick={popupVal}>Click To Popup</button>

            <button onClick={value}>Click Me</button>
        </div>
    );
};  

export default Hero;