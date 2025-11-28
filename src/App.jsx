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

  return(
    <div>
      <Hero mess="User Detail's" indivisualMess = "Math Result Value" items={item} mathRes={res}/>


    </div>
  )
};

export default App;