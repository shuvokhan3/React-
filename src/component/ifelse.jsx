const ifelse = () => {
    let marks = 20;
    return (
        <div>
            {
                (()=>{
                    if(marks > 50){
                        return <h1>Good result</h1>
                    }else if(marks > 40 ){
                        return <h2>Not bad</h2>
                    }else{
                        return <h3 >Need to improve</h3>
                    }
                })()
            }
        </div>
    );
};

export default ifelse;