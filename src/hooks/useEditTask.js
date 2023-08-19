import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

const useEditTask = () => {
 
  const {ListToDo, setListToDo} = useContext(ToDoContext)

  const handleEdit = (e, object) => {
    const newObject = {
      Nombre: e.target.Tarea.value,
      Prioridad: e.target.Prioridad.value,
      Categoria: e.target.Categoria.value,
      Fecha: e.target.Fecha.value,
    }
    ListToDo.splice(object.index, 1, newObject)
    setListToDo([...ListToDo])
    localStorage.setItem("List", JSON.stringify([...ListToDo]))
    
  }

  return {
    handleEdit
  }
}

export default useEditTask