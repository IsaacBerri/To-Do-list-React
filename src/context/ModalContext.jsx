import { useState, createContext } from "react";

export const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [modalActive, setModalActive] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleClick = (type) => {
    setModalActive(!modalActive);
    setModalType(type);
  };

  return (
    <ModalContext.Provider
      value={{
        modalActive,
        handleClick,
        modalType,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
