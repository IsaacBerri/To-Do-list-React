import { useContext } from "react";
import Login from "../components/Login";
import ToDo from "../container/ToDo";
import { LoginContext } from "../context/loginContext";

function App() {

  const {validation} = useContext(LoginContext)

  if (validation) {
    return (
      <>
        <Login />
      </> 
    )
  }else {
    return (
      <>
        <ToDo />
      </>
    )
  }
  
}

export default App;
