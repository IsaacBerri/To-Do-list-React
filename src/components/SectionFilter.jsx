import React, {useContext} from "react";
import { Icon } from "@iconify/react";
import Modals from "./Modals";
import { ModalContext } from "../context/ModalContext";

const SectionFilter = () => {
  const {modalActive, handleClick} = useContext(ModalContext)


  return (
    <section className="containerFilter">
      <button className="createTask" onClick={() => handleClick("create")}>
        <h3>Create task</h3>
      </button>
      <div className="containerSearch">
        <button className="filter">
          <Icon icon="mdi:filter" color="#f21285" width="25" height="25" />
        </button>
        <input type="text" placeholder="Search tasks" />
      </div>
      {modalActive ? <Modals/> : null}
    </section>
  );
};

export default SectionFilter;
