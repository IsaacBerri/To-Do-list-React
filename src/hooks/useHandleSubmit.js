import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

const useHandleSubmit = () => {
  const { ListToDo, setListToDo } = useContext(ToDoContext);

  const setLocalStorage = (value) => {
    try {
      setListToDo(value);
      window.localStorage.setItem("List", JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    setLocalStorage([
      ...ListToDo,
      {
        Nombre: e.target.Tarea.value,
        Prioridad: e.target.Prioridad.value,
        Categoria: e.target.Categoria.value,
        Fecha: e.target.Fecha.value,
      },
    ]);
  };

  return {
    handleSubmit,
  };
};

export default useHandleSubmit;
