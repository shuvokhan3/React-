const Footer = () => {

    const FormDataSubmit=(event)=>{
        event.preventDefault();

    }

    return (
        <div>
            <form onSubmit={FormDataSubmit}>
                <input placeholder="Enter Name"></input>

                <button>Click</button>
            </form>
        </div>
    );
};

export default Footer;