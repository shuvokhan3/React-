const Header = () => {
    const loginStatus = "deactive";
    return (
        <div>
            {(()=>{
                if(loginStatus === "active"){
                    return <button>Logout</button>
                }else{
                    return <button>Login</button>
                }
            })()}
        </div>
    );
};

export default Header;