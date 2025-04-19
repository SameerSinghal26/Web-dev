import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count , setcount] = useState(0)

  const addval = () =>{
    setcount(count + 1);
  }
  const removeval = () =>{

    setcount(check =>{
      const checking = check - 1;
      if(checking < 0){
        alert("Count value should not be negative!!!");
      }
      else{
        check = check - 1;
      }
      return check;
    });
  }  

  return (
    <>
      <h1>Hooks and Projects!!!</h1>
      <h2>Count : {count}</h2>
      <button onClick={addval}>Increase count value</button>
      <br/>
      <br />
      <button onClick={removeval}>Decrease count value</button>
    </>
  )
}

export default App
