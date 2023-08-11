import { createContext, useState } from "react";

export const LoginContext = createContext();

export function LoginProvider({ children }) {
  const [access, setAccess] = useState({
    email: "",
    password: "",
  });

  const credentials = {
    email: "example@email.com",
    password: "12345",
  };

  const validation = access.email === credentials.email && access.password === credentials.password;

  return (
    <LoginContext.Provider
      value={{
        access,
        setAccess,
        credentials,
        validation
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}
