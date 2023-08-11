import Login from "../components/Login";
import ToDo from "../components/ToDo";
import { useState } from "react";

function App() {

  const [bulean, setBulean] = useState(true)

  if (bulean === true) {
    return (
      <>
        <Login />
        {/* <button onClick={() => setBulean(false)}>Cambiar</button> */}
      </> 
    )
  }else {
    return (
      <>
        <ToDo />
        {/* <button onClick={() => setBulean(true)}>Cambiar</button> */}
      </>
    )
  }
  
}

export default App;
