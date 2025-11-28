const Hero = (props) => {
    
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
        </div>
    );
};  

export default Hero;