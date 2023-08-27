import React, { useContext } from 'react'
import { ToDoContext } from '../context/ToDoContext'
import { ModalContext } from '../context/ModalContext'

const ListContainer = () => {
  const {ListToDo, deleteTask, editTask, sectionFilter} = useContext(ToDoContext)
  const {handleClick} = useContext(ModalContext)

  const yesTask = ListToDo.length > 0
  return (
    <section className='ContainerToDos'>
      {yesTask ? ListToDo.map((obj, index) => (
        <div className='task' id={index} key={index}>
          <p>{obj.Nombre}</p>
          <p>{obj.Prioridad}</p>
          <p>{obj.Categoria}</p>
          <p>{obj.Fecha}</p>
          <button onClick={() => {handleClick("delete"); deleteTask(obj.Nombre)}}>X</button>
          <button onClick={() => {handleClick("edit"); editTask(obj, index)}}>Editar</button>
        </div>
      )) : <h2>No hay tareas disponibles {sectionFilter}</h2>}
    </section>
  )
}

export default ListContainer