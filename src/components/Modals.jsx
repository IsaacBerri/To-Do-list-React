import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import useHandleSubmit from "../Hook/useHandleSubmit";
import { ModalContext } from "../context/ModalContext";
import useDeleteTask from "../Hook/useDeleteTask";

const Modals = () => {
  const { handleSubmit } = useHandleSubmit();
  const { handleClick, modalType, objectDeleted } = useContext(ModalContext);
  const { handleDelete } = useDeleteTask();

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
          <input name="Tarea" type="text" placeholder="Ingrese la tarea" />
          <select name="Prioridad">
            <option>Alta</option>
            <option>Media</option>
            <option>Baja</option>
          </select>
          <select name="Categoria">
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
        <button onClick={() => {handleDelete(objectDeleted); handleClick()}}>Confirm</button>
      </div>
    );
  }
};

export default Modals;
