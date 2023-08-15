import { useState, useContext } from "react";
import { LoginContext } from "../context/loginContext";

export const useErrorCredentials = () => {
    const [errorCredentials, setErrorCredentials] = useState(false);

    const { setAccess, credentials } = useContext(LoginContext);
    
    const actualizarState = (emi, pass) => {
        setAccess({ email: emi, password: pass });
        if (emi !== credentials.email || pass !== credentials.password) {
          setErrorCredentials(true);
          setTimeout(() => {
            setErrorCredentials(false);
          }, 500);
        } else {
          setErrorCredentials(false);
        }
      };

    return {
        errorCredentials,
        actualizarState
    }
}