import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import useHandleSubmit from "../hooks/useHandleSubmit";
import { ModalContext } from "../context/ModalContext";
import useDeleteTask from "../hooks/useDeleteTask";
import { ToDoContext } from "../context/ToDoContext";
import useEditTask from "../hooks/useEditTask";
import useFilterTask from "../hooks/useFilterTask";

const Modals = () => {
  const { handleClick, modalType } = useContext(ModalContext);
  const { objectDeleted, objectEdit } = useContext(ToDoContext);
  const { handleSubmit } = useHandleSubmit();
  const { handleDelete } = useDeleteTask();
  const { handleEdit } = useEditTask();
  const { handleClickFilter } = useFilterTask();

  if (modalType === "create") {
    return (
      <div className="containerModal">
        <span onClick={handleClick}>
          <Icon icon="ph:x-bold" color="#f21285" width="25" height="25" />
        </span>
        <h4>Task</h4>
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            handleSubmit(ev);
          }}
        >
          <input
            className="inputTask"
            name="Tarea"
            type="text"
            placeholder="Ingrese la tarea"
            required
          />
          <select name="Prioridad">
            <option>Ninguna</option>
            <option>Alta</option>
            <option>Media</option>
            <option>Baja</option>
          </select>
          <select name="Categoria">
            <option>Ninguna</option>
            <option>Hogar</option>
            <option>GYM</option>
            <option>Trabajo</option>
            <option>Estudio</option>
            <option>Juegos</option>
            <option>Otros</option>
          </select>
          <input name="Fecha" type="date" />
          <button>Confirm</button>
        </form>
      </div>
    );
  } else if (modalType === "delete") {
    return (
      <div className="containerModal">
        <span onClick={handleClick}>
          <Icon icon="ph:x-bold" color="#f21285" width="25" height="25" />
        </span>
        <h4>Delete Task</h4>
        <button
          onClick={() => {
            handleDelete(objectDeleted);
            handleClick();
          }}
        >
          Confirm
        </button>
      </div>
    );
  } else if (modalType === "edit") {
    return (
      <div className="containerModal">
        <span onClick={handleClick}>
          <Icon icon="ph:x-bold" color="#f21285" width="25" height="25" />
        </span>
        <h4>Edit task</h4>
        <form
          onSubmit={(ev) => {
            ev.preventDefault();
            handleEdit(ev, objectEdit);
          }}
        >
          <input
            name="Tarea"
            type="text"
            placeholder="Ingrese la tarea"
            defaultValue={objectEdit.Nombre}
            required
          />
          <select name="Prioridad" defaultValue={objectEdit.Prioridad}>
            <option>Ninguna</option>
            <option>Alta</option>
            <option>Media</option>
            <option>Baja</option>
          </select>
          <select name="Categoria" defaultValue={objectEdit.Categoria}>
            <option>Ninguna</option>
            <option>Hogar</option>
            <option>GYM</option>
            <option>Trabajo</option>
            <option>Estudio</option>
            <option>Juegos</option>
            <option>Otros</option>
          </select>
          <input name="Fecha" type="date" defaultValue={objectEdit.Fecha} />
          <button>Confirm</button>
        </form>
      </div>
    );
  } else if (modalType === "filter") {
    return (
      <div className="containerModal">
        <span onClick={handleClick}>
          <Icon icon="ph:x-bold" color="#f21285" width="25" height="25" />
        </span>
        <button onClick={() => {handleClick(); handleClickFilter("Todo")}}>Todo</button>
        <button onClick={() => {handleClick(); handleClickFilter("Prioridad")}}>
          Prioridad
        </button>
        <button onClick={() => {handleClick(); handleClickFilter("Fecha")}}>Fecha</button>
        <button onClick={() => {handleClick(); handleClickFilter("Hogar")}}>Hogar</button>
        <button onClick={() => {handleClick(); handleClickFilter("GYM")}}>GYM</button>
        <button onClick={() => {handleClick(); handleClickFilter("Trabajo")}}>Trabajo</button>
        <button onClick={() => {handleClick(); handleClickFilter("Estudio")}}>Estudio</button>
        <button onClick={() => {handleClick(); handleClickFilter("Juegos")}}>Juegos</button>
        <button onClick={() => {handleClick(); handleClickFilter("Otros")}}>Otros</button>
      </div>
    );
  }
};

export default Modals;
