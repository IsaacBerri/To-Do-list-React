import { useContext } from 'react'
import { ToDoContext } from '../context/ToDoContext'

const useDeleteTask = () => {
  const {ListToDo, setListToDo} = useContext(ToDoContext)

  const handleDelete = (name) => {
    const deletedTask = ListToDo.filter((obj) => obj.Nombre !== name)
    setListToDo(deletedTask)
  }

  
  
  return {
    handleDelete
  }
}

export default useDeleteTask