import React, {useContext} from "react";
import { Icon } from "@iconify/react";
import Modals from "./Modals";
import { ModalContext } from "../context/ModalContext";
import useFilterTask from "../hooks/useFilterTask";

const SectionFilter = () => {
  const {modalActive, handleClick} = useContext(ModalContext)
  const {handleChange} = useFilterTask()


  return (
    <section className="containerFilter">
      <button className="createTask" onClick={() => handleClick("create")}>
        <h3>Create task</h3>
      </button>
      <div className="containerSearch">
        <button className="filter" onClick={() => handleClick("filter")}>
          <Icon icon="mdi:filter" color="#f21285" width="25" height="25" />
        </button>
        <input type="text" placeholder="Search tasks" onChange={(ev) => handleChange(ev)}/>
      </div>
      {modalActive ? <Modals/> : null}
    </section>
  );
};

export default SectionFilter;
