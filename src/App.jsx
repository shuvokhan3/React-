import Hero from "./component/Hero";


const App = () => {

  const item = {
    name : "Shuvo",
    age : 25
  }

  const res = {
    total : 100,
    sub : "math",
    mark : 89
  }

  //define a function
  const btnClick=()=>{
    alert("I am successfully listning!!");
  }

  return(
    <div>
      <Hero mess="User Detail's" indivisualMess = "Math Result Value" items={item} mathRes={res} sendFuntion={btnClick}/>//send on child component


    </div>
  )
};

export default App;