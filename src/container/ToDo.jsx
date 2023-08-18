import React from "react";
import "../style/ToDo.css";
import ListContainer from "../components/ListContainer";
import SectionFilter from "../components/SectionFilter";
import Footer from "../components/Footer";
import { ModalProvider } from "../context/ModalContext";

const ToDo = () => {
  return (
    <ModalProvider>
      <main className="containerApp">
        <h2>To Do</h2>
        <SectionFilter />
        <ListContainer />
        <Footer />
      </main>
    </ModalProvider>
  );
};

export default ToDo;
