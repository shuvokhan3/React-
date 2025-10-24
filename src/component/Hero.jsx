const hero = () => {
    
    const name = ['rahim','karim','shuvo','khan'];

    return (
        <div>
            <ol>
                {
                    name.map((item)=>{

                        return <li>{item}</li>

                    })
                }
            </ol>
        </div>
    );
};

export default hero;