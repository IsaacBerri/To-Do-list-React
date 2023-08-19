import { createContext, useState } from "react";

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [ListToDo, setListToDo] = useState([]);

  const [objectDeleted, setObjectDeleted] = useState("");
  const [objectEdit, setObjectEdit] = useState({});

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
        editTask
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};
