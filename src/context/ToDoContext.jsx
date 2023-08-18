import { createContext, useState } from "react";

export const ToDoContext = createContext()

export const ToDoProvider = ({children}) => {
    
    const [ListToDo, setListToDo] = useState([])

    return (
        <ToDoContext.Provider value={{
            ListToDo,
            setListToDo
        }}>
            {children}
        </ToDoContext.Provider>
    )
}