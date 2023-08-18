import {React, useContext} from 'react'
import { ToDoContext } from '../context/ToDoContext';

const useHandleSubmit = () => {

    const { ListToDo, setListToDo } = useContext(ToDoContext);

    const handleSubmit = (e) => {
        setListToDo([
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
    handleSubmit
  }
}

export default useHandleSubmit