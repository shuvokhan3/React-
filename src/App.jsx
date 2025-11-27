const LoginStatusButton=(status)=>{
    if(status){
      return<button>Login</button>
    }else{
      return <button>Logout</button>
    }
}


const App = () => {

  return(
    <div>
      <h1>Login Status</h1>
      //call the function
      {LoginStatusButton(true)}
    </div>
  )
};

export default App;