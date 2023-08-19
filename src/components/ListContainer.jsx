import React, { useContext } from 'react'
import { ToDoContext } from '../context/ToDoContext'
import { ModalContext } from '../context/ModalContext'

const ListContainer = () => {
  const {ListToDo, deleteTask, editTask} = useContext(ToDoContext)
  const {handleClick} = useContext(ModalContext)


  return (
    <section className='ContainerToDos'>
      {ListToDo.map((obj, index) => (
        <div id={index} key={index}>
          <p>{obj.Nombre}</p>
          <p>{obj.Prioridad}</p>
          <p>{obj.Categoria}</p>
          <p>{obj.Fecha}</p>
          <button onClick={() => {handleClick("delete"); deleteTask(obj.Nombre)}}>X</button>
          <button onClick={() => {handleClick("edit"); editTask(obj, index)}}>Editar</button>
        </div>
      ))}
    </section>
  )
}

export default ListContainer