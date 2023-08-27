import { createContext, useState } from "react";

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {

  let listaGuardada = JSON.parse(localStorage.getItem("List")) || []

  const [ListToDo, setListToDo] = useState(listaGuardada);

  
  const [objectDeleted, setObjectDeleted] = useState("");
  const [objectEdit, setObjectEdit] = useState({});
  const [sectionFilter, setSectionFilter] = useState("")

  const deleteTask = (taksName) => {
    setObjectDeleted(taksName);
  };

  const editTask = (taks, i) => {
    setObjectEdit({...taks, index: i});
  };

  return (
    <ToDoContext.Provider
      value={{
        ListToDo,
        setListToDo,
        deleteTask,
        objectDeleted,
        objectEdit,
        editTask,
        listaGuardada,
        sectionFilter,
        setSectionFilter
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
